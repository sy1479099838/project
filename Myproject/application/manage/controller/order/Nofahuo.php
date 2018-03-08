<?php
namespace app\manage\controller\order;
use app\admin\model\GoodsOrder;
use app\manage\controller\Common;
use think\Db;
use think\Session;
class Nofahuo extends Common
{
    public function index()
    {
        $order=Db::name('goods_order')->where('state',2)
            ->alias('a')
            ->join('goods b','a.GoodsId = b.id')
            ->join('goods_package c','a.PackageId = c.PackageId')
            ->join("user d","a.User = d.id")
            ->field("
                a.Id,a.GoodsOrderID,a.num,a.lastUpdateTime,a.ReceiveAddress,a.price,a.ReceivePeople,a.ReceivePhoneNum,a.Urge,
                b.GoodsName,c.PackageName,d.UserName
            ")
            ->select();
//        dump($order);exit;
        $this->assign("order",$order);
        return $this->fetch();
    }
    public function fahuo(){
        $tijiao=input();
        $state=$tijiao["state"];
        $Id=$tijiao["Id"];
        $people=Session::get('admin');
        if($state=="1")
        {
            exit("sorry");
        }
        else
        {
            if($people["type"]=="admin")
            {
                $result=GoodsOrder::where("Id",$Id)->update([
                    "state"=>"3",
                    "lastUpdateTime"=>time()
                ]);
                if($result==1)
                {
                    exit("success");
                }
                else
                {
                    exit("error");
                }
            }
            else
            {
                $value=Db::name("goods_order")
                    ->alias('a')
                    ->where("a.Id",$Id)
                    ->join('goods b','a.GoodsId = b.id')
                    ->field("b.BusinessId")
                    ->find();
                $BusinessId=$value["BusinessId"];
                if($BusinessId!=$people["id"])
                {
                    exit("Cant");
                }
                else
                {
                    $result=GoodsOrder::where("Id",$Id)->update([
                        "state"=>"3",
                        "lastUpdateTime"=>time()
                    ]);
                    if($result==1)
                    {
                        exit("success");
                    }
                    else
                    {
                        exit("error");
                    }
                }
            }

        }
    }
}
