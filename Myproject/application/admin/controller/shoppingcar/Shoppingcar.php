<?php
namespace app\admin\controller\shoppingcar;
use app\admin\controller\common\Common;
class Shoppingcar extends Common
{
    public function index()
    {
        $this->assign("Title","购物车");
        $this->assign("JsName","shoppingcar/Shoppingcar/index");
        return $this->fetch();
    }
    public function dingdanqu()
    {
        $this->assign("Title","购物车");
        $this->assign("JsName","shoppingcar/Shoppingcar/dingdanqu");
        return $this->fetch();
    }
}
