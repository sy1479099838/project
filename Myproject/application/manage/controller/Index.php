<?php
namespace app\manage\controller;
use think\Controller;
use app\admin\model\User;
use app\manage\controller\Common;
use app\manage\model\Managemenu;
use think\Session;
class Index extends Controller
{
    public function index()
    {
        $admin=Session::get('admin');

        if(empty($admin))
        {
            $this->redirect('Login/index');
        }
        else
        {
            $this->assign("LoginAdmin",$admin);
//            dump($admin);exit;
            if($admin["type"]=="admin")
            {
                if($admin["id"]==1)
                {
                    $value=Managemenu::where("Enable","1")->field("id,MenuName,leval,pid,href,fileName")->select();
                }
                else
                {
                    $value=Managemenu::where("Enable","1")->where("id","in",$admin["AdminRule"])->field("id,MenuName,leval,pid,href,fileName")->select();
                }
            }
            else
            {
                $value=Managemenu::where("Enable","1")->where("id","in",$admin["power"])->field("id,MenuName,leval,pid,href,fileName")->select();
            }




            $value=json_decode(json_encode($value,true),true);
            $Menu=$this->treeData($value);
            $this->assign("MenuName",$Menu);
            $id=array(0=>1,1=>2);
            $this->assign("MenuId",$id);
        }
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

}
