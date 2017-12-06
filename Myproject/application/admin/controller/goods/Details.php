<?php
namespace app\admin\controller\goods;
use app\admin\controller\common\Common;
class Details extends Common
{
    public function index()
    {
        $this->assign("Title","商品详情");
        $this->assign("JsName","goods/Details/index");
        return $this->fetch();
    }
    public function GoodsDetails()
    {
        return $this->fetch();
    }
    public function evaluate ()
    {
        return $this->fetch();
    }
    public function parameter ()
    {
        return $this->fetch();
    }
}
