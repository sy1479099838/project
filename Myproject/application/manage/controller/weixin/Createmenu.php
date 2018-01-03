<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
class Createmenu extends Common
{
    public function index()
    {

        $cacessToken=Common::getAccessToken();

//        $url="https://api.weixin.qq.com/cgi-bin/menu/get?access_token=$cacessToken";
        $url="https://api.weixin.qq.com/cgi-bin/menu/create?access_token=$cacessToken";

        $data='{
                 "button":[
                 {
                      "type":"click",
                      "name":"今日最热",
                      "key":"V1001_TODAY_MUSIC"
                  },
                  {
                       "name":"旅游",
                       "sub_button":[
                       {
                           "type":"view",
                           "name":"商城",
                           "url":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx128a1dc9cf653ec1&redirect_uri=http://www.hfyiqiwan.top/admin/login/Weixin/index&response_type=code&scope=snsapi_userinfo&state=shenyang#wechat_redirec"
                        },
                        {
                           "type":"click",
                           "name":"赞一下我们",
                           "key":"您好"
                        }]
                   }]
             }';
        $menuList=Common::http_request($url,"post" ,$data);
//        $menuList=json_decode($menuList,true);
//        $this->assign("count",count($menuList["menu"]["button"]));
//        $this->assign("menuList",$menuList["menu"]["button"]);
//        return $this->fetch();
    }
}