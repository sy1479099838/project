<?php
namespace app\admin\controller\login;
use think\Controller;
use app\manage\controller\Common;
use app\admin\model\User;
use think\Session;
class Weixin extends Controller
{
    public function index()
    {
        $code=$_GET["code"];
        $appid="wx128a1dc9cf653ec1";
        $as="9d2a74eda105821467e413e1b4602247";
        $url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$as&code=$code&grant_type=authorization_code";
        $accesstoken=Common::http_request($url);
        $accesstoken=json_decode($accesstoken,true)["access_token"];
        $url2="https://api.weixin.qq.com/sns/userinfo?access_token=$accesstoken&openid=$appid&lang=zh_CN";
        $value=Common::http_request($url2);
        $value=json_decode($value,true);
        $Account=User::where("UserAccount",$value["openid"])->field("UserAccount")->find();
        if($Account=="" || $Account==NULL)
        {
            $result=User::create([
                "UserAccount"=>$value["openid"],
                "UserName"=>$value["nickname"],
                "Registration"=>"2",
                "UserSex"=>$value["sex"],
                "UserImg"=>$value["headimgurl"],
                "UserAddress"=>$value["country"].$value["province"].$value["city"],
                "RegisterTime"=>time()
            ]);
            if($result)
            {
                $res=User::where("UserAccount",$value["openid"])->find();
                Session::set('UserInformation',$res);
                $this->redirect('/admin/home/Home/index');
            }
            else
            {
                $this->redirect('/admin/login/login/index');
            }
        }
        else
        {
            $res=User::where("UserAccount",$value["openid"])->find();
            Session::set('UserInformation',$res);
            $this->redirect('/admin/home/Home/index');
        }
    }
}
