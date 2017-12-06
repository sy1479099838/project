<?php
namespace app\admin\controller\personal;
use app\admin\controller\common\Common;
class Personal extends Common
{
    public function index()
    {
        $this->assign("Title","个人中心");
        $this->assign("JsName","personal/Personal/index");
        return $this->fetch();
    }
}
