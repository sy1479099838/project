<?php
namespace app\admin\controller\groups;
use app\admin\controller\common\Common;
class Allgroups extends Common
{
    public function index()
    {
        $this->assign("Title","可拼团产品");
        $this->assign("JsName","groups/Allgroups/index");
        return $this->fetch();
    }

}
