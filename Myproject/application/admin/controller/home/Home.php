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
//根据距离查询距离并排序
//        $qwe="ROUND(
//        6378.138 * 2 * ASIN(
//            SQRT(
//                POW(
//                    SIN(
//                        (
//                            31.472743 * PI() / 180 - Y_LONG * PI() / 180
//                        ) / 2
//                    ),
//                    2
//                ) + COS(31.472743 * PI() / 180) * COS(Y_LONG * PI() / 180) * POW(
//                    SIN(
//                        (
//                            104.750124 * PI() / 180 -   X_LONG * PI() / 180
//                        ) / 2
//                    ),
//                    2
//                )
//            )
//        ) * 1000
//    )";
//        $juli=Goods::where("id","neq","0")
//            ->field("X_LONG,Y_LONG,id,GoodsName,Template_1,Template_2,Template_3,Template_4,startTime,endTime,".$qwe."as juli")
//            ->order($qwe,"DESC")
//            ->select();
//        dump(json_decode(json_encode($juli,true),true));exit;
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
    public function checkmore(){
        $this->assign("Title","查询");
        $this->assign("JsName","home/Home/checkmore");
        return $this->fetch();
    }
    public function checkmore2(){
        $this->assign("Title","查询");
        $this->assign("JsName","home/Home/checkmore2");
        return $this->fetch();
    }

    public function checkmore3(){
        $this->assign("Title","查询");
        $this->assign("JsName","home/Home/checkmore3");
        return $this->fetch();
    }
    public function checkmore4(){
        $this->assign("Title","查询");
        $this->assign("JsName","home/Home/checkmore4");
        return $this->fetch();
    }
}
