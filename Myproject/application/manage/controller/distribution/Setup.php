<?php
namespace app\manage\controller\distribution;
use app\manage\controller\Common;
class Setup extends Common
{
    public function index()
    {
        return $this->fetch();
    }
}