<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
class Createmenu extends Common
{
    public function index()
    {
        return $this->fetch();
    }
}