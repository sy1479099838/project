<?php
namespace app\manage\controller\distribution;
use app\manage\controller\Common;
class Apply extends Common
{
    public function untreated()
    {
        return $this->fetch();
    }
}