<?php
namespace app\admin\controller\groups;
use app\admin\controller\common\Common;
class Tuanlist extends Common
{
    public function index()
    {
        $this->assign("Title","附近的团");
        $this->assign("JsName","groups/Tuanlist/index");
        return $this->fetch();
    }

}
