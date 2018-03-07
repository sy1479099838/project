<?php
namespace app\manage\controller;
use think\Controller;
use think\Request;
use think\Session;
use app\manage\model\Managemenu;
use app\manage\model\Accesstoken;
class Common extends Controller
{
    public function __construct(Request $request = null)
    {
        parent::__construct($request);
        $admin=Session::get('admin');

        if(empty($admin))
        {
            $this->redirect('Login/index');
        }
        else
        {
            $this->assign("LoginAdmin",$admin);
            if($admin["type"]=="admin")
            {
                $Rule=$admin["AdminRule"];
            }
            else
            {
                $Rule=$admin["power"];
            }

            $Rule=explode(",",$Rule);
            if(isset($_GET["id"]))
            {
                if($admin["id"]==1)
                {
                    $value=Managemenu::where("Enable","1")->field("id,MenuName,leval,pid,href,fileName")->select();
                }
                else
                {
                    if(!in_array($_GET["id"],$Rule))
                    {
                        Session::clear();
                        $this->redirect('Login/index');
                    }
                    else
                    {
                        if($admin["type"]=="admin")
                        {
                            $value=Managemenu::where("Enable","1")->where("id","in",$admin["AdminRule"])->field("id,MenuName,leval,pid,href,fileName")->select();
                        }
                        else
                        {
                            $value=Managemenu::where("Enable","1")->where("id","in",$admin["power"])->field("id,MenuName,leval,pid,href,fileName")->select();
                        }

                    }

                }

                $value=json_decode(json_encode($value,true),true);
                $Menu=$this->treeData($value);
                $id=Managemenu::where("id",$_GET["id"])->field("cid,fileName")->find();
                $cid=explode(",",json_decode(json_encode($id,true),true)["cid"]);
                $this->assign("fileName",$id->fileName);
                $this->assign("position",$_GET["id"]);
                $this->assign("MenuId",$cid);
                $this->assign("MenuName",$Menu);
            }

        }
    }
    public function index()
    {

    }

    public static function treeData($data,$pid = 0){
        $result = array();
        foreach($data as $v){
            if($v['pid'] == $pid){
                $v['children'] = self::treeData($data,$v['id']);
                $result[] = $v;
            }
        }
        return $result;
    }

    public function OutLogin()
    {
        Session::clear();
        exit("success");
    }
    public static function Page($NowPage,$Num)
    {
        $page=array();
        if($Num>8)
        {
            if($NowPage<6)
            {
                for($i=1;$i<=7;$i++)
                {
                    $page[]=$i;
                }
                $page[]="...";
                $page[]=$Num;
            }
            elseif($NowPage>=6 && $NowPage<$Num-3)
            {
                $page[]="1";
                $page[]="...";
                for($i=$NowPage-2;$i<=$NowPage+2;$i++)
                {
                    $page[]=$i;
                }
                $page[]="...";
                $page[]=$Num;
            }
            else
            {
                $page[]="1";
                $page[]="...";
                for($i=$Num-6;$i<=$Num;$i++)
                {
                    $page[]=$i;
                }

            }
        }
        else
        {
            for($i=1;$i<=$Num;$i++)
            {
                $page[]=$i;
            }
        }
        return $page;
    }

    public static function http_request($url,$method="get",$data=null,$https=true)
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
        if($Amax==0)
        {
            $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdfb8f36560c95e58&secret=4066c3ac32329cabcea685e03abbbe39";
            $method="get";
            $accessToken=$this->http_request($url,$method);
            dump($accessToken);
            $res=json_decode($accessToken,true);
            $access_token=$res["access_token"];
            $user = Accesstoken::create([
                'createTime'  =>  time(),
                'AccessToken' =>  $access_token
            ]);
        }
        else
        {
            $accessToken=Accesstoken::where("createTime",$Amax)->find();
            if(time()-$accessToken->createTime>6000)
            {
                $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxdfb8f36560c95e58&secret=4066c3ac32329cabcea685e03abbbe39";
                $method="get";
                $accessToken=$this->http_request($url,$method);
                dump($accessToken);exit;
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
        }
        return $access_token;
    }

    public static function excel($fileName)
    {
        $handle = fopen($fileName,"r");
        $data = fgetcsv($handle);
        $data = eval('return '.iconv('gbk','utf-8',var_export($data,true)).';');
        $num=count($data);
        $row=1;
        while($value=fgetcsv($handle))
        {
            $value = eval('return '.iconv('gbk','utf-8',var_export($value,true)).';');
            for($i=0;$i<$num;$i++)
            {
                $val[$row][$data[$i]]=$value[$i];
            }
            $row++;
        }
        return $val;
    }
    
    /*
     * 拉取微信公众号的用户信息
     * */

    public function GetUserInformation($openId)
    {
        $access_token=self::getAccessToken();
        $url2="https://api.weixin.qq.com/cgi-bin/user/info?access_token=$access_token&openid=$openId&lang=zh_CN";
        $people=json_decode(Common::http_request($url2,"get"),true);
        return $people;
    }

    public static function fisker_decode_v2($s){
        $a = str_split($s,2);
        $s = '%' . implode('%',$a);
        return urldecode($s);
    }

}
