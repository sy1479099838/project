<?php
namespace app\admin\controller\personal;
use app\admin\controller\common\Common;
use app\admin\model\User;
use think\Session;
class Personal extends Common
{
    public function index()
    {
        $user=json_decode(json_encode(Session::get("UserInformation"),true),true);
        if(strlen($user["UserImg"])>60)
        {
            $user["count"]=1;
        }
        else
        {
            $user["count"]=0;
        }
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/index");
        $this->assign("user",$user);
        return $this->fetch();
    }
    public function member()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/member");
        return $this->fetch();
    }
    public function level()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/level");
        return $this->fetch();
    }
    public function orderform()
    {
        $this->assign("Title","订单详情");
        $this->assign("JsName","personal/Personal/orderform");
        return $this->fetch();
    }
    public function quan()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/quan");
        return $this->fetch();
    }
}
