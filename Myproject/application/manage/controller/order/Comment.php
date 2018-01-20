<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Comment extends Common
{
    public function index()
    {
        $this->assign("Title","已评论");
        $this->assign("JsName","order/Comment/index");
        return $this->fetch();
    }
    public function huifude(){
        $huifu=$_POST;
        //dump($huifu);
        exit("success");
    }
}