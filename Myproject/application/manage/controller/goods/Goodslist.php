<?php
namespace app\manage\controller\goods;
use app\manage\controller\Common;
use app\manage\model\GoodsClassify;
class Goodslist extends Common
{
    public function index()
    {
        $ClassList=GoodsClassify::where("Enable","1")->select();
        $ClassList=Common::treeData(json_decode(json_encode($ClassList,true),true));
        $this->assign("ClassList",$ClassList);
        return $this->fetch();
    }

    public function GoodsImg()
    {
        $file = request()->file("upfile");
        if($file=="" || $file==NULL)
        {
            exit("error");
        }
        else
        {
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            $ruth="public/uploads/";
            if($info)
            {
                $value=$info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $length=strlen($value);
                $head=substr($value, 0, 8);
                $ImgName=substr($value, 9, $length-9);
                $fileRuth=$head."/".$ImgName;
                exit($fileRuth);
            }
        }
    }
}
