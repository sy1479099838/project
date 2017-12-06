<?php
namespace app\admin\controller\home;
use think\Session;
use app\admin\controller\common\Common;
class Home extends Common
{
    public function index()
    {
        $this->assign("Title","首页");
        $this->assign("JsName","home/Home/index");
        $UserInformation=Session::get("UserInformation");
//        dump($UserInformation);
        $this->assign("UserInformation",$UserInformation);
        return $this->fetch();
    }
}
