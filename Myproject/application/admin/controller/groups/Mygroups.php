<?php
namespace app\admin\controller\groups;
use app\admin\controller\common\Common;
class Mygroups extends Common
{
    public function index()
    {
        $this->assign("Title","我的拼团");
        $this->assign("JsName","groups/Mygroups/index");
        return $this->fetch();
    }

}