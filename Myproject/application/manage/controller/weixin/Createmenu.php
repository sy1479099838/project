<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
class Createmenu extends Common
{
    public function index()
    {

        $cacessToken=Common::getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/menu/get?access_token=$cacessToken";
//        $url="https://api.weixin.qq.com/cgi-bin/menu/create?access_token=$cacessToken";

//        $data='{
//                 "button":[
//                 {
//                      "type":"view",
//                           "name":"一起玩",
//                           "url":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdfb8f36560c95e58&redirect_uri=http://www.hfyiqiwan.top/admin/login/Weixin/index&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
//                  },
//                  {
//                       "name":"黄蜂福利",
//                       "sub_button":[
//                       {
//                           "type":"view",
//                           "name":"百度搜索",
//                           "url":"https://www.baidu.com"
//                        },
//                        {
//                           "type":"click",
//                           "name":"赞一下我们",
//                           "key":"您好"
//                        }]
//                   },
//                  {
//                       "name":"测试",
//                       "sub_button":[
//                       {
//                           "type":"view",
//                           "name":"商城登录",
//                           "url":"http://www.hfyiqiwan.top"
//                        },
//                        {
//                           "type":"click",
//                           "name":"了解我们",
//                           "key":"您好"
//                        }]
//                   }]
//             }';
        $menuList=Common::http_request($url);
        $menuList=json_decode($menuList,true);
        $this->assign("count",count($menuList["menu"]["button"]));
        $this->assign("menuList",$menuList["menu"]["button"]);
        return $this->fetch();
    }
    public function caidantijiao(){
        $tijiao=input();
        dump($tijiao);
        exit("success");
    }
}