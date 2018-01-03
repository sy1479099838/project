<?php
namespace app\admin\controller\goods;
use app\admin\controller\common\Common;
use app\manage\model\Goods;
use app\manage\model\Parameter;
use think\Db;
class Details extends Common
{
    public function index()
    {
        $goodsId=input("Goods");
        $GoodsInformation=json_decode(json_encode(Goods::with("comments")
            ->where("id",$goodsId)
            ->alias("a")
            ->field("a.id,a.GoodsName,a.PositionName,a.X_LONG,a.Y_LONG,a.DetailsImage,a.startTime,a.endTime,a.groups,a.oldPrice,a.activityPrice")
            ->find(),true),true);
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
}
