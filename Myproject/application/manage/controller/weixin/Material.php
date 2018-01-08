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
                    "count":"4"
                }';
        $result=Common::http_request($url,"post",$data);
        $result=json_decode($result,true);
        $this->assign("news",$result);
//        dump($result);
        return $this->fetch();
    }

    /*
     * 删除图文消息
     * */
    public function delNews()
    {
        $id=input("id");
        $data='
            {
            "media_id":"'.$id.'"
            }
            ';
        $accessToken=$this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/material/del_material?access_token=$accessToken";
        $result=Common::http_request($url,"post",$data);
        $result=json_decode($result,true);
        if(isset($result["errcode"]) && $result["errcode"]==0)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
}