<?php
namespace app\admin\controller\goods;
use app\admin\controller\common\Common;
use app\manage\model\Goods;
use app\manage\model\Parameter;
use app\manage\model\Business;
use think\Db;
use app\manage\model\GoodsPackage;
class Details extends Common
{
    public function index()
    {
        $goodsId=input("Goods");
        $GoodsInformation=json_decode(json_encode(Goods::with("comments")
            ->where("id",$goodsId)
            ->alias("a")
            ->field("a.id,a.GoodsName,a.PositionName,a.X_LONG,a.Y_LONG,a.DetailsImage,a.startTime,a.endTime,a.groups,a.oldPrice,a.activityPrice,a.introduce,a.BusinessId")
            ->find(),true),true);
//        dump($GoodsInformation);exit;
        $BusinessId=$GoodsInformation["BusinessId"];
        $ShangJia=Business::where("id",$BusinessId)->field("CompanyName,PhoneNum")->find();
        $ShangJia->PhoneNum = explode(",",$ShangJia->PhoneNum);
        $this->assign("ShangJia",$ShangJia);
        $this->assign("Title","商品详情");
        $this->assign("JsName","goods/Details/index");
        $this->assign("GoodsInformation",$GoodsInformation);
        $this->assign("NowTime",time());
        return $this->fetch();
    }
    public function evaluate ()
    {
        $GoodId=input("num");
        return $this->fetch("evaluate",["xiangqing"=>"","canshu"=>""]);
    }
    public function parameter ()
    {
        $GoodId=input("num");
        $text=Parameter::where("GoodsId",$GoodId)->field("GoodsDetails,GoodsParameter")->find();
        if($text=="" || $text==NULL)
        {
            exit("error");
        }
        else
        {
            return $this->fetch("parameter",["text"=>$text]);
        }

    }
    public function getPackage()
    {
        $id=input("id");
        $value=GoodsPackage::where("PackageId",$id)->field("GoodsID,PackageName,ActivityPrice,OldPrice")->find();
        if(!$value)
        {
            exit("error");
        }
        $value=json_decode(json_encode($value,true),true);
        $time=json_decode(json_encode(Goods::where("id",$value["GoodsID"])->field("startTime,endTime")->find(),true),true);
        $nowTime=time();
        if($nowTime>$time["startTime"] && $nowTime<$time["endTime"])
        {
            $value["price"]=$value["ActivityPrice"];
        }
        else
        {
            $value["price"]=$value["OldPrice"];
        }
        $value=json_encode($value,true);
        exit($value);
    }

    public function AddShopCar()
    {
        $a=input();
        foreach ($a as $key=>$v)
        {
            $a[$key]=Common::fisker_decode_v2($v);
        }
        dump($a);
    }





}
