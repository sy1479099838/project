<?php
namespace app\manage\controller\order;
use app\manage\controller\Common;
class Unpaid extends Common
{
    public function index()
    {
        return $this->fetch();
    }
}
