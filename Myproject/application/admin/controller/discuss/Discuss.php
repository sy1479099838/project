<?php
namespace app\admin\controller\discuss;
use app\admin\model\Friendtalk;
use app\admin\controller\common\Common;
use think\Session;
use app\admin\model\FriendTalkComment;
use think\Db;
use app\admin\model\User;
class Discuss extends Common
{
    public function index()
    {
        $liulan=Db::query("UPDATE t_friendtalk SET pageView=pageView+1");
        $people=Session::get("UserInformation");
        $value=json_decode(json_encode(Friendtalk::with("profile")->order('CreateTime ASC')->select(),true),true);
        foreach ($value as $key=>$val)
        {
            $result=json_decode(json_encode(FriendTalkComment::where("talkId",$val["id"])->order("CommentTime ASC")->select(),true),true);
            $count=FriendTalkComment::where("talkId",$val["id"])->count();
            foreach ($result as $k=>$v)
            {
                $result[$k]["user"]=json_decode(json_encode(User::where("id",$v["user"])->field("id,UserName")->find(),true),true);
                $result[$k]["Touser"]=json_decode(json_encode(User::where("id",$v["Touser"])->field("id,UserName")->find(),true),true);
            }
            $array=explode(",",$val["Fabulous"]);
            if($array["0"]=="")
            {
                $value[$key]["FabulousCount"]="0";
            }
            else
            {
                $value[$key]["FabulousCount"]=count($array);
            }

            if(in_array($people["id"],$array))
            {
                $value[$key]["Fabulous"]="1";
            }
            else
            {
                $value[$key]["Fabulous"]="0";
            }
            $value[$key]["comment"]=$result;
            $value[$key]["commentCount"]=$count;
            $photo=json_decode($val["photo"]);
            $value[$key]["photo"]=$photo;
        }
//        dump($value);
        $this->assign("Title","驴友说");
        $this->assign("JsName","discuss/Discuss/index");
        $this->assign("friendTalk",$value);
        return $this->fetch();
    }
    public function position()
    {
        $Jingdu=$_POST["JingDu"];
        $WeiDu=$_POST["WeiDu"];
        print_r($Jingdu);
        print_r($WeiDu);
        $Positionname=$this->http_request("http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location={$Jingdu},{$WeiDu}&output=json&pois=1&ak=hYbeIVOGXQCFUANLtYxhpHfDDLzGaxwo");
        dump($Positionname);
    }
    public function http_request($url,$method="get",$data=null,$https=true)
    {
        $ch=curl_init();//初始化
        curl_setopt($ch,CURLOPT_URL,$url);//设置访问的url
        curl_setopt($ch,CURLOPT_HEADER,false);//设置不需要头信息
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);//只获取页面类容，但不输出
        if($https)
        {
            curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);//不做服务器认证
            curl_setopt($ch,CURLOPT_SSL_VERIFYHOST,false);//不做客户端认证
        }
        if($method=="post")
        {
            curl_setopt($ch,CURLOPT_POST,true);//设置请求是post方式
            curl_setopt($ch,CURLOPT_POSTFIELDS,$data);//设置post请求的数据
        }
        $str=curl_exec($ch);//执行访问，返回结果
        curl_close($ch);//关闭curl,释放资源
        return $str;
    }

    public function upload()
    {
        $file = request()->file("file");
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
            if(Session::has('UploadsTalk'))
            {
                $uploads=Session::pull('UploadsTalk');
                $num=count($uploads);
                $uploads[$num]=$photo;
                Session::set('UploadsTalk',$uploads);
            }
            else
            {
                $uploads[0]=$photo;
//                $num=count($uploads);
//                dump($num);
//                $uploads[$num]=$photo;
                Session::set('UploadsTalk',$uploads);
            }
            exit($imageRuth);
        }else{
            // 上传失败获取错误信息
            echo $file->getError();
        }
    }
    public function TextUpload()
    {
        $content=$_POST;
        $uploads=json_encode(Session::pull('UploadsTalk'),true);
        $User=Session::get("UserInformation");
        if($uploads==="null")
        {
            $value = Friendtalk::create([
                'UserId'  =>  $User["id"],
                'CreateTime' =>  time(),
                'position'=>$content["position"],
                'GoodsId'=>$content["FengJing"],
                'TalkText'=>$content["DiscussFeel"]
            ]);
        }
        else
        {
            $value = Friendtalk::create([
                'UserId'  =>  $User["id"],
                'CreateTime' =>  time(),
                'position'=>$content["position"],
                'GoodsId'=>$content["FengJing"],
                'TalkText'=>$content["DiscussFeel"],
                'photo'=>$uploads
            ]);
        }
        if($value)
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }
    public function findPhoto()
    {
        $num=input("num");
        $value=Friendtalk::where("id",$num)->field("photo")->find();
        $value=json_decode($value["photo"],true);
        return $this->fetch("ImgCarousel",["img"=>$value]);
    }

    public function SaveComment()
    {
        $text=input();
        $people=Session::get("UserInformation");
        if($text["text"]=="" || $text["text"]==NULL)
        {
            exit("notNULL");
        }
        else
        {
            $value=FriendTalkComment::create([
                "user"=>$people["id"],
                "talkId"=>$text["TalkId"],
                "Touser"=>$text["UserId"],
                "text"=>$text["text"],
                "CommentTime"=>time(),
                "type"=>1

            ]);
            if($value)
            {
                exit("success");
            }
            else
            {
                exit("error");
            }
        }
    }

    public function dianzan()
    {
        $type=input();
        $people=Session::get("UserInformation");
        if($type["num"]==1)
        {
            $string=explode(",",Friendtalk::where("id",$type["id"])->field("Fabulous")->find()->Fabulous);
            if(in_array($people["id"],$string))
            {
                unset($string[array_search($people["id"],$string)]);
                $string=implode(",",$string);
                $value=Friendtalk::where("id",$type["id"])->update([
                    "Fabulous"=>$string
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
        else
        {

            if($type["dianzanNum"]==0)
            {
                $value=Db::query("UPDATE `t_friendtalk` SET `Fabulous`=".$people["id"]." WHERE id=".$type["id"]);
                exit("success");
            }
            else
            {
                $value=Db::query("UPDATE `t_friendtalk` SET `Fabulous`=CONCAT(`Fabulous`,',',".$people["id"].") WHERE id=".$type["id"]);
                exit("success");
            }
        }
    }
}

