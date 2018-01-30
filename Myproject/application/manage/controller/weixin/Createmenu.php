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
//        dump($menuList);exit;
        $this->assign("count",count($menuList["menu"]["button"]));
        $this->assign("menuList",$menuList["menu"]["button"]);
        return $this->fetch();
    }
    public function caidantijiao(){
        $tijiao=input();
        dump($tijiao);
        exit("success");
    }

    public function saveMenu()
    {
        $val=input();
        $information=array();
        foreach ($val as $v)
        {
            $temp=json_decode($v,true);
            $a=array();
            foreach ($temp as $va)
            {
                $a[$va["name"]]=$va["value"];
            }
            $information[]=$a;
        }
        $MenuList=array();
        foreach ($information as $value)
        {
            $menu=array();
            if($value["MenuEnable"]==1)
            {
                $menu["name"]=$value["MenuName"];
                if($value["Menu-type"]==1)
                {
                    $menu["type"]="view";
                    $menu["url"]=$value["MenuHref"];
                }
                else if($value["Menu-type"]==0)
                {
                    $menu["sub_button"]=array();
                    for($i=1;$i<=5;$i++)
                    {
                        $test=array();
                        if(isset($value["first-children-".$i]))
                        {
                            $test["name"]=$value["first-children-".$i];
                            if($value["chidren1-enable".$i]==1)
                            {
                                $test["type"]="view";
                                $test["url"]=$value["chidren1-href".$i];
                            }
                            else if($value["chidren1-enable".$i]==0)
                            {
                                $test["type"]="click";
                                $test["key"]=$value["chidren1-href".$i];
                            }
                        }
                        else
                        {
                            break;
                        }
                        $menu["sub_button"][]=$test;
                    }
                }
            }
            $MenuList[]=$menu;
        }
        $createMenu["button"]=$MenuList;
        $createMenu=json_encode($createMenu,true);
        $cacessToken=Common::getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/menu/create?access_token=$cacessToken";
        $result=Common::http_request($url,"post",$createMenu);
        $result=json_decode($result,true);
        if($result["errmsg"]=="ok")
        {
            exit("success");
        }
        else
        {
            exit("error");
        }



    }
}