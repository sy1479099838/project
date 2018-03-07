<?php
namespace app\manage\controller\weixin;
use think\Controller;
use app\manage\controller\Common;
use app\manage\model\Accesstoken;
class Send extends Controller
{
    public function index()
    {
        $access_token=$this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=$access_token";
        $data='{"touser":"oNqUrwRmDJslHtb9wlOmcJQUekLc","msgtype":"text","text":{"content":"Hello World"}}';
        $value=Common::http_request($url,"post",$data);
        dump($value);
    }
    public function getAccessToken()
    {
        $Amax=Accesstoken::max("createTime");
        $accessToken=Accesstoken::where("createTime",$Amax)->find();
        if(time()-$accessToken->createTime>0)
        {
            $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx128a1dc9cf653ec1&secret=9d2a74eda105821467e413e1b4602247";
            $method="get";
            $accessToken=Common::http_request($url,$method);
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

    public function addKefu()
    {
        $accesstoken=$this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=$accesstoken";
        $data='{
                     "kf_account" : "shen@shen1",
                     "nickname" : "客服1",
                     "password" : "shen123",
                }';
        $value=Common::http_request($url);
        dump($value);
    }
}

