<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
use app\admin\model\GoodsOrder;
use think\Db;
class Unpaid extends Common
{
    public function index()
    {
        $order=Db::name('goods_order')->where('state',0)
            ->alias('a')
            ->join('goods b','a.GoodsId = b.id')
            ->join('goods_package c','a.PackageId = c.PackageId')
            ->join("user d","a.User = d.id")
            ->field("
                a.GoodsOrderID,a.num,a.lastUpdateTime,a.ReceiveAddress,a.price,a.ReceivePeople,a.ReceivePhoneNum,
                b.GoodsName,c.PackageName,d.UserName
            ")
            ->select();
        $this->assign("order",$order);
        return $this->fetch();
    }
}
