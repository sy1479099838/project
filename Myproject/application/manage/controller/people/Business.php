<?php
namespace app\manage\controller\people;
use app\manage\controller\Common;
class Business extends Common
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
    public function setImageCss()
    {
        $value=input();
//        dump($value);
        if($value["width"]=="0")
        {
            exit("error");
        }
        else
        {
            if($value["width"]>=$value["BoxWidth"])
            {
                $result="100%";
            }
            else
            {
                $result=(($value["BoxWidth"]-$value["width"])/2)."px";
            }
            exit($result);
        }

    }
}
