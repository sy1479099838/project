<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Nofahuo extends Common
{
    public function index()
    {
        $this->assign("Title","未发货");
        $this->assign("JsName","order/Nofahuo/index");
        return $this->fetch();
    }
}
