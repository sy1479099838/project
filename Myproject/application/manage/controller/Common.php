<?php
namespace app\manage\controller;
use think\Controller;
use think\Request;
use think\Session;
use app\manage\model\Managemenu;
class Common extends Controller
{
    public function __construct(Request $request = null)
    {
        parent::__construct($request);
        $admin=Session::get('admin');

        if(empty($admin))
        {
            $this->redirect('Login/index');
        }
        else
        {
            $this->assign("LoginAdmin",$admin);
            if($admin["type"]=="admin")
            {
                $Rule=$admin["AdminRule"];
            }
            else
            {
                $Rule=$admin["power"];
            }

            $Rule=explode(",",$Rule);
            if(isset($_GET["id"]))
            {
                if($admin["id"]==1)
                {
                    $value=Managemenu::where("Enable","1")->field("id,MenuName,leval,pid,href,fileName")->select();
                }
                else
                {
                    if(!in_array($_GET["id"],$Rule))
                    {
                        Session::clear();
                        $this->redirect('Login/index');
                    }
                    else
                    {
                        if($admin["type"]=="admin")
                        {
                            $value=Managemenu::where("Enable","1")->where("id","in",$admin["AdminRule"])->field("id,MenuName,leval,pid,href,fileName")->select();
                        }
                        else
                        {
                            $value=Managemenu::where("Enable","1")->where("id","in",$admin["power"])->field("id,MenuName,leval,pid,href,fileName")->select();
                        }

                    }

                }

                $value=json_decode(json_encode($value,true),true);
                $Menu=$this->treeData($value);
                $id=Managemenu::where("id",$_GET["id"])->field("cid,fileName")->find();
                $cid=explode(",",json_decode(json_encode($id,true),true)["cid"]);
                $this->assign("fileName",$id->fileName);
                $this->assign("position",$_GET["id"]);
                $this->assign("MenuId",$cid);
                $this->assign("MenuName",$Menu);
            }

        }
    }
    public function index()
    {

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

    public function OutLogin()
    {
        Session::clear();
        exit("success");
    }
    public static function Page($NowPage,$Num)
    {
        $page=array();
        if($Num>8)
        {
            if($NowPage<6)
            {
                for($i=1;$i<=7;$i++)
                {
                    $page[]=$i;
                }
                $page[]="...";
                $page[]=$Num;
            }
            elseif($NowPage>=6 && $NowPage<$Num-3)
            {
                $page[]="1";
                $page[]="...";
                for($i=$NowPage-2;$i<=$NowPage+2;$i++)
                {
                    $page[]=$i;
                }
                $page[]="...";
                $page[]=$Num;
            }
            else
            {
                $page[]="1";
                $page[]="...";
                for($i=$Num-6;$i<=$Num;$i++)
                {
                    $page[]=$i;
                }

            }
        }
        else
        {
            for($i=1;$i<=$Num;$i++)
            {
                $page[]=$i;
            }
        }
        return $page;
    }

}
