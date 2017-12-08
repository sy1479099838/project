<?php
namespace app\manage\controller\topmenu;
use app\manage\controller\Common;
use app\manage\model\Managemenu;
class Manageinfor extends Common
{
    public function index()
    {
        $this->assign("fileName","topmenu/Manageinfor/index");
        return $this->fetch();
    }

}
