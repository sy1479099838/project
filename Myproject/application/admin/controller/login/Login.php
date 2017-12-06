<?php
namespace app\admin\controller\login;
use think\Controller;
use app\admin\model\User;
use think\Session;
class Login extends Controller
{
    public function index()
    {
        $this->assign("Title", "登录");
        $this->assign("JsName", "login/Login/index");
        return $this->fetch();
    }
    public function AccountValidate()
    {
        if($_POST["account"])
        {
            $account=User::where("UserAccount",$_POST["account"])->field("UserAccount")->find();
            if($account["UserAccount"]===$_POST["account"])
            {
                exit("success");
            }
            else
            {
                exit("error");
            }
        }
    }
    public function UserLogin()
    {
        if(!empty($_POST))
        {
            $data=$_POST;
            $result=User::where("UserAccount",$data["account"])->find();
            $result=json_decode(json_encode($result,true),true);
            if(!empty($result) && $result["UserPassword"]===MD5($data["PWD"]))
            {
                Session::set('UserInformation',$result);
                $session=Session::get("UserInformation");
                exit("success");
            }
            else
            {
                exit("error");
            }

        }
    }

    public function register()
    {
        $this->assign("Title", "注册");
        $this->assign("JsName", "Login/register");
        $UserName="游客".$this->getRandomString(10);
        $this->assign("UserName", $UserName);
        return $this->fetch();
    }

    public function getRandomString($len, $chars=null)
    {
        if (is_null($chars)){
            $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        }
        mt_srand(10000000*(double)microtime());
        for ($i = 0, $str = '', $lc = strlen($chars)-1; $i < $len; $i++){
            $str .= $chars[mt_rand(0, $lc)];
        }
        return $str;
    }

    public function PhoneRegister()
    {
        $UserInformation=input();
        if($UserInformation["phoneNum"]===Session::get("Phonecode")["phoneNum"])
        {
            if($UserInformation["PhoneCode"]===Session::get("Phonecode")["code"])
            {
                $PWD=MD5($UserInformation["UserPwd"]);
                $user = User::create([
                    'UserName'  =>  $UserInformation["username"],
                    'UserPassword' =>  $PWD,
                    'RegisterTime'=>time(),
                    'PhoneNum'=>$UserInformation["phoneNum"],
                    'UserAccount'=>$UserInformation["phoneNum"]
                ]);
                if($user["id"]!==0)
                {
                    exit("RegisterSuccess");
                }
                else
                {
                    exit("RegisterError");
                }
            }
            else
            {
                exit("codeError");
            }
        }
        else
        {
            exit("PhoneError");
        }
    }
}
