<?php
namespace app\manage\controller\people;
use app\manage\controller\Common;
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
        return $this->fetch();
    }
}
