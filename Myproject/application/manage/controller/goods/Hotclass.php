<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
use app\manage\model\Hotclass as ModelHotclass;
use app\manage\model\Goods;
use think\Session;
class Hotclass extends Common
{
    public function index()
    {
        $List=ModelHotclass::all(function($query){
            $query->order('order', 'asc');
        });
        $List=json_decode(json_encode($List,true),true);
        $this->assign("List",$List);
        return $this->fetch();
    }
    public function UplodeImg()
    {
        $file = request()->file("upfile");
        if($file=="" || $file==NULL)
        {
            exit("error");
        }
        else {
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            $ruth = "public/uploads/";
            if ($info) {
                $value = $info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $length = strlen($value);
                $head = substr($value, 0, 8);
                $ImgName = substr($value, 9, $length - 9);
                $EFileName=$head."/".$ImgName;
                if(strlen($EFileName)<10)
                {
                    exit("error");
                }
                else
                {
                    exit($EFileName);
                }
            }
        }
    }
    public function AddHotClass()
    {
        $information=input();
        $value=ModelHotclass::create([
            'HotName'  =>  $information["Name"],
            'MubanNum' =>  $information["Muban"],
            'enable' =>  $information["Kaiguan"],
            'icon' =>  $information["img"],
            'order' =>  $information["Xu"]
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
    public function SwitchClass()
    {
        $num=input();
        if($num["switch"]==1)
        {
            $value=ModelHotclass::where('id', $num["id"])->update(['enable' => 0]);
            if($value==1)
            {
                exit("success");
            }
            else
            {
                exit("error");
            }
        }
        elseif($num["switch"]==0)
        {
            $value=ModelHotclass::where('id', $num["id"])->update(['enable' => 1]);
            if($value==1)
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
     * 编辑前查询
     * 模板渲染
     * */
    public function EditHotClass()
    {
        $id=input("num");
        $value=ModelHotclass::where("id",$id)->find();
        if($value)
        {
            return $this->fetch("EditHotClass",["message"=>$value]);
        }
        else
        {
            exit("error");
        }
    }

    /*
     * 查询热门分类的产品
     * */

    public function selectGoods()
    {
        $Id=input("num");
        $people=Session::get('admin');
        $map[]=['exp',"FIND_IN_SET($Id,HotClass)"];
        $value=json_decode(ModelHotclass::where("id",$Id)->field("GoodsOrder")->find()->GoodsOrder,true);
        if($people["type"]!="admin")
        {
            $GoodsList=Goods::where($map)
                ->where("enable","1")
                ->page('1,10')
                ->where("BusinessId",$people["id"])
                ->field("id,GoodsName,HotOrder")
                ->select();
            $PageCount=Goods::where($map)
                ->where("enable","1")
                ->where("BusinessId",$people["id"])
                ->count("id");
        }
        else
        {
            $GoodsList=Goods::where($map)
                ->where("enable","1")
                ->page('1,10')
                ->field("id,GoodsName,HotOrder")
                ->select();
            $PageCount=Goods::where($map)->where("enable","1")->count("id");
        }
        $GoodsList=json_decode(json_encode($GoodsList,true),true);


        if($value!="" || $value!=NULL)
        {
            foreach ($GoodsList as $k=>$v)
            {
                if(isset($value[$v["id"]]))
                {
                    $GoodsList[$k]["HotOrder"]=$value[$v["id"]];
                }
            }
        }
        $page=1;
        $Num=ceil($PageCount/10);//总页数
        $NowPage=$page;
        $page=Common::Page($NowPage,$Num);
        return $this->fetch("selectGoods",
            [
                "List"=>$GoodsList,
                "NowPage"=>$NowPage,
                "page"=>$page,
                "AllPage"=>$Num,
                "type"=>$people["type"],
                "Id"=>$Id
            ]
        );
    }

    /*
     * 分页
     * */

    public function PageSearch()
    {
        $num=input();
        $page=$num["num"];
        $Id=$num["HotBoxNum"];
        $people=Session::get('admin');
        $map[]=['exp',"FIND_IN_SET($Id,HotClass)"];
        $value=json_decode(ModelHotclass::where("id",$Id)->field("GoodsOrder")->find()->GoodsOrder,true);
        if($people["type"]!="admin")
        {
            $GoodsList=Goods::where($map)
                ->page($page.',10')
                ->where("BusinessId",$people["id"])
                ->field("id,GoodsName,HotOrder")
                ->select();
            $PageCount=Goods::where($map)
                ->where("BusinessId",$people["id"])
                ->count("id");
        }
        else
        {
            $GoodsList=Goods::where($map)
                ->page($page.',10')
                ->field("id,GoodsName,HotOrder")
                ->select();
            $PageCount=Goods::where($map)->count("id");
        }
        $GoodsList=json_decode(json_encode($GoodsList,true),true);
        if($value!="" || $value!=NULL)
        {
            foreach ($GoodsList as $k=>$v)
            {
                if(isset($value[$v["id"]]))
                {
                    $GoodsList[$k]["HotOrder"]=$value[$v["id"]];
                }
            }
        }
//        dump($GoodsList);exit;
        $Num=ceil($PageCount/10);//总页数
        $NowPage=$page;
        $page=Common::Page($NowPage,$Num);
        return $this->fetch("PageSearch",
            [
                "List"=>$GoodsList,
                "NowPage"=>$NowPage,
                "page"=>$page,
                "AllPage"=>$Num,
                "type"=>$people["type"],
                "Id"=>$Id
            ]
        );
    }
    /*
     * 热门分类商品排序
     * */
    public function GoodsOrder()
    {
        $order=input();
        $TwoId=explode("|+|",$order["GID"]);
        $HotId=$TwoId["0"];
        $GoodId=$TwoId[1];
        $order=$order["order"];
        $value=ModelHotclass::where("id",$HotId)->field("GoodsOrder")->find()->GoodsOrder;
        if($value=="" || $value==NULL)
        {
            if($order=="")
            {
                exit("success");
            }
            $arr=array(
                $GoodId=>$order
            );
        }
        else
        {
            $arr=json_decode($value,true);
            if($order=="" && isset($arr[$GoodId]))//如果传入的排序为空,并且这项存在，删除
            {
                //先判断这个是否存在
                unset($arr[$GoodId]);
            }elseif($order=="" && !isset($arr[$GoodId]))//如果传入的值为空，并且这项不存在，返回；
            {
                exit("none");
            }
            elseif($order!="" && !isset($arr[$GoodId]))//如果传入的排序不为空，并且不存在，新增
            {
                unset($arr[array_search($order,$arr)]);
                $arr[$GoodId]=$order;
            }
            else//如果传入的排序不为空，并且存在，删除原来的再新增
            {
                unset($arr[array_search($order,$arr)]);
                $arr[$GoodId]=$order;
            }

        }
        $result=json_encode($arr,true);
        $num=ModelHotclass::where("id",$HotId)->update([
            "GoodsOrder"=>"$result"
        ]);
        if($num=="1")
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
    /*
     * 更新热门分类
     * */
    public function UpdateHot()
    {
        $message=input();
        if(isset($message["Head"]))
        {
            $oldImg=ModelHotclass::where("id",$message["id"])->field("icon")->find()->icon;
            $value=ModelHotclass::where("id",$message["id"])->update([
                'HotName'  =>  $message["Name"],
                'MubanNum' =>  $message["Muban"],
                'enable' =>  $message["Kaiguan"],
                'icon' =>  $message["Head"],
                'order' =>  $message["Xu"]
            ]);
            if($value=="1")
            {
                unlink("public/uploads/".$oldImg);
                exit("success");
            }
            else
            {
                exit("error");
            }
        }
        else
        {
            $value=ModelHotclass::where("id",$message["id"])->update([
                'HotName'  =>  $message["Name"],
                'MubanNum' =>  $message["Muban"],
                'enable' =>  $message["Kaiguan"],
                'order' =>  $message["Xu"]
            ]);
            if($value=="1")
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
