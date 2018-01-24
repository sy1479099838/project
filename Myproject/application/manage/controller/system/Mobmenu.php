<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
use think\Session;
class Mobmenu extends Common
{
    public function index()
    {
        $ClsaaList=json_decode(json_encode(GoodsClassify::select(),true),true);
//        dump($ClsaaList);exit;
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
    public function CloseClass()
    {
        $num=input("num");
        $value=GoodsClassify::where('id', $num)
            ->update(['Enable' => '0']);
        if($value=="1")
        {
            exit("success");
        }
        else
        {
            exit("error");
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
        $ClsaaList=json_decode(json_encode(GoodsClassify::select(),true),true);

        $information=json_decode(json_encode(GoodsClassify::where("id",$id)->find(),true),true);
        $information["cid"]=explode(",",$information["cid"]);
        if($information["pid"]==0)
        {
            $information["IdName"]="id='showEditMuban'";
        }
        else{
            $information["IdName"]="";
        }
        return $this->fetch("Edit",["ClassList"=>$this->treeData($ClsaaList),"information"=>$information]);
    }

    public function saveFrom($id)
    {
        $value=input();
        if($value["fenlei"]==0)
        {
            $level=1;
            $pid=0;
            $cid=0;
        }
        else
        {
            if($value["fenlei".$value["fenlei"]]==0)
            {
                $level=2;
                $pid=$value["fenlei"];
                $cid=$value["fenlei"];
            }
            else
            {
                $level=3;
                $pid=$value["fenlei".$value["fenlei"]];
                $cid=$value["fenlei"].",".$value["fenlei".$value["fenlei"]];
            }
        }
        $result=GoodsClassify::where("id",$id)->update([
            "ClassName"=>$value["ClassName"],
            "pid"=>$pid,
            "cid"=>$cid,
            "level"=>$level,
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
}
