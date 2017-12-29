<?php
namespace app\admin\controller\goods;
use app\admin\controller\common\Common;
class Goods extends Common
{
    public function index()
    {
        $this->assign("Title","商品");
        $this->assign("JsName","goods/Goods/index");
        return $this->fetch();
    }
//    public function details()
//    {
//        $this->assign("Title","商品详情");
//        $this->assign("JsName","Goods/details");
//        return $this->fetch();
//    }
//    public function parameter()
//    {
//        $this->assign("Title","商品详情");
//        $this->assign("JsName","Goods/details");
//        return $this->fetch();
//    }
//    public function evaluate()
//    {
//        $this->assign("Title","商品详情");
//        $this->assign("JsName","Goods/details");
//        return $this->fetch();
//    }
}
