<?php
namespace app\manage\controller;
use think\Controller;
class Timing extends Controller
{
    public function index()
    {
        $text="在".date("Y-m-d H:i:s")."执行了一次";
        $this->saveFile($text);
    }

    public function saveFile($value)
    {
        file_put_contents("xml.txt",$value."\r\n",FILE_APPEND);
        $fileName="xml.txt";
        $size = filesize($fileName);
        if($size>=10000)
        {
            unlink("$fileName");
        }
        return 0;
    }
}