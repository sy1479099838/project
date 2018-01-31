<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
use app\manage\model\WeixinExpression;
use app\manage\model\Reply as ModelReplay;
use app\manage\model\Receive;
class Reply extends Common
{
    public function index()
    {
//        $a=$this->GetUserInformation("oNqUrwRmDJslHtb9wlOmcJQUekLc");
//        dump($a);exit;
        $text=ModelReplay::where("id","not in","1,2")->select();
        $text=json_decode(json_encode($text,true),true);
//        dump($text);exit;
        $biaoqing=json_decode(json_encode(WeixinExpression::all(),true),true);
        $this->assign("Biaoqing",$biaoqing);
        $this->assign("text",$text);
        return $this->fetch();
    }

    public function guanjianzi()
    {
        $guanjianzi=input();
        $result=ModelReplay::create([
            "MsgType"=>"text",
            "ReplyContent"=>$guanjianzi["guanjian_content"]
        ]);
        if($result)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }

    public function saveReceive()
    {
        $info=input();
        switch ($info["ReplyType"])
        {
            case 1:
                $type="news";
                break;
            case 2:
                $type="photo";
                break;
            case 3:
                $type="text";
                break;
        }
        $value=Receive::create([
            "MegType"=>"text",
            "content"=>$info["ReceiveContent"],
            "ReplyMegType"=>$type,
            "ReplyID"=>$info["text"]
        ]);
        if($value)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }

}