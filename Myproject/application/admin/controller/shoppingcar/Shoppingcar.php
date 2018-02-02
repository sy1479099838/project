<?php
namespace app\admin\controller\shoppingcar;
use app\admin\controller\common\Common;
use app\manage\controller\weixin\Pay;
use app\admin\model\GoodsOrder;
use think\Session;
use think\Db;
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
        $information=input();
        $value=array();
        foreach ($information as $k=>$v)
        {
            $value[]=$v;
        }
        $taocan=Common::fisker_decode_v2($value[0]);
        $num=Common::fisker_decode_v2($value[1]);
        if($taocan=="shoppingCar")
        {
            echo "123";
        }
        else
        {
            $goods=json_decode(json_encode(Db::table('t_goods_package')
                ->alias('a')
                ->where("a.PackageId",$taocan)
                ->join('t_goods b','a.GoodsID = b.id')
                ->field("a.PackageName,a.ActivityPrice,a.OldPrice,b.startTime,b.endTime,b.GoodsName,b.id")
                ->find(),true),true);
            $nowTime=time();
            if($nowTime>$goods["startTime"] && $nowTime<$goods["endTime"])
            {
                $goods["price"]=$goods["ActivityPrice"];
                $goods["AllPrice"]=$num*$goods["ActivityPrice"];
            }
            else
            {
                $goods["price"]=$goods["OldPrice"];
                $goods["AllPrice"]=$num*$goods["OldPrice"];
            }
            $this->assign("goods",$goods);
        }
//        dump($goods);exit;
        $this->assign("taocan",$taocan);
        $this->assign("num",$num);
        $this->assign("Title","确认订单");
        $this->assign("JsName","shoppingcar/Shoppingcar/dingdanqu");
        return $this->fetch();
    }
    public function calculate()
    {
        $information=input();
        $taocan=$information["taocan"];
        $num=$information["num"];
        if($taocan=="shoppingCar")
        {
            exit("123") ;
        }
        else
        {
            $goods=json_decode(json_encode(Db::table('t_goods_package')
                ->alias('a')
                ->where("a.PackageId",$taocan)
                ->join('t_goods b','a.GoodsID = b.id')
                ->field("a.PackageName,a.ActivityPrice,a.OldPrice,b.startTime,b.endTime,b.GoodsName,b.id")
                ->find(),true),true);
            $nowTime=time();
            if($nowTime>$goods["startTime"] && $nowTime<$goods["endTime"])
            {
                $goods["price"]=$goods["ActivityPrice"];
                $goods["AllPrice"]=$num*$goods["ActivityPrice"];
            }
            else
            {
                $goods["price"]=$goods["OldPrice"];
                $goods["AllPrice"]=$num*$goods["OldPrice"];
            }
        }
        $people=Session::get("UserInformation");
        $openId=$people["UserAccount"];
        $shangHuId="1483747952";
        $outTradeNo=$shangHuId.date("YmdHis");//创建订单表的时候注意要有这样一个生成唯一订单号的字段，并且不能太短，不然会报错的
        $goodsName=$goods["GoodsName"];
        $totalPrice=$goods["AllPrice"];
        $order=GoodsOrder::create([
            "GoodsOrderID"=>$outTradeNo,
            "GoodsId"=>$goods["id"],
            "PackageId"=>$taocan,
            "num"=>$num,
            "createTime"=>time(),
            "User"=>$people["id"],
            "lastUpdateTime"=>time(),
            "state"=>0,
            "ReceiveAddress"=>"富乐大厦",
            "price"=>$goods["AllPrice"]
        ]);
        if($order)
        {
            $value=Pay::pay($openId,$outTradeNo,$goodsName,$totalPrice);
//            $value=json_decode($value,true);
            exit($value);
        }
        else
        {
            exit("error");
        }
    }
}
