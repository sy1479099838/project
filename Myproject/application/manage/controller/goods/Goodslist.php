<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
use app\manage\model\Business;
use app\manage\model\Hotclass;
use app\manage\model\Goods;
use think\Session;
use think\Db;
class Goodslist extends Common
{
    public function index()
    {
        $people=Session::get('admin');
        $HotClass=json_decode(json_encode(Hotclass::field("id,HotName")->select(),true),true);
        if($people["type"]!="admin")
        {
            $GoodsList=Db::table('t_goods')
                ->where("BusinessId",$people["id"])
                ->page('1,4')
                ->alias("a")
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::where("BusinessId",$people["id"])->count("id");//总条数
        }
        else
        {
            $GoodsList=Db::table('t_goods')
                ->alias("a")
                ->page('1,4')
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::count("id");//总条数
        }


        $Num=ceil($PageCount/4);//总页数
        $NowPage=1;
        $page=Common::Page($NowPage,$Num);
        $this->assign("NowPage",$NowPage);
        $this->assign("page",$page);
        $this->assign("AllPage",$Num);



        foreach ($GoodsList as $key=>$value)
        {
            $res=json_decode(json_encode(Hotclass::where("id","in",$value["HotClass"])->field("HotName")->select(),true),true);
            $GoodsList[$key]["HotClass"]=$res;
        }
        if($people['type']=="admin")
        {
            $business=json_decode(json_encode(Business::all(function($query){
                $query->where("id","neq","1")->field('id,CompanyName');
            }),true),true);
            $this->assign("BusinessList",$business);
            $peopleType="admin";
        }
        else
        {
            $this->assign("businessName",$people["CompanyName"]);
            $peopleType="business";
        }


        $ClassList=GoodsClassify::where("Enable","1")->select();
        $ClassList=Common::treeData(json_decode(json_encode($ClassList,true),true));
        $this->assign("peopleType",$peopleType);
        $this->assign("ClassList",$ClassList);
        $this->assign("HotClass",$HotClass);
        $this->assign("GoodsList",$GoodsList);
        return $this->fetch();
    }

    public function GoodsImg()
    {
        $file = request()->file("upfile");
        if($file=="" || $file==NULL)
        {
            exit("error");
        }
        else
        {
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            $ruth="public/uploads/";
            if($info)
            {
                $value=$info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $length=strlen($value);
                $head=substr($value, 0, 8);
                $ImgName=substr($value, 9, $length-9);
                $fileRuth=$head."/".$ImgName;
                exit($fileRuth);
            }
        }
    }


    /*
     * 照片批量上传
     * */
    public function UploadImg()
    {
        $file = request()->file("upfile");
        if($file=="" || $file==NULL)
        {
            exit("error");
        }
        else
        {
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            $ruth="public/uploads/";
            if($info)
            {
                $value=$info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $length=strlen($value);
                $head=substr($value, 0, 8);
                $ImgName=substr($value, 9, $length-9);
            }
        }
        if($value)
        {
            if(Session::has('GoodsImgUpload'))
            {
                $Img=Session::get("GoodsImgUpload");
                $Img[]=array($head,$ImgName);
//                dump($Img);
                Session::set('GoodsImgUpload',$Img);
                exit("success");
            }
            else
            {
                $Img=array(
                    0=>array($head,$ImgName)
                );
                Session::set('GoodsImgUpload',$Img);
//                dump($Img);
                exit("success");
            }
        }
        else
        {
            exit("error");
        }

    }

    /*
     * 接收商品信息,添加到数据库
     * */
    public function AddGoods()
    {
        $LoginPeople=Session::get("admin");
        $information=input();
        $Img=Session::get("GoodsImgUpload");
        $Img=json_encode($Img);
//        dump($Img);
        $value=Goods::create([
            'GoodsName'  =>  $information["GoodsName"],
            'cid' =>  $information["Cid"],
            'PositionName' =>  $information["positionName"],
            'X_LONG' =>  $information["X"],
            'Y_LONG' =>  $information["Y"],
            'addPeopleId' =>  $LoginPeople["id"],
            'DetailsImage' =>  $Img,
            'BusinessId' =>  $LoginPeople['type']=="admin"?$information["SjName"]:$LoginPeople["id"],
            'addPeopleType' =>  $LoginPeople['type']=="admin"?"1":"0",
            'addTime' =>  time(),
            'HotClass' =>  $information["HotClass"],
            'startTime'=>strtotime($information["StartDate"]),
            'endTime'=>strtotime($information["EndDate"]),
            'oldPrice'=>$information["Price"],
            'activityPrice'=>$information["ActivePrice"],
            'pid'=>$information["pid"]
        ]);
        Session::delete('GoodsImgUpload');
        if($value)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }

    }

    public function PageSearch()
    {
        $page=input("num");
        $people=Session::get('admin');
        if($people["type"]!="admin")
        {
            $GoodsList=Db::table('t_goods')
                ->where("BusinessId",$people["id"])
                ->page($page.',4')
                ->alias("a")
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::where("BusinessId",$people["id"])->count("id");//总条数
        }
        else
        {
            $GoodsList=Db::table('t_goods')
                ->alias("a")
                ->page($page.',4')
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("
                a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::count("id");//总条数
        }
        $Num=ceil($PageCount/4);//总页数
//        dump($PageCount);
        $NowPage=$page;
        $page=Common::Page($NowPage,$Num);
        foreach ($GoodsList as $key=>$value)
        {
            $res=json_decode(json_encode(Hotclass::where("id","in",$value["HotClass"])->field("HotName")->select(),true),true);
            $GoodsList[$key]["HotClass"]=$res;
        }
        return $this->fetch("PageSearch",
            [
                "GoodsList"=>$GoodsList,
                "NowPage"=>$NowPage,
                "page"=>$page,
                "AllPage"=>$Num
            ]
        );

    }

}
