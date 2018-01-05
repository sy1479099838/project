<?php
namespace app\manage\controller\weixin;
use app\manage\controller\Common;
class Reply extends Common
{
    public function index()
    {
        return $this->fetch();
    }
}