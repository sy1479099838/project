<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Finish extends Common
{
    public function index()
    {
        $this->assign("Title","已完成");
        $this->assign("JsName","order/Finish/index");
        return $this->fetch();
    }
}