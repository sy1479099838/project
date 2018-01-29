<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
use app\manage\model\WeixinExpression;
class Reply extends Common
{
    public function index()
    {

        $biaoqing=json_decode(json_encode(WeixinExpression::all(),true),true);
//        $rul="https://api.weixin.qq.com/cgi-bin/media/upload?access_token=5_zQIvbgBrH6v14Y07ek4NiXhkKXrTGWgXoNG_7639xkI2kOkSPB-Eso6E0KL8nHvIMrEEhPIIHVJhW19p5ycx2heMRJxROwhQKrx7Sf8LZQvBchMWgYQDaIhV2BhqUfyyf4waO3EI6I7rj5rMJAFfAJAULQ&type=image";
//        $img=realpath("act1.jpg");
//        $data =array('media'=>'@'.$img);
//        $test=Common::http_request($rul,"post",$data);
//        $test=json_decode($test,true);
//        dump($test);
        $this->assign("Biaoqing",$biaoqing);
        return $this->fetch();
    }

    public function guanjianzi()
    {
        $guanjianzi=input();
        dump($guanjianzi);
        exit("success");

    }

}