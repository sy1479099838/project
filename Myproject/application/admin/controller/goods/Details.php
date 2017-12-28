<?php
namespace app\admin\controller\goods;
use app\admin\controller\common\Common;
use app\manage\model\Goods;
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
//        $Business=

        $this->assign("Title","商品详情");
        $this->assign("JsName","goods/Details/index");
        $this->assign("GoodsInformation",$GoodsInformation);
        $this->assign("NowTime",time());
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
