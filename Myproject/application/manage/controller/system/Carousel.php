<?php
namespace app\manage\controller\system;
use app\manage\controller\Common;
use app\admin\model\Phoneimg;
class Carousel extends Common
{
    public function index()
    {
        $list=json_decode(json_encode(Phoneimg::all(function($query){
            $query->order('order', 'asc');}),true),true);
        $this->assign("list",$list);
        return $this->fetch();
    }
    public function saveImg()
    {
        $file = request()->file('upfile');
        if($file=="" || $file==NULL)
        {
            exit("error");
        }
        else {
            $info = $file->move(ROOT_PATH . 'public' . DS . 'uploads');
            $ruth = "public/uploads/";
            if ($info) {
                $value = $info->getSaveName();// 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
                $length = strlen($value);
                $head = substr($value, 0, 8);
                $ImgName = substr($value, 9, $length - 9);
                $TmpImg =json_encode(array($head,$ImgName),true);
                exit($TmpImg);
            }
            else
            {
                exit("error");
            }
        }
    }
    public function saveFrom()
    {
        $value=input();
        $img=json_decode($value["img"],true);
        if($value["Order"]=="" || $value["Order"]==NULL)
        {
            unlink("public/uploads/".$img["0"]."/".$img["1"]);
            exit("orderNULL");
        }
        if($value["CarouselHref"]=="" || $value["CarouselHref"]==NULL || !preg_match("/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/",$value["CarouselHref"]))
        {
            unlink("public/uploads/".$img["0"]."/".$img["1"]);
            exit("hrefNULL");
        }
        if($value["CarouselName"]=="" || $value["CarouselName"]==NULL)
        {
            unlink("public/uploads/".$img["0"]."/".$img["1"]);
            exit("NameNULL");
        }
        $result=Phoneimg::create([
            "name"=>$value["CarouselName"],
            "href"=>$value["CarouselHref"],
            "order"=>$value["Order"],
            "img"=>$img["0"]."/".$img["1"],
            "creatTime"=>time(),
            "zhuangtai"=>1,
            "method"=>$value["method"][0]
        ]);
        if($result)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }

    public function changeZ()
    {
        $value=input();
        $result=Phoneimg::where("id",$value["id"])->update([
            "zhuangtai"=>$value["zhuangtai"]
        ]);
        if($result==1)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }

    public function saveOrder()
    {
        $num=input();
        $value=Phoneimg::where("id",$num["id"])->update([
            "order"=>$num["order"]
        ]);
        if($value==1)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
}