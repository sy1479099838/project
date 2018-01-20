<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Unpaid extends Common
{
    public function index()
    {
        $this->assign("Title","未支付订单");
        $this->assign("JsName","order/Unpaid/index");
        return $this->fetch();
    }
}
