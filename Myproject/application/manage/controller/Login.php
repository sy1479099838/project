<?php
namespace app\manage\controller;
use think\Controller;
use app\manage\model\Admin;
use app\manage\model\Business;
use think\captcha\Captcha;
use think\Session;
class Login extends Controller
{
    public function index()
    {
        return $this->fetch();
    }
    public function login()
    {
        if($_POST)
        {
            $PostAccount=$_POST["account"];
            $account=Admin::where('account',$PostAccount)->field("account")->find();
            $account=json_decode(json_encode($account,true),true);
            if($PostAccount===$account["account"])
            {
                exit("success");
            }
            else
            {
                $BusinessAccount=Business::where('Account',$PostAccount)->field("Account")->find();

                $BusinessAccount=json_decode(json_encode($BusinessAccount,true),true);
//                dump($BusinessAccount);exit;
                if($PostAccount===$BusinessAccount["Account"])
                {
                    exit("success");
                }
                else
                {
                    exit("error");
                }
            }
        }
    }
    public function verify()
    {
        if($_POST)
        {
            $post=$_POST;
            $verify=$post["verify"];
            $captcha = new Captcha();
            $result=$captcha->check($verify);
            if($result)
            {
                $value=Admin::where('account',$post["account"])->find();
                $value=json_decode(json_encode($value,true),true);
                if($value=="" || $value==NULL)
                {
                    $result=Business::where("Account",$post["account"])->find();
                    $result=json_decode(json_encode($result,true),true);
                    if(MD5("DHF".$post["password"]."PWD")===$result["LoginPwd"])
                    {
                        $result["type"]="Business";
                        Session::set('admin',$result);
                        exit("验证成功");
                    }
                    else
                    {
                        exit("验证失败");
                    }
                }
                else
                {
                    if(MD5($post["password"])===$value["password"])
                    {
                        $value["type"]="admin";
                        Session::set('admin',$value);
                        exit("验证成功");
                    }
                    else
                    {
                        exit("验证失败");
                    }
                }


            }
            else
            {
                exit("验证码有误");
            }
        }
    }
}
