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

    /*
     * 上传前先执行文件上传
     * 并生成小照片
     * */
    public function UplodeImg()
    {
        $file = request()->file("upfile");
        $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
        $ruth="public/uploads/";
        if($info){
            $value=$info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            $length=strlen($value);
            $head=substr($value, 0, 8);
            $ImgName=substr($value, 9, $length-9);
            $fileRuth=$ruth.$head."/".$ImgName;
            $image = \think\Image::open($fileRuth);
            $EFileName=$ruth.$head."/"."E".$ImgName;
            $image->thumb(150,150,\think\Image::THUMB_CENTER)->save($EFileName);
            $imageRuth=$head."/"."E".$ImgName;
            $EFileName=$head."/".$ImgName;
            $photo[0]=$head;
            $photo[1]=$ImgName;
            $ImgJson=json_encode(array(0=>$head,1=>$ImgName),true);
            if($ImgJson=="" || strlen($ImgJson)<12)
            {
                exit("error");
            }
            else
            {
                exit($ImgJson);
            }

        }
        else
        {
            exit("error");
        }
    }

    public function AddBusiness()
    {
        $file = $_POST;
        dump($file);
    }
}
