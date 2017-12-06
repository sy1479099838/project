<?php
namespace app\admin\controller;
use think\Controller;
use think\Session;
class Index extends Controller
{
    public function index()
    {
        $user=Session::get("UserInformation");
        if(empty($user))
        {
            $this->redirect('/admin/login/login/index');
        }
        else
        {
            $this->redirect('/admin/home/Home/index');
        }
    }
}
