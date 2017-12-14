<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
class Goodslist extends Common
{
    public function index()
    {
        $ClassList=GoodsClassify::where("Enable","1")->select();
        $ClassList=$this->treeData(json_decode(json_encode($ClassList,true),true));
        $this->assign("ClassList",$ClassList);
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
