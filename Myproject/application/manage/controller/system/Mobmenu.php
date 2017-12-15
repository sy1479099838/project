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
        $this->assign("ClassList",$this->treeData($ClsaaList));
        return $this->fetch();
    }
    public function treeData($data,$pid = 0){
        $result = array();
        foreach($data as $v){
            if($v['pid'] == $pid){
                $v['children'] = $this->treeData($data,$v['id']);
                $result[] = $v;
            }
        }
        return $result;
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
}
