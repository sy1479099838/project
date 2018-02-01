<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
use think\Session;
use app\manage\model\Goods;
class Mobmenu extends Common
{
    public function index()
    {
        $ClsaaList=json_decode(json_encode(GoodsClassify::where("id","not in","12")->select(),true),true);
        $this->assign("ClassList",$this->treeData($ClsaaList));
        return $this->fetch();
    }

    public function addclass()
    {
        $Class=input();
        $value=GoodsClassify::create([
            'ClassName'  =>  $Class["Name"],
            'pid'  =>  $Class["pid"],
            'cid'  =>  $Class["cid"],
            'level'  =>  $Class["level"],
            'Enable'  =>  $Class["enable"],
            'CreateAdmin'  =>  Session::get('admin')["id"],
            'createTime'  =>  time(),
            'PageDisplays_frame'  =>$Class["muban"]
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
    public function OpenClass()
    {
        $num=input("num");
        $pid=GoodsClassify::where("id",$num)->field("pid")->find()->pid;
        if($pid=="0")
        {
            $value=GoodsClassify::where('id', $num)
                ->update(['Enable' => '1']);
            if($value=="1")
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
            $enable=GoodsClassify::where("id",$pid)->field("Enable")->find()->Enable;
            if($enable=="1")
            {
                $value=GoodsClassify::where('id', $num)
                    ->update(['Enable' => '1']);
                if($value=="1")
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
                exit("请确保父级分类为开启状态！");
            }
        }
    }
    public function CloseClass()
    {
        $num=input("num");
        $map[]=['exp',"FIND_IN_SET($num,cid)"];
        $goods=Goods::where($map)->update([
            "enable"=>0
        ]);
        if($goods>=0)
        {
            $id=json_decode(json_encode(GoodsClassify::where($map)->field("id")->select(),true),true);
            $arr=array();
            if(!empty($id))
            {
                $arr[0]=$num;
                foreach ($id as $v)
                {
                    $arr[]="".$v["id"]."";
                }
            }
            else
            {
                $arr[0]=$num;
            }
            $ids=implode(",",$arr);
            $arr=json_encode($arr,true);
            $value=GoodsClassify::where('id', "in",$ids)
                ->update(['Enable' => '0']);
//            dump($arr);exit;
            if($value>=1)
            {
                exit($arr);
            }
            else
            {
                exit("error");
            }
        }
        else
        {
            exit("meiyoujinlai");
        }

    }

    public function subIcon($id)
    {
//        dump($id);exit;
        $file = request()->file('upfile');
        if($file){
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            if($info){
                $value=$info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $length=strlen($value);
                $head=substr($value, 0, 8);
                $ImgName=substr($value, 9, $length-9);
                $TmpImg=$head."/".$ImgName;
            }else{
                // 上传失败获取错误信息
                echo $file->getError();
            }
        }
        if(strlen($TmpImg)>10 && $TmpImg!="")
        {
            $OldIcon=GoodsClassify::where("id",$id)->field("icon")->find()->icon;
            $result=GoodsClassify::where("id",$id)->update([
                "icon"=>$TmpImg
            ]);
            if($result==1)
            {
                if($OldIcon!="" || $OldIcon!=NULL)
                {
                    @unlink("public/uploads/".$OldIcon);
                    exit("success");
                }
                else
                {
                    exit("success");
                }
            }
        }
    }

    public function Edit()
    {
        $id=input("id");

        $information=json_decode(json_encode(GoodsClassify::where("id",$id)->find(),true),true);
        $information["cid"]=explode(",",$information["cid"]);
        if($information["pid"]==0)
        {
            $information["IdName"]="id='showEditMuban'";
        }
        else{
            $information["IdName"]="";
        }
        return $this->fetch("Edit",["information"=>$information]);
    }

    public function saveFrom($id)
    {
        $value=input();
        $result=GoodsClassify::where("id",$id)->update([
            "ClassName"=>$value["ClassName"],
            "PageDisplays_frame"=>$value["EditMuban"],
            "Enable"=>$value["EditClassEnable"],
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

    public function SureDel()
    {
        $num=input("id");
        if($num==12)
        {
            exit("对不起，您没有权限！");
        }
        $map[]=['exp',"FIND_IN_SET($num,cid)"];
        $id=json_decode(json_encode(GoodsClassify::where($map)->field("id")->select(),true),true);
        $arr=array();
        if(!empty($id))
        {
            $arr[0]=$num;
            foreach ($id as $v)
            {
                $arr[]="".$v["id"]."";
            }
        }
        else
        {
            $arr[0]=$num;
        }
        $ids=implode(",",$arr);
        $value=GoodsClassify::where('id', "in",$ids)
            ->delete();
        if($value>0)
        {
            $goods=Goods::where($map)->update([
                "enable"=>0,
                "pid"=>12,
                "cid"=>12
            ]);
            if($goods)
            {
                exit("success");
            }

        }
        else
        {
            exit("error");
        }

    }
}
