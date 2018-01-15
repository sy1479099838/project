<?php
namespace app\admin\controller\groups;
use app\admin\controller\common\Common;
class Nearby extends Common
{
    public function index()
    {
        $this->assign("Title","附近的团");
        $this->assign("JsName","groups/Nearby/index");
        return $this->fetch();
    }

}
