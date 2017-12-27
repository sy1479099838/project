<?php
namespace app\manage\controller\people;
use app\manage\controller\Common;
use app\manage\model\User;
class Users extends Common
{
    public function index()
    {
        return $this->fetch();
    }

    public function weixin()
    {
        return $this->fetch();
    }

    public function qq()
    {
        return $this->fetch();
    }
    public function phoneusers()
    {
        $PhoneUser=User::where("Registration","1")->order("RegisterTime desc")->select();
        $this->assign("PhoneUserList",$PhoneUser);
        return $this->fetch();
    }

    public function submit()
    {
        dump($_POST);
    }
}
