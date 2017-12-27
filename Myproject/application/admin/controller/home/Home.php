<?php
namespace app\admin\controller\home;
use think\Session;
use app\admin\controller\common\Common;
use app\manage\model\Goods;
use app\manage\model\Hotclass;
use think\Db;
class Home extends Common
{
    public function index()
    {
        $GoodsList=json_decode(json_encode(Hotclass::where("enable","1")->order(['order','id'=>'desc'])->select(),true),true);
        foreach ($GoodsList as $key=>$val)
        {
            $goodsId=json_decode($val["GoodsOrder"],true);
            asort($goodsId);
            $goodsId=implode(",",array_keys($goodsId));
            $GoodsList[$key]["goods"]=json_decode(json_encode(Goods::where("id","in",$goodsId)
                ->order("field(id,$goodsId)")
                ->field("id,GoodsName,Template_1,Template_2,Template_3,Template_4,startTime,endTime,oldPrice,activityPrice")
                ->select(),true),true);
        }
        $this->assign("Title","首页");
        $this->assign("JsName","home/Home/index");
        $UserInformation=Session::get("UserInformation");
        $this->assign("UserInformation",$UserInformation);
        $this->assign("GoodsList",$GoodsList);
        $this->assign("NowTime",time());
        return $this->fetch();
    }
}
