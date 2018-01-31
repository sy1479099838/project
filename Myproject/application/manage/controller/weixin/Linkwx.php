<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
use app\manage\model\Receive;
use think\Controller;
use app\manage\model\Accesstoken;
use think\Session;
use think\Db;
use app\manage\model\FollowPeople;
use app\admin\model\GoodsOrder;
use app\manage\model\Reply;
define("TOKEN", "weixin");//自己定义的token 就是个通信的私钥
header("content-type:text/html;charset=utf-8;");
class Linkwx extends Controller
{
    public function index()
    {
        if(isset($_GET["echostr"]))
        {
            $this->valid();
        }
        else
        {
            $this->responseMsg();
        }
    }
    public function valid()
    {
        $echoStr = $_GET["echostr"];
        if($this->checkSignature()){
            echo $echoStr;
            exit;
        }
    }
    public function responseMsg()
    {
        $postStr = file_get_contents("php://input");
        $this->saveFile($postStr);
        if (!empty($postStr)){
            $postObj = simplexml_load_string($postStr, 'SimpleXMLElement', LIBXML_NOCDATA);
            if($postObj->MsgType=="text")
            {
                $keyword = trim($postObj->Content);
                $result=Receive::where("content",$keyword)
                    ->where("MegType","text")
                    ->field("ReplyID,ReplyMegType")
                    ->find();
                if($result)
                {
                    $this->resMsg($result->ReplyID,$result->ReplyMegType,$postObj);
                }
                else
                {
                    $this->resMsg(1,"text",$postObj);
                }
            }
            if($postObj->MsgType=="event")
            {
                $Event=$postObj->Event;
                $this->saveFile($Event);
                $openId=$postObj->FromUserName;
                if($Event=="subscribe")
                {
                    $people=$this->GetUserInformation($openId);
                    $result=FollowPeople::create([
                        "openid"=>$people["openid"],
                        "nickname"=>$people["nickname"],
                        "sex"=>$people["sex"],
                        "language"=>$people["language"],
                        "address"=>$people["country"].$people["province"].$people["city"],
                        "head"=>$people["headimgurl"],
                        "subscribe_time"=>$people["subscribe_time"],
                        "remark"=>$people["remark"]
                    ]);
                    if($result)
                    {
                        $this->resMsg(2,"text",$postObj);
                    }
                }
                else if($Event=="unsubscribe")
                {
                    $people=$this->GetUserInformation($openId);
                    Db::table('t_follow_people')->where('openid',$people["openid"])->delete();
                }
                else if($Event=="CLICK")
                {
                    $EventKey = trim($postObj->EventKey);
                    $this->saveFile($EventKey);
                    $result=Receive::where("content",$EventKey)
                        ->where("MegType","text")
                        ->field("ReplyID,ReplyMegType")
                        ->find();
                    if($result)
                    {
                        $this->resMsg($result->ReplyID,$result->ReplyMegType,$postObj);
                    }
                    else
                    {
                        $this->resMsg(1,"text",$postObj);
                    }
                }
            }
        }else {
            echo '咋不说哈呢';
            exit;
        }
    }
    private function checkSignature()
    {
        $signature = $_GET["signature"];
        $timestamp = $_GET["timestamp"];
        $nonce = $_GET["nonce"];
        $token =TOKEN;
        $tmpArr = array($token, $timestamp, $nonce);
        sort($tmpArr);
        $tmpStr = implode( $tmpArr );
        $tmpStr = sha1( $tmpStr );
        if( $tmpStr == $signature ){
            return true;
        }else{
            return false;
        }
    }
    public function saveFile($value)
    {
        file_put_contents("xmlReceive.txt",$value."\r\n",FILE_APPEND);
        $fileName="xmlReceive.txt";
        $size = filesize($fileName);
        if($size>=10000)
        {
            unlink("$fileName");
        }
        return 0;
    }
    public function resMsg($ReplyID,$megType,$postObj)
    {
        $fromUsername = $postObj->FromUserName;
        $toUsername = $postObj->ToUserName;
        $time = time();
        if($megType=="text")
        {
            $textTpl = "<xml>
                    <ToUserName><![CDATA[%s]]></ToUserName>
                    <FromUserName><![CDATA[%s]]></FromUserName>
                    <CreateTime>%s</CreateTime>
                    <MsgType><![CDATA[%s]]></MsgType>
                    <Content><![CDATA[%s]]></Content>
                    <FuncFlag>0<FuncFlag>
                    </xml>";
            $contentStr=Reply::where("id",$ReplyID)->field("ReplyContent")->find();
            $contentStr=$contentStr->ReplyContent;
            $resultStr = sprintf($textTpl, $fromUsername, $toUsername, $time, $megType, $contentStr);
            echo $resultStr;
        }
    }
    public function http_request($url,$method="get",$data=null,$https=true)
    {
        $ch=curl_init();//初始化
        curl_setopt($ch,CURLOPT_URL,$url);//设置访问的url
        curl_setopt($ch,CURLOPT_HEADER,false);//设置不需要头信息
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);//只获取页面类容，但不输出
        if($https)
        {
            curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);//不做服务器认证
            curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);//不做客户端认证
        }
        if($method=="post")
        {
            curl_setopt($ch,CURLOPT_POST,true);//设置请求是post方式
            curl_setopt($ch,CURLOPT_POSTFIELDS,$data);//设置post请求的数据
        }
        $str=curl_exec($ch);//执行访问，返回结果
        curl_close($ch);//关闭curl,释放资源
        return $str;
    }
    public function getAccessToken()
    {
        $Amax=Accesstoken::max("createTime");
        $accessToken=Accesstoken::where("createTime",$Amax)->find();
        if(time()-$accessToken->createTime>6000)
        {
            $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx128a1dc9cf653ec1&secret=9d2a74eda105821467e413e1b4602247";
            $method="get";
            $accessToken=$this->http_request($url,$method);
            $res=json_decode($accessToken,true);
            $access_token=$res["access_token"];
            $user = Accesstoken::create([
                'createTime'  =>  time(),
                'AccessToken' =>  $access_token
            ]);
        }
        else
        {
            $access_token=$accessToken->AccessToken;
        }
        return $access_token;
    }
/*
 * 微信支付回调函数
 * */
    public function notify()
    {
        $data=file_get_contents("php://input");
        $result = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);
        $this->saveFile($data);
        $result=json_decode(json_encode($result,true),true);
//        $result=xmlToArray($data);
        $outTradeTo = $result['out_trade_no'];
        if($result['return_code'] == 'FAIL'){

            $failResult="
                <xml>
                    <return_code><![CDATA[FAIL]]></return_code>
                    <return_msg><![CDATA[OK]]></return_msg>
                </xml>
            ";
            echo $failResult;
            exit;
        }else{
            if($result['result_code'] == 'FAIL'){
            }else{;
                $value=GoodsOrder::where("GoodsOrderID",$outTradeTo)->update([
                    "lastUpdateTime"=>time(),
                    "state"=>2,
                ]);
            }
        }

        $failResult="
                <xml>
                    <return_code><![CDATA[FAIL]]></return_code>
                    <return_msg><![CDATA[OK]]></return_msg>
                </xml>
            ";
        echo $failResult;
        exit;

    }

    public function GetUserInformation($openId)
    {
        $access_token=$this->getAccessToken();
        $url2="https://api.weixin.qq.com/cgi-bin/user/info?access_token=$access_token&openid=$openId&lang=zh_CN";
        $people=json_decode(Common::http_request($url2,"get"),true);
        return $people;
    }
}