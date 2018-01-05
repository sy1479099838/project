<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
class Material extends Common
{
    public function index()
    {

        $accesstoken=$this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=$accesstoken";
        $data='{
                    "type":"news",
                    "offset":"0",
                    "count":"3"
                }';
        $result=Common::http_request($url,"post",$data);
        $result=json_decode($result,true);
        $this->assign("news",$result);
//        dump($result);
        return $this->fetch();
    }
    public function chakanXQ()
    {
        $id=input("id");
        dump($id);exit;
        $accessToken=$this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/material/get_material?access_token=$accessToken";
        $data='{
                "media_id":'.$id.'
                }';
        $result=Common::http_request($url,"post",$data);
        $result=json_decode($result,true);
        dump($result);
    }
}