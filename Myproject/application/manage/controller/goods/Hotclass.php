<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
use app\manage\model\Hotclass as ModelHotclass;
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
}
