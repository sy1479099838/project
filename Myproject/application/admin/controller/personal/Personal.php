<?php
namespace app\admin\controller\personal;
use app\admin\controller\common\Common;
use app\admin\controller\goods\Goods;
use app\manage\model\Goods as ModelGoods;
use think\Db;
use app\admin\model\User;
use think\Session;
use app\admin\model\GoodsOrder;
use app\admin\model\Evaluate;
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
//        dump($user);exit;
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/index");
        $this->assign("user",$user);
        return $this->fetch();
    }
    public function member()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/member");
        $user=json_decode(json_encode(Session::get("UserInformation"),true),true);
        if(strlen($user["UserImg"])>60)
        {
            $user["count"]=1;
        }
        else
        {
            $user["count"]=0;
        }
        $this->assign("user",$user);
        return $this->fetch();
    }
    public function level()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/level");
        return $this->fetch();
    }
    public function address()
    {
        $this->assign("Title","收货地址");
        $this->assign("JsName","personal/Personal/address");
        return $this->fetch();
    }
    public function nicheng()
    {
        $this->assign("Title","昵称修改");
        $this->assign("JsName","personal/Personal/nicheng");
        return $this->fetch();
    }

    /*
     * 不是代理则注册信息
     * */

    public function register()
    {
        $this->assign("Title","代理注册");
        $this->assign("JsName","personal/Personal/register");
        return $this->fetch();
    }
    public function orderform()
    {
        $people=Session::get("UserInformation");
        $order=Db::name('goods_order')
            ->alias("a")
            ->where("a.User",$people["id"])
            ->where("a.state=4 OR a.state=5")
            ->join("goods b","a.GoodsId=b.id")
            ->join("goods_package c","a.GoodsId=c.PackageId")
            ->field("a.Id,a.GoodsOrderID,a.num,a.createTime,a.lastUpdateTime,a.ReceiveAddress,a.price,
            b.id,b.GoodsName,b.CovorImg,c.PackageName")
            ->order("lastUpdateTime desc")
            ->select();
//        dump($order);exit;
        $this->assign("order",$order);
        $this->assign("Title","订单详情");
        $this->assign("JsName","personal/Personal/orderform");
        return $this->fetch();
    }
    public function distribution()
    {
        $this->assign("Title","分销中心");
        $this->assign("JsName","personal/Personal/distribution");
        return $this->fetch();
    }
    public function orderCheck()
    {
        $data=input("num");
        $people=Session::get("UserInformation");
        switch ($data)
        {
            case 0 :
                $order=Db::name('goods_order')
                    ->alias("a")
                    ->where("a.User",$people["id"])
                    ->where("a.state=4 OR a.state=5")
                    ->join("goods b","a.GoodsId=b.id")
                    ->join("goods_package c","a.PackageId=c.PackageId")
                    ->field
                    (
                        "a.Id,a.GoodsOrderID,a.num,a.createTime,a.lastUpdateTime,a.ReceiveAddress,a.price,
                        b.id,b.GoodsName,b.CovorImg,c.PackageName"
                    )
                    ->order("lastUpdateTime desc")
                    ->select();
                break;
            case 1:
                $order=Db::name('goods_order')
                    ->alias("a")
                    ->where("a.User",$people["id"])
                    ->where("a.state","0")
                    ->join("goods b","a.GoodsId=b.id")
                    ->join("goods_package c","a.PackageId=c.PackageId")
                    ->field
                    (
                        "a.Id,a.GoodsOrderID,a.num,a.createTime,a.lastUpdateTime,a.ReceiveAddress,a.price,
                        b.id,b.GoodsName,b.CovorImg,c.PackageName"
                    )
                    ->order("lastUpdateTime desc")
                    ->select();
                break;
            case 2:
                $order=Db::name('goods_order')
                    ->alias("a")
                    ->where("a.User",$people["id"])
                    ->where("a.state","2")
                    ->join("goods b","a.GoodsId=b.id")
                    ->join("goods_package c","a.PackageId=c.PackageId")
                    ->field
                    (
                        "a.Id,a.GoodsOrderID,a.num,a.createTime,a.lastUpdateTime,a.ReceiveAddress,a.price,a.ReceiveAddress,
                        b.id,b.GoodsName,b.CovorImg,c.PackageName"
                    )
                    ->order("lastUpdateTime desc")
                    ->select();
                break;
            case 3:
                $order=Db::name('goods_order')
                    ->alias("a")
                    ->where("a.User",$people["id"])
                    ->where("a.state","3")
                    ->join("goods b","a.GoodsId=b.id")
                    ->join("goods_package c","a.PackageId=c.PackageId")
                    ->field
                    (
                        "a.Id,a.GoodsOrderID,a.num,a.createTime,a.lastUpdateTime,a.ReceiveAddress,a.price,a.ReceiveAddress,
                        b.id,b.GoodsName,b.CovorImg,c.PackageName"
                    )
                    ->order("lastUpdateTime desc")
                    ->select();
                break;
        }
        return $this->fetch("orderCheck",["num"=>$data,"orderCheck"=>$order]);
    }

    public function saveHeade($CaiLeft,$CaiTop,$caiWidth,$CaiHeight)
    {
        $file = request()->file('upfile');
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
                $smalImg=$head."/S".$ImgName;
            }
            $imageFile=$ruth.$TmpImg;
            $img = getimagesize($imageFile);
            $width=$img["0"];
            $height=$img["1"];
            $array=array(intval(($width*$caiWidth)-2),intval($height*$CaiHeight),intval($width*$CaiLeft),intval($height*$CaiTop));
            $image = \think\Image::open($imageFile);
            $value=$image->crop(intval(($width*$caiWidth)-2), intval($height*$CaiHeight),intval($width*$CaiLeft),intval($height*$CaiTop))->save($ruth.$smalImg);
            if($value)
            {
                $imgRuth=json_encode(array("bigImg"=>$TmpImg,"head"=>$smalImg),true);
                exit($imgRuth);
            }
            else
            {
                exit("error");
            }
        }
    }
    public function save()
    {
        $people=Session::get("UserInformation");
        $file=input();
        unlink("public/uploads/".$file["bigImg"]);
        $oldHead=User::where("")->field("UserImg")->find()->UserImg;
        if($oldHead=="" || $oldHead==NULL)
        {
            $value=User::where("id",$people["id"])->update([
                "UserImg"=>$file["head"]
            ]);
            if($value)
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
            if(strlen($oldHead)>55)
            {
                $value=User::where("id",$people["id"])->update([
                    "UserImg"=>$file["head"]
                ]);
                if($value)
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
                unlink("public/uploads/".$oldHead);
                $value=User::where("id",$people["id"])->update([
                    "UserImg"=>$file["head"]
                ]);
                if($value)
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
    public function cancalImg()
    {
        $file=input();
        unlink("public/uploads/".$file["bigImg"]);
        unlink("public/uploads/".$file["head"]);
        exit("success");
    }
    public function nichengedit()
    {
        $nicheng=input();
        //dump($nicheng);
        exit("success");

    }
    public function mima()
    {
        $this->assign("Title","密码修改");
        $this->assign("JsName","personal/Personal/mima");
        return $this->fetch();
    }
    public function daipinjia()
    {
        $this->assign("Title","待评价");
        $this->assign("JsName","personal/Personal/daipinjia");

        $people=Session::get("UserInformation");
        $order=Db::name('goods_order')
            ->alias("a")
            ->where("a.User",$people["id"])
            ->where("a.state","4")
            ->join("goods b","a.GoodsId=b.id")
            ->join("goods_package c","a.PackageId=c.PackageId")
            ->field
            (
                "a.Id,a.GoodsOrderID,a.num,a.lastUpdateTime,a.price,
                b.id,b.GoodsName,b.CovorImg,c.PackageName"
            )
            ->order("lastUpdateTime desc")
            ->select();
        $this->assign("order",$order);
        return $this->fetch();
    }
    public function pinjiaz()
    {
        $this->assign("Title","评价");
        $this->assign("JsName","personal/Personal/pinjiaz");

        $data=input();
        $arr=array();
        foreach ($data as $key=>$value){
            $arr[Common::fisker_decode_v2($key)]=Common::fisker_decode_v2($value);
        }
        $goodsId=$arr["goodsId"];
        $Id=$arr["OrderId"];
        $people=Session::get("UserInformation");
        $Order=GoodsOrder::where("Id",$Id)->field("User,state,PackageId,num")->find();
        if($people["id"]==$Order->User && $Order->state=="4")
        {
            $goods=ModelGoods::where("id",$goodsId)->field("id,GoodsName,CovorImg,introduce")->find();
        }
        else
        {
            exit("对不起，出错啦！");
        }
        $this->assign("good",$goods);
        $this->assign("orderId",$Id);
        return $this->fetch();
    }
    public function fabu()
    {
        exit("success");
    }
    public function jianzhi()
    {
        $this->assign("Title","兼职");
        $this->assign("JsName","personal/Personal/jianzhi");
        return $this->fetch();
    }

    /*
     * 提醒发货
     * */
    public function TXFaHuo()
    {
        $num=input("num");
        $LastTime=GoodsOrder::where("id",$num)->field("lastUpdateTime,LastUrgeTime,Urge")->find();
        if((time()-$LastTime->lastUpdateTime)>3600 && (time()-$LastTime->LastUrgeTime)>3600)
        {
            $result=GoodsOrder::where("id",$num)->update([
                "Urge"=>($LastTime->Urge)+1,
                "LastUrgeTime"=>time()
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
            exit("NO");
        }
    }

    /*
     * 删除订单
     * */
    public function DelDing()
    {
        $Id=input("Ding");
        $people=Session::get("UserInformation");
        $Order=GoodsOrder::where("Id",$Id)->field("User,state,PackageId,num")->find();
        if($people["id"]==$Order->User && $Order->state=="0")
        {
            $result=GoodsOrder::where("Id",$Id)->delete();
            $result=="1"? exit("success"): exit("error");
        }
        else
        {
            exit("error");
        }
    }
    /*
     * 确认收货
     * */
    public function SureReceive()
    {
        $Id=input("Ding");
        $people=Session::get("UserInformation");
        $Order=GoodsOrder::where("Id",$Id)->field("User,state,PackageId,num")->find();
        if($people["id"]==$Order->User && $Order->state=="3")
        {
            $result=GoodsOrder::where("Id",$Id)->update([
                "state"=>"4",
                "lastUpdateTime"=>time()
            ]);
            $result=="1"? exit("success"): exit("error");
        }
        else
        {
            exit("error");
        }
    }

    /*
     * 提交评论
     * */
    public function SaveEvaluate()
    {
        $data=input();
        $people=Session::get("UserInformation");
        $formData=json_decode($data["formArray"],true);
        $id=$data["num"];
        $orderId=$data["num2"];
//        dump($orderId);exit;
        $arr=array();
        foreach ($formData as $value)
        {
            $arr[$value["name"]]=$value["value"];
        }
        $lenth=strlen($arr["pingluna"]);
        $res=preg_match("/^[1-5]$/",$arr["xing"]);
        if($lenth<=90 && $res)
        {
            $Order=GoodsOrder::where("Id",$orderId)->field("User,state")->find();
            if($people["id"]==$Order->User && $Order->state=="4")
            {
                $result=Evaluate::create([
                    "GoodsId"=>$id,
                    "UserId"=>$people["id"],
                    "CreateTime"=>time(),
                    "Evaluate_text"=>$arr["pingluna"],
                    "Grade"=>$arr["xing"],
                    "OrderId"=>$orderId
                ]);
                if($result)
                {
                    $state=GoodsOrder::where("Id",$orderId)->update([
                        "state"=>"5"
                    ]);
                    $state==1? exit("success"): exit("error");
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
        else
        {
            exit("error");
        }


    }
}
