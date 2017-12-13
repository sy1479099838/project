<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
class Phonemenu extends Common
{
    public function index()
    {
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
