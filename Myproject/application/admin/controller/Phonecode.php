<?php
namespace app\admin\controller;
use think\Controller;
use think\Session;
use app\admin\model\User;
class Phonecode extends Controller
{
    public function index()
    {
        if($_POST)
        {
            $val=User::where("UserAccount",$_POST["phoneNum"])->field("UserAccount")->find();
            if(isset($val["UserAccount"]))
            {
                exit("phoneExist");
            }
            else
            {
                $accountSid="5ae3d7774b764694b24ca24e2f97f7b3";
                $TOKEN ="0fe65e31b867466c8d884fbe1fd7e5f6";
                $timestamp=date("YmdHis",time());
                $id=$this->getRandomString(6);
                $smsContent="【大黄蜂科技】您的验证码为{$id}，请于3分钟内正确输入，如非本人操作，请忽略此短信。";
                $phoneNum=$_POST["phoneNum"];
                $url="https://api.miaodiyun.com/20150822/industrySMS/sendSMS";
                $sig=MD5($accountSid.$TOKEN.$timestamp);
                $data="accountSid={$accountSid}&smsContent={$smsContent}&to={$phoneNum}&timestamp={$timestamp}&sig={$sig}&respDataType=JSON";
                if(Session::has('Phonecode'))
                {
                    Session::delete('Phonecode');
                $value=$this->http_request($url,"post",$data);
                $value=json_decode($value,true);
                    if($value["respCode"]==="00000")
                    {
                    $Phonecode=array("code"=>$id,"Time"=>time(),"phoneNum"=>$phoneNum);
                        Session::set('Phonecode',$Phonecode);
                        exit("success");
                    }
                    else
                    {
                        exit("error");
                    }
                }
                else
                {
                $value=$this->http_request($url,"post",$data);
                $value=json_decode($value,true);
                    if($value["respCode"]==="00000")
                    {
                        $Phonecode=array("code"=>$id,"Time"=>time(),"phoneNum"=>$phoneNum);
                        Session::set('Phonecode',$Phonecode);
                        exit("success");
                    }
                    else
                    {
                        exit("error");
                    }
                }
            }


        }

    }

    public static function PhoneValidate($phoneNum ,$sessionName)
    {
        $accountSid="5ae3d7774b764694b24ca24e2f97f7b3";
        $TOKEN ="0fe65e31b867466c8d884fbe1fd7e5f6";
        $timestamp=date("YmdHis",time());
        $id=self::getRandomString(6);
        $smsContent="【大黄蜂科技】您的验证码为{$id}，请于3分钟内正确输入，如非本人操作，请忽略此短信。";
//        $phoneNum=$_POST["phoneNum"];
        $url="https://api.miaodiyun.com/20150822/industrySMS/sendSMS";
        $sig=MD5($accountSid.$TOKEN.$timestamp);
        $data="accountSid={$accountSid}&smsContent={$smsContent}&to={$phoneNum}&timestamp={$timestamp}&sig={$sig}&respDataType=JSON";
        if(Session::has($sessionName))
        {
            Session::delete($sessionName);
            $value=self::http_request($url,"post",$data);
            $value=json_decode($value,true);
            if($value["respCode"]==="00000")
            {
                $Phonecode=array("code"=>$id,"Time"=>time(),"phoneNum"=>$phoneNum);
                Session::set($sessionName,$Phonecode);
                return "success";
            }
            else
            {
                return "error";
            }
        }
        else
        {
            $value=self::http_request($url,"post",$data);
            $value=json_decode($value,true);
            if($value["respCode"]==="00000")
            {
                $Phonecode=array("code"=>$id,"Time"=>time(),"phoneNum"=>$phoneNum);
                Session::set($sessionName,$Phonecode);
                return "success";
            }
            else
            {
                return "error";
            }
        }
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
    public static function getRandomString($len, $chars=null)
    {
        if (is_null($chars)){
            $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        }
        mt_srand(10000000*(double)microtime());
        for ($i = 0, $str = '', $lc = strlen($chars)-1; $i < $len; $i++){
            $str .= $chars[mt_rand(0, $lc)];
        }
        return $str;
    }
}
