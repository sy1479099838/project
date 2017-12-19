<?php
namespace app\manage\controller\system;
use app\admin\model\User;
use app\manage\controller\Common;
use app\manage\model\Managemenu;
use app\manage\controller\Index;
class Pcmenu extends Common
{
    public function index()
    {

        $MenuList=json_decode(json_encode(Managemenu::select(),true),true);
        $MenuList=$this->treeData($MenuList);
        $this->assign("MenuList",$MenuList);
        return $this->fetch();
    }


    public function OffMenu()
    {
        $id=input("id");
        $value=Managemenu::where("id",$id)->update(['Enable' => '0']);
        if($value===1)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
    public function OpenMenu()
    {
        $id=input("id");
        $value=Managemenu::where("id",$id)->update(['Enable' => '1']);
        if($value===1)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
    public function AddMenu()
    {
        $Menu=$_POST;
        $user = Managemenu::create([
            'MenuName'  =>  $Menu["MenuName"],
            'pid' =>  $Menu["pid"],
            'cid'=>$Menu["cid"],
            'href'=>$Menu["MenuHref"],
            'fileName'=>$Menu["FilePosition"],
            'Enable'=>$Menu["checked"],
            'Name'=>$Menu["FileName"],
            'leval'=>$Menu["leval"]
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

    public function EditMenu()
    {
        $Menu=$_POST;
        $value=Managemenu::where('id', $Menu["MenuId"])
            ->update([
            'MenuName'  =>  $Menu["MenuName"],
            'pid' =>  $Menu["pid"],
            'cid'=>$Menu["cid"],
            'href'=>$Menu["MenuHref"],
            'fileName'=>$Menu["FilePosition"],
            'Name'=>$Menu["FileName"],
            'leval'=>$Menu["leval"]
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
