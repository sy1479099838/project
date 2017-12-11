<?php
namespace app\manage\controller\people;
use app\manage\controller\Common;
use app\manage\model\Business as ModelBusiness;
use think\Session;
class Business extends Common
{
    public function index()
    {
        $BusinessList=ModelBusiness::field("Account,LiablePeople,CompanyName,address,PeopleImg,LicenseImg,PhoneNum,EndTime,createTime,id")->limit(10)
            ->order('createTime', 'desc')
            ->select();
        $BusinessList=json_decode(json_encode($BusinessList,true),true);
        $Nowtime=strtotime(date("Y-m-d",time()));
        foreach($BusinessList as $k=>$v)
        {
            $BusinessList[$k]["PeopleImg"]=json_decode($v["PeopleImg"],true);
            $BusinessList[$k]["endDays"]=($v["EndTime"]-$Nowtime)/(24*60*60);
        }
//        dump($BusinessList);exit;
        $this->assign("BusinessList",$BusinessList);

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
        if($file=="" || $file==NULL)
        {
            exit("error");
        }
        else
        {
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
                if($ImgJson=="" || strlen($ImgJson)< 12)
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

    }

    public function AddBusiness()
    {
        $information = input();
        $isExistAccount=ModelBusiness::where("Account",$information["Zhanghao"])->field("Account")->find();
        $isExistAccount=json_decode(json_encode($isExistAccount,true),true);
        if($isExistAccount=="" || $isExistAccount==NULL)
        {
            $admin=Session::get('admin');
            $AccountRet = '/^[A-Za-z0-9]{4,18}$/';
            if(preg_match($AccountRet, $information["Zhanghao"])=='1')
            {
                $PwdRet = "/^[A-Z]{2}[A-Za-z0-9]{4,16}$/";
                if(preg_match($PwdRet, $information["Pwd"])=='1')
                {
                    $password=MD5("DHF".$information["Pwd"]."PWD");
                    $Admin = ModelBusiness::create([
                        'Account'  =>  $information["Zhanghao"],
                        'LiablePeople' =>  $information["Name"],
                        'CompanyName'=>$information["Gsname"],
                        'address'=>$information["Address"],
                        'LoginPwd'=>$password,
                        'PeopleImg'=>$information["Head"],
                        'EndTime'=>strtotime($information["Date"]),
                        'createTime'=>time(),
                        'createAdmin'=>$admin["id"]
                    ]);
                    if($Admin)
                    {
                        exit("success");//
                    }
                    else
                    {
                        exit("error");
                    }
                }
                else
                {
                    exit("密码格式错误！");
                }
            }
            else
            {
                exit("账号格式错误");
            }
        }
        else
        {
            exit("账号已存在！");
        }

    }
    public function EditBusiness()
    {
        $PostId=input("data");
        $BusinessList=ModelBusiness::where("id",$PostId)->field("LiablePeople,CompanyName,address,PhoneNum,EndTime,id")->find();
        $BusinessList=json_decode(json_encode($BusinessList,true),true);
        return $this->fetch("EditBusiness",["information"=>$BusinessList]);
    }
}
