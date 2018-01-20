<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Yifahuo extends Common
{
    public function index()
    {
        $this->assign("Title","已发货");
        $this->assign("JsName","order/Yifahuo/index");
        return $this->fetch();
    }
}