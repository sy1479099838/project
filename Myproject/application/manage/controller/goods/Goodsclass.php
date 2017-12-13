<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
class Goodsclass extends Common
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
