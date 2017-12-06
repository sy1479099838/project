<?php
namespace app\manage\controller;
use think\Controller;
use app\manage\model\Admin;
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
                exit("error");
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
                if(MD5($post["password"])===$value["password"])
                {
                    Session::set('admin',$value);
                    exit("验证成功");
                }
                else
                {
                    exit("验证失败");
                }

            }
            else
            {
                exit("验证码有误");
            }
        }
    }
}
