<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
class Mobmenu extends Common
{
    public function index()
    {
//        echo(123456789);
        return $this->fetch();

    }
    public function treeData($data,$pid = 0){
        $result = array();
        foreach($data as $v){
            if($v['pid'] == $pid){
                $v['children'] = $this->treeData($data,$v['id']);
                $result[] = $v;
            }
        }
        return $result;
    }
}
