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
//        dump($result);exit;
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
    public function images(){

        $get=$_GET;
        if(isset($get["page"]))
        {
            $NowPage=$get["page"];
        }
        else
        {
            $NowPage=5;
        }
        $accesstoken=$this->getAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=$accesstoken";
        $data='{
                    "type":"image",
                    "offset":"'.(($NowPage-1)*15).'",
                    "count":"15"
                }';
        $result=Common::http_request($url,"post",$data);
        $result=json_decode($result,true);
        $List=$result["item"];
        foreach ($List as $key=> $val)
        {
            $a=explode(":",$val["url"]);
            $url="https:".$a[1];
            $List[$key]["href"]=$url;
        }
//        dump($List);
//        dump($result);exit;
        $PageCount=$result["total_count"];
        $Num=ceil($PageCount/15);//总页数
        $page=Common::Page($NowPage,$Num);
        $this->assign("images",$List);
        $this->assign("AllPage",$Num);
        $this->assign("NowPage",$NowPage);
        return $this->fetch();

    }
    public function tutijiao(){
        $tijiao=input();
        dump($tijiao);
        exit("success");
    }
}