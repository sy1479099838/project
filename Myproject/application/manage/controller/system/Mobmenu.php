<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
class Mobmenu extends Common
{
    public function index()
    {
        $ClsaaList=json_decode(json_encode(GoodsClassify::select(),true),true);
        $this->assign("ClassList",$ClsaaList);
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
