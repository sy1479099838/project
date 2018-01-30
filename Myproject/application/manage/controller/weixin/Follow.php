<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
use app\manage\model\FollowPeople;
use think\Db;
class Follow extends Common
{
    public function index()
    {
        $get=$_GET;
        if(isset($get["page"]))
        {
            $NowPage=$get["page"];
        }
        else
        {
            $NowPage=1;
        }
        $PageCount=FollowPeople::count("id");//总条数
        $Num=ceil($PageCount/20);//总页数
        $page=Common::Page($NowPage,$Num);
        $List=Db::table('t_follow_people')
            ->page($NowPage.',20')
            ->order("subscribe_time desc")
            ->select();
        $this->assign("page",$page);
        $this->assign("List",$List);
        $this->assign("AllPage",$Num);
        $this->assign("NowPage",$NowPage);
        return $this->fetch();
    }
    public function beizhua()
    {
        $beizhu=$_POST['beizhu'];
        //dump($nicheng);
        exit("success");

    }

}