<?php
namespace app\admin\controller\login;
use think\Controller;
use app\admin\model\User;
use think\Session;
use app\admin\controller\Phonecode;
class Register extends Controller
{


    public function index()
    {
//        echo "12346";
        $this->assign("Title", "注册");
        $this->assign("JsName", "login/Register/index");
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
        $val=User::where("UserAccount",$UserInformation["phoneNum"])->field("UserAccount")->find();
        if(isset($val["UserAccount"]))
        {
            exit("phoneExist");
        }
        else
        {
            if($UserInformation["phoneNum"]===Session::get("phoneCode")["phoneNum"])
            {
                if($UserInformation["PhoneCode"]===Session::get("phoneCode")["code"])
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
    public function phoneCode()
    {
        $phoneNum=input("phoneNum");
//        dump($phoneNum);exit;
        $val=User::where("UserAccount",$_POST["phoneNum"])->field("UserAccount")->find();
//        dump();
        if(isset($val["UserAccount"]))
        {
            exit("phoneExist");
        }
        else
        {
//            dump("ceshi");exit;
            $value=Phonecode::PhoneValidate($phoneNum,"phoneCode");
            exit($value);
        }
    }
}
