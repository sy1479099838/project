<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Shopcar extends Common
{
    public function index()
    {
        $this->assign("Title","购物车");
        $this->assign("JsName","order/Shopcar/index");
        return $this->fetch();
    }
}
