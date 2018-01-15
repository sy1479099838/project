<?php
namespace app\admin\controller\personal;
use app\admin\controller\common\Common;
use app\admin\model\User;
use app\admin\model\GoodsOrder;
use think\Db;
use think\Session;
class Personal extends Common
{
    public function index()
    {
        $user=json_decode(json_encode(Session::get("UserInformation"),true),true);
        if(strlen($user["UserImg"])>60)
        {
            $user["count"]=1;
        }
        else
        {
            $user["count"]=0;
        }
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/index");
        $this->assign("user",$user);
        return $this->fetch();
    }
    public function member()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/member");
        return $this->fetch();
    }
    public function level()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/level");
        return $this->fetch();
    }
    public function orderform()
    {
        $people=Session::get("UserInformation");
        $order=Db::name('goods_order')
            ->alias("a")
            ->where("a.User",$people["id"])
            ->where("a.state","5")
            ->join("goods b","a.GoodsId=b.id")
            ->join("goods_package c","a.GoodsId=c.PackageId")
            ->field("a.Id,a.GoodsOrderID,a.num,a.createTime,a.lastUpdateTime,a.ReceiveAddress,a.price,
            b.id,b.GoodsName,b.Template_4,c.PackageName")
            ->order("lastUpdateTime desc")
            ->select();
//        dump($order);exit;
        $this->assign("order",$order);
        $this->assign("Title","订单详情");
        $this->assign("JsName","personal/Personal/orderform");
        return $this->fetch();
    }
    public function quan()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/quan");
        return $this->fetch();
    }
}
