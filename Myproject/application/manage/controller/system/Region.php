<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
use app\manage\model\Region as ModelRegion;
use think\Session;
class Region extends Common
{
    public function index()
    {
        $admin=Session::get('admin');
        if($admin["id"]=="1")
        {
            $regionList=json_decode(json_encode(ModelRegion::select(),true),true);
            $regionList=$this->treeData($regionList);
            $this->assign("AdminId",$admin["id"]);
            $this->assign("RegionList",$regionList);
            return $this->fetch();
        }
        else
        {
            $RegionId=$admin["RegionId"];
            $Region[]=['exp',"FIND_IN_SET($RegionId,cid)"];
            $regionList=json_decode(json_encode(ModelRegion::where($Region)->whereOr("id",$RegionId)->select(),true),true);
            $RegionPId=ModelRegion::where("id",$RegionId)->field("pid")->find();
            $regionList=$this->treeData($regionList,$RegionPId->pid);
            $this->assign("AdminId",$admin["id"]);
            $this->assign("RegionList",$regionList);
            return $this->fetch();
        }

    }

    public function OffRegion()
    {
        $id=input("id");
        $value=ModelRegion::where("id",$id)->update(['enable' => '0']);
        if($value===1)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
    public function OpenRegion()
    {
        $id=input("id");
        $value=ModelRegion::where("id",$id)->update(['enable' => '1']);
        if($value===1)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
    public function Choice()
    {
        $id=input("num");
        $admin=Session::get('admin');
        $RId=$admin["RegionId"];
        $R[]=['exp',"FIND_IN_SET($RId,cid)"];
        $AllRegionId=json_decode(json_encode(ModelRegion::where($R)->whereOr("id",$RId)->field("id")->select(),true),true);
        $array=array();
        foreach ($AllRegionId as $key=>$value)
        {
            $array[$key]=$value["id"];
        }
        $array[count($array)]="0";
        if(in_array($id,$array))
        {
            if($id==0)
            {

                if($admin["id"]=="1")
                {
                    $regionList=json_decode(json_encode(ModelRegion::select(),true),true);
                    $regionList=$this->treeData($regionList);
                    return $this->fetch('Choice',["List"=>$regionList,'regionName'=>"顶级区域"]);
                }
                else
                {
                    $RegionId=$admin["RegionId"];
                    $Region[]=['exp',"FIND_IN_SET($RegionId,cid)"];
                    $regionList=json_decode(json_encode(ModelRegion::where($Region)->whereOr("id",$RegionId)->select(),true),true);
                    $RegionPId=ModelRegion::where("id",$RegionId)->field("pid")->find();
                    $regionList=$this->treeData($regionList,$RegionPId->pid);
                    return $this->fetch('Choice',["List"=>$regionList,'regionName'=>"顶级区域"]);
                }
            }
            else
            {
                $value=json_decode(json_encode(ModelRegion::where("id",$id)->field("pid")->find(),true),true);
                $pid=$value["pid"];
                $regionName=json_decode(json_encode(ModelRegion::where("id",$pid)->field("regionName")->find(),true),true)["regionName"];
                if($regionName=="")
                {
                    $regionName="顶级区域";
                }
                $map[]=['exp',"FIND_IN_SET($id,cid)"];
                $value=json_decode(json_encode(ModelRegion::where("id",$id)->whereOr($map)->select(),true),true);
                $regionList=$this->treeData($value,$pid);
                return $this->fetch('Choice',["List"=>$regionList,'regionName'=>$regionName]);
            }
        }
        else
        {
            return "请勿修改程序！";
        }


    }
    public function Add()
    {
        $Region=input();
        $admin=Session::get('admin');
        if($Region["pid"]=="0" || $Region["cid"]=="0" || $Region["level"]=="1")
        {
            if($admin["id"]=="1")
            {
                $user = ModelRegion::create([
                    'regionName'  =>  $Region["RegionName"],
                    'pid' =>  $Region["pid"],
                    'cid'=>$Region["cid"],
                    'level'=>$Region["level"],
                    'enable'=>$Region["enable"]
                ]);
                if($user)
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
                exit("NoPower");
            }
        }
        else
        {
            $user = ModelRegion::create([
                'regionName'  =>  $Region["RegionName"],
                'pid' =>  $Region["pid"],
                'cid'=>$Region["cid"],
                'level'=>$Region["level"],
                'enable'=>$Region["enable"]
            ]);
            if($user)
            {
                exit("success");
            }
            else
            {
                exit("error");
            }
        }

    }
    public function edit()
    {
        $id=input("num");
        $value=json_decode(json_encode(ModelRegion::where("id",$id)->find(),true),true);
        if(strpos($value['cid'],','))
        {
            $cid=explode(",",$value['cid']);
            $value['cid']=$cid[0];
        }

        $admin=Session::get('admin');
        if($admin["id"]=="1")
        {
            $regionList=json_decode(json_encode(ModelRegion::select(),true),true);
            $regionList=$this->treeData($regionList);
            return $this->fetch('edit',["regionVal"=>$value,"List"=>$regionList,"AdminId"=>$admin["id"]]);
        }
        else
        {
            $RegionId=$admin["RegionId"];
            $Region[]=['exp',"FIND_IN_SET($RegionId,cid)"];
            $regionList=json_decode(json_encode(ModelRegion::where($Region)->whereOr("id",$RegionId)->select(),true),true);
            $RegionPId=ModelRegion::where("id",$RegionId)->field("pid")->find();
            $regionList=$this->treeData($regionList,$RegionPId->pid);
            return $this->fetch('edit',["regionVal"=>$value,"List"=>$regionList,"AdminId"=>$admin["id"]]);
        }
    }
    public function EditRegion()
    {
        $meserge=input();

        $admin=Session::get('admin');
        if($meserge["id"]==$admin["RegionId"])
        {
            exit("对不起，您没有修改权限！");
        }
        else
        {
            if($meserge["pid"]=="0" || $meserge["cid"]=="0" || $meserge["level"]=="1")
            {
                if($admin["id"]=="1")
                {
                    $value=ModelRegion::where('id', $meserge["id"])
                        ->update([
                            'regionName'  =>  $meserge["RegionName"],
                            'pid' =>  $meserge["pid"],
                            'cid'=>$meserge["cid"],
                            'enable'=>$meserge["enable"],
                            'level'=>$meserge["level"]
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
                    exit("NoPower");
                }
            }
            elseif($meserge["pid"]=="" || $meserge["cid"]=="" || $meserge["level"]=="")
            {
                exit("请选择正确的区域！");
            }
            else
            {
                $value=ModelRegion::where('id', $meserge["id"])
                    ->update([
                        'regionName'  =>  $meserge["RegionName"],
                        'pid' =>  $meserge["pid"],
                        'cid'=>$meserge["cid"],
                        'enable'=>$meserge["enable"],
                        'level'=>$meserge["level"]
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
}
