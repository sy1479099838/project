<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
use app\manage\model\Business;
use app\manage\model\Hotclass;
use app\manage\model\Goods;
use app\manage\model\Parameter;
use think\Session;
use think\Db;
use app\manage\model\GoodsPackage;
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
                ->page('1,8')
                ->alias("a")//给表添加别名
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")//此处为查询多个表中的某些字段
                ->select();
            $PageCount=Goods::where("BusinessId",$people["id"])->count("id");//总条数   模型查询
        }
        else
        {
            $GoodsList=Db::table('t_goods')
                ->alias("a")
                ->page('1,8')
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::count("id");//总条数
        }


        $Num=ceil($PageCount/8);//总页数
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
        return $this->fetch();//模板渲染   tp3为display();
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
        $cid=input("cid");
        $people=Session::get('admin');
        if($cid=="" || $cid==NULL)
        {
            if($people["type"]!="admin")
            {
                $GoodsList=Db::table('t_goods')
                    ->where("BusinessId",$people["id"])
                    ->page($page.',8')
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
                    ->page($page.',8')
                    ->join('t_goods_classify b','a.pid = b.id')
                    ->join('t_business c','a.BusinessId=c.id')
                    ->field("
                a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                    ->select();
                $PageCount=Goods::count("id");//总条数
            }
            $number=8;
        }
        else
        {
            $map[]=['exp',"FIND_IN_SET($cid,a.cid)"];
            $map1[]=['exp',"FIND_IN_SET($cid,cid)"];
            if($people["type"]!="admin")
            {
                $GoodsList=Db::table('t_goods')
                    ->where("BusinessId",$people["id"])
                    ->page('1,5')
                    ->where($map)
                    ->alias("a")
                    ->join('t_goods_classify b','a.pid = b.id')
                    ->join('t_business c','a.BusinessId=c.id')
                    ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                    ->select();
                $PageCount=Goods::where("BusinessId",$people["id"])->where($map1)->count("id");//总条数
            }
            else
            {
                $GoodsList=Db::table('t_goods')
                    ->alias("a")
                    ->where($map)
                    ->page('1,5')
                    ->join('t_goods_classify b','a.pid = b.id')
                    ->join('t_business c','a.BusinessId=c.id')
                    ->field("
                a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                    ->select();
                $PageCount=Goods::where($map1)->count("id");//总条数

            }
            $number=5;
        }

        $Num=ceil($PageCount/$number);//总页数
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
                "AllPage"=>$Num,
                "cid"=>$cid
            ]
        );

    }

    /*
     * 模板查看
     * */

    public function Muban()
    {
        $goodid=input('Id');
        $people=Session::get('admin');
        if($people["type"]=="admin")
        {
            $goodImg=Goods::where("id",$goodid)->field("Template_1,Template_2,Template_3,Template_4")->find();
        }
        else
        {
            $BusinessId=Goods::where("id",$goodid)->field("BusinessId")->find()->BusinessId;
            if($BusinessId==$people["id"])
            {
                $goodImg=Goods::where("id",$goodid)->field("Template_1,Template_2,Template_3,Template_4")->find();
            }
            else
            {
                exit("对不起，您没有权限!");
            }
        }
        return $this->fetch("Muban",["goodImg"=>$goodImg,"goodId"=>$goodid]);//此处也为模板查询   用于弹窗渲染
    }
    /*
     * 模板照片修改
     * */
    public function MubanEdit()
    {
        $value=input();
        $MubanId=$value["tmp"];
        $goodId=$value["GoodId"];
        switch ($MubanId)
        {
            case 1:
                $Img=Goods::where("id",$goodId)->field("Template_1")->find()->Template_1;
                break;
            case 2:
                $Img=Goods::where("id",$goodId)->field("Template_2")->find()->Template_2;
                break;
            case 3:
                $Img=Goods::where("id",$goodId)->field("Template_3")->find()->Template_3;
                break;
            case 4:
                $Img=Goods::where("id",$goodId)->field("Template_4")->find()->Template_4;
                break;
            default:
                exit("error");
        }
        return $this->fetch("MubanEdit",["Img"=>$Img,"goodId"=>$goodId,"tmp"=>$MubanId]);
    }


    public function SaveImg($good,$tmp)
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
                $TmpImg=$head."/".$ImgName;
            }
        }
        if($TmpImg && strlen($TmpImg)>15)
        {

            switch ($tmp)
            {
                case 1:
                    $OldImg=Goods::where("id",$good)->field("Template_1")->find()->Template_1;
                    $Img=Goods::where("id",$good)->update([
                        "Template_1"=>$TmpImg
                    ]);
                    if($Img==1 && $OldImg!="")
                    {
                        unlink("public/uploads/".$OldImg);
                    }
                    break;
                case 2:
                    $OldImg=Goods::where("id",$good)->field("Template_2")->find()->Template_2;
                    $Img=Goods::where("id",$good)->update([
                        "Template_2"=>$TmpImg
                    ]);
                    if($Img==1 && $OldImg!="")
                    {
                        unlink("public/uploads/".$OldImg);
                    }
                    break;
                case 3:
                    $OldImg=Goods::where("id",$good)->field("Template_3")->find()->Template_3;
                    $Img=Goods::where("id",$good)->update([
                        "Template_3"=>$TmpImg
                    ]);
                    if($Img==1 && $OldImg!="")
                    {
                        unlink("public/uploads/".$OldImg);
                    }
                    break;
                case 4:
                    $OldImg=Goods::where("id",$good)->field("Template_4")->find()->Template_4;
                    $Img=Goods::where("id",$good)->update([
                        "Template_4"=>$TmpImg
                    ]);
                    if($Img==1 && $OldImg!="")
                    {
                        unlink("public/uploads/".$OldImg);
                    }
                    break;
            }
            exit("success");
        }

    }
    /*
     * 商品详情预览
     * */
    public function GoodsDetails()
    {
        $id=input("id");
        $val=Parameter::where("GoodsId",$id)->field("id,GoodsDetails")->find();
        if($val=="" || $val==NULL || $val->GoodsDetails=="" || $val->GoodsDetails==NULL)
        {
            $value="请在这儿输入商品详情！";
        }
        else
        {
            $value=$val->GoodsDetails;
        }

        exit($value);
    }
    public function Xiangqing()
    {
        $value=input();
        $val=Parameter::where("GoodsId",$value["goodsId"])->field("id,GoodsDetails")->find();
        if($val=="" || $val==NULL)
        {
            $result=Parameter::create([
                'GoodsId'=>$value["goodsId"],
                'GoodsDetails'  =>  $value["data"]
            ]);
            if($result)
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
            $result=Parameter::where("GoodsId",$value["goodsId"])->update([
                'GoodsDetails'  =>  $value["data"]
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

    /*
     * 参数查询
     * */
    public function GoodsCS()
    {
        $id=input("id");
        $val=Parameter::where("GoodsId",$id)->field("id,GoodsParameter")->find();
        if($val=="" || $val==NULL || $val->GoodsParameter=="" || $val->GoodsParameter==NULL)
        {
            $value="请在这儿输入商品参数...";
        }
        else
        {
            $value=$val->GoodsParameter;
        }

        exit($value);
    }
    /*
     *商品分类搜索
     * */
    public function GoodsClassChoice()
    {
        $cid=input("num");
        $people=Session::get('admin');
        $map[]=['exp',"FIND_IN_SET($cid,a.cid)"];
        $map1[]=['exp',"FIND_IN_SET($cid,cid)"];
        if($people["type"]!="admin")
        {
            $GoodsList=Db::table('t_goods')
                ->where("BusinessId",$people["id"])
                ->page('1,5')
                ->where($map)
                ->alias("a")
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::where("BusinessId",$people["id"])->where($map1)->count("id");//总条数
        }
        else
        {
            $GoodsList=Db::table('t_goods')
                ->alias("a")
                ->where($map)
                ->page('1,5')
                ->join('t_goods_classify b','a.pid = b.id')
                ->join('t_business c','a.BusinessId=c.id')
                ->field("
                a.id,a.GoodsName,a.addTime,a.HotClass,a.startTime,a.endTime,a.enable,a.groups,a.oldPrice,a.activityPrice,
                b.ClassName,c.LiablePeople,
                c.CompanyName")
                ->select();
            $PageCount=Goods::where($map1)->count("id");//总条数

        }
        $Num=ceil($PageCount/5);//总页数
//        dump($PageCount);
        $NowPage=1;
        $page=Common::Page($NowPage,$Num);
        foreach ($GoodsList as $key=>$value)
        {
            $res=json_decode(json_encode(Hotclass::where("id","in",$value["HotClass"])->field("HotName")->select(),true),true);
            $GoodsList[$key]["HotClass"]=$res;
        }
//        dump($GoodsList);exit;
        return $this->fetch("GoodsClassChoice",
            [
                "GoodsList"=>$GoodsList,
                "NowPage"=>$NowPage,
                "page"=>$page,
                "AllPage"=>$Num,
                "cid"=>$cid
            ]
        );
    }
    
    /*
     * 是否拼团
     * */
    public function SwitchClass()
    {
        $num=input();
        $people=Session::get('admin');
        if($people["type"]=="admin")
        {
            $value=Goods::where("id",$num["id"])->update([
                "groups"=>$num["Style"]
            ]);
            if($value==0)
            {
                exit("error");
            }
            else
            {
                exit("success");
            }
        }
        else
        {
            $Businessid=Goods::where("id",$num["id"])->field("BusinessId")->find()->BusinessId;
            if($Businessid==$people["id"])
            {
                $value=Goods::where("id",$num["id"])->update([
                   "groups"=>$num["Style"]
                ]);
                if($value==0)
                {
                    exit("error");
                }
                else
                {
                    exit("success");
                }
            }
            else
            {
                exit("对不起，不可以随便改！");
            }
        }

    }

    /*
     * 套餐查询
     * */
    public function package()
    {
        $id=input("GoodsId");
        $people=Session::get('admin');
        if($people["type"]=="admin") {
            $package = GoodsPackage::where("GoodsID", $id)->select();
            $count=count($package)+1;
//            dump($count);
            if ($package) {
                return $this->fetch("package", ["package" => $package,'count'=>$count,"id"=>$id]);
            } else {
                return $this->fetch("package", ["package" => "",'count'=>$count,"id"=>$id]);
            }
        }
        else{
            $Businessid=Goods::where("id",$id)->field("BusinessId")->find()->BusinessId;
            if($Businessid==$people["id"])
            {
                $package = GoodsPackage::where("GoodsID", $id)->select();
                $count=count($package)+1;
                if ($package) {
                    return $this->fetch("package", ["package" => $package,'count'=>$count,"id"=>$id]);
                } else {
                    return $this->fetch("package", ["package" => "",'count'=>$count,"id"=>$id]);
                }
            }
            else
            {
                exit("error");
            }
        }

    }

    /*
     * 商品参数保存
     * */
    public function GoodsCsSubmit()
    {
        $value=input();
//        dump($value);exit;
        $val=Parameter::where("GoodsId",$value["goodsId"])->field("id,GoodsParameter")->find();
        if($val=="" || $val==NULL)
        {
            $result=Parameter::create([
                'GoodsId'=>$value["goodsId"],
                'GoodsParameter'  =>  $value["data"]
            ]);
            if($result)
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
            $result=Parameter::where("GoodsId",$value["goodsId"])->update([
                'GoodsParameter'  =>  $value["data"]
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
    /*
     * 保存套餐
     * */
    public function savePackage($id)
    {
        $value=input();
        if($value["Min"]=="" || $value["Min"]==NULL)
        {
            exit("请输入套餐名！");
        }
        if($value["Price"]=="" || $value["Price"]==NULL)
        {
            exit("请输入价格！");
        }
        if($value["AcPrice"]=="" || $value["AcPrice"]==NULL)
        {
            exit("请输入价格！");
        }
        if($value["PackageID"]=="" || $value["PackageID"]==NULL || $value["PackageID"]=="0" )
        {
            $result=GoodsPackage::create([
                "GoodsID"=>$id,
                "PackageName"=>$value["Min"],
                "careful"=>$value["Tix"],
                "OldPrice"=>$value["Price"],
                "ActivityPrice"=>$value["AcPrice"]
            ]);
            if($result)
            {
                exit($result->PackageId);
            }
            else
            {
                exit("error");
            }
        }
        else
        {
            $is=GoodsPackage::where("PackageId",$value["PackageID"])->field("GoodsID")->find()->GoodsID;
            if($is==$id)
            {
                $result=GoodsPackage::where("PackageId",$value["PackageID"])->update([
                    "GoodsID"=>$id,
                    "PackageName"=>$value["Min"],
                    "careful"=>$value["Tix"],
                    "OldPrice"=>$value["Price"],
                    "ActivityPrice"=>$value["AcPrice"]
                ]);
                if($result=="1")
                {
                    exit("success");
                }
                else
                {
                    exit("none");
                }
            }
        }
    }

    /*
     * 删除套餐
     * */
    public function DelPackage()
    {
        $var=input();
        $goodsid=GoodsPackage::where("PackageId",$var["packageId"])->field("GoodsID")->find()->GoodsID;
        if($goodsid==$var["goodsId"])
        {
            $result=GoodsPackage::where('PackageId',$var["packageId"])->delete();
            if($result=="1")
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
            exit("error");
        }
    }
}
