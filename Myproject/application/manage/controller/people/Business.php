<?php
namespace app\manage\controller\people;
use app\manage\controller\Common;
use app\manage\model\Business as ModelBusiness;
use app\manage\model\Managemenu;
use app\manage\model\Admin;
use think\Session;
class Business extends Common
{
    public function index()
    {
        $BusinessList=ModelBusiness::where('id','neq',1)
            ->field("Account,LiablePeople,CompanyName,address,PeopleImg,LicenseImg,PhoneNum,EndTime,createTime,id")
            ->page('1,3')
            ->order('createTime', 'desc')
            ->select();
        $PageCount=ModelBusiness::count("id");//总条数
        $Num=ceil($PageCount/3);//总页数
        $NowPage=1;
        $page=Common::Page($NowPage,$Num);
        $BusinessList=json_decode(json_encode($BusinessList,true),true);
        $Nowtime=strtotime(date("Y-m-d",time()));
        foreach($BusinessList as $k=>$v)
        {
            $BusinessList[$k]["PeopleImg"]=json_decode($v["PeopleImg"],true);
            $BusinessList[$k]["endDays"]=($v["EndTime"]-$Nowtime)/(24*60*60);
            $BusinessList[$k]["PhoneNum"]=explode(",",$v["PhoneNum"]);
        }
        $this->assign("BusinessList",$BusinessList);
        $this->assign("NowPage",$NowPage);
        $this->assign("page",$page);
        $this->assign("AllPage",$Num);

        $this->assign("AdminId",Session::get('admin')["id"]);

        return $this->fetch();

    }


    /*
     * 分页
     * */
    public function PageSearch()
    {
        $page=input("num");
//        dump($page);exit;
        $BusinessList=ModelBusiness::where('id','neq',1)
            ->field("Account,LiablePeople,CompanyName,address,PeopleImg,LicenseImg,PhoneNum,EndTime,createTime,id")
            ->page($page.',3')
            ->order('createTime', 'desc')
            ->select();
        $PageCount=ModelBusiness::count("id");//总条数
        $Num=ceil($PageCount/3);//总页数
        $NowPage=$page;
        $page=Common::Page($NowPage,$Num);
        $BusinessList=json_decode(json_encode($BusinessList,true),true);
        $Nowtime=strtotime(date("Y-m-d",time()));
        foreach($BusinessList as $k=>$v)
        {
            $BusinessList[$k]["PeopleImg"]=json_decode($v["PeopleImg"],true);
            $BusinessList[$k]["endDays"]=($v["EndTime"]-$Nowtime)/(24*60*60);
            $BusinessList[$k]["PhoneNum"]=explode(",",$v["PhoneNum"]);
        }
        return $this->fetch("PageSearch",
            [
                "BusinessList"=>$BusinessList,
                "NowPage"=>$NowPage,
                "page"=>$page,
                "AdminId"=>Session::get('admin')["id"],
                "AllPage"=>$Num
            ]
        );

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

    /*
     * 添加商家
     * */
    public function AddBusiness()
    {
        $information = input();
        if(preg_match("/^1[3|4|5|7|8][0-9]\d{8}$/", $information["Phonenumber"])!='1')
        {
            exit("电话格式错误！");
        }
        if(preg_match("/[0-9-()（）]{7,18}/",$information["Zuonumber"])!='1')
        {
            exit("座机格式错误！");
        }
        $IssExist=json_decode(json_encode(Admin::where("account",$information["Zhanghao"])->find(),true));
        if($IssExist)
        {
            exit("账号已存在！");
        }
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
                        'createAdmin'=>$admin["id"],
                        'PhoneNum'=>$information["Phonenumber"].",".$information["Zuonumber"]
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
        $BusinessList["PhoneNum"]=explode(",",$BusinessList["PhoneNum"]);
        return $this->fetch("EditBusiness",["information"=>$BusinessList,"id"=>$PostId]);
    }
    /*
     * 超级管理员查询商家的总权利
     * */
    public function AllPower()
    {
        $admin=Session::get('admin');//首先查询一下当前登录人的信息
        $id=$admin["id"];
        if($id=="1")
        {
            $AllPower=json_decode(json_encode(ModelBusiness::where("id","1")->field("power")->find(),true),true)["power"];
            $AllPower=explode(",",$AllPower);
            $MenuList=json_decode(json_encode(Managemenu::where("Enable","1")->field("id,MenuName,pid")->select(),true),true);
            foreach ($MenuList as $k=>$v)
            {
                if(in_array($v["id"],$AllPower))
                {
                    $MenuList[$k]["key"]="1";
                }
                else
                {
                    $MenuList[$k]["key"]="0";
                }
            }
            $MenuList=$this->treeData($MenuList);
            return $this->fetch("AllPower",["MenuList"=>$MenuList]);
        }
        else
        {
            exit("error");
        }

    }
    /*
     * 保存总权限
     * */
    public function SaveAllPower()
    {
        $data=input("text");
        $admin=Session::get('admin');//首先查询一下当前登录人的信息
        $id=$admin["id"];
        if($id=="1")
        {
            $value=ModelBusiness::where('id', 1)
                ->update(['power' => $data]);
            if($value=="1")
            {
                exit("success");
            }
            else
            {
                exit("error");
            }
        }
        else
        {
            exit("nopower");
        }
    }

    /*
     * 添加个人权限
     * */
    public function power()
    {
        $data=input("data");
        $AllPower=ModelBusiness::where("id","1")->field("power")->find()->power;
        $MenuList=json_decode(json_encode(Managemenu::where("id","in",$AllPower)->where("Enable","1")->field("id,MenuName,pid")->select(),true),true);
        $AllPower=explode(",",ModelBusiness::where("id",$data)->field("power")->find()->power);
        foreach ($MenuList as $k=>$v)
        {
            if(in_array($v["id"],$AllPower))
            {
                $MenuList[$k]["key"]="1";
            }
            else
            {
                $MenuList[$k]["key"]="0";
            }
        }
        $MenuList=$this->treeData($MenuList);
        return $this->fetch("power",["MenuList"=>$MenuList,"id"=>$data]);

    }
    public function SavePower()
    {
        $data=input();
        $value=ModelBusiness::where('id', $data["data"])
            ->update(['power' => $data["text"]]);
        if($value=="1")
        {
            exit("success");
        }
        else
        {
            exit("error");
        }
    }

    public function BusinessKeywordSearch()
    {
        $key=input("key");
        $list=ModelBusiness::where('LiablePeople|CompanyName|address','like',"%".$key."%")
            ->where("id","neq","1")
            ->field("Account,LiablePeople,CompanyName,address,PeopleImg,LicenseImg,PhoneNum,EndTime,createTime,id")
            ->page('1,3')
            ->order('createTime', 'desc')
            ->select();
        $PageCount=ModelBusiness::where('LiablePeople|CompanyName|address','like',"%".$key."%")
                ->where("id","neq","1")
                ->count("id")-1;
        $list=json_decode(json_encode($list,true),true);
        $Nowtime=strtotime(date("Y-m-d",time()));
        foreach($list as $k=>$v)
        {
            $list[$k]["PeopleImg"]=json_decode($v["PeopleImg"],true);
            $list[$k]["endDays"]=($v["EndTime"]-$Nowtime)/(24*60*60);
            $list[$k]["PhoneNum"]=explode(",",$v["PhoneNum"]);
        }
        return $this->fetch("BusinessKeywordSearch",["list"=>$list]);
    }

    /*
     * 保存编辑
     * */
    public function SaveEdit()
    {
        $information = input();
        if(preg_match("/^1[3|4|5|7|8][0-9]\d{8}$/", $information["Phonenumber"])!='1')
        {
            exit("电话格式错误！");
        }
        if(preg_match("/[0-9-()（）]{7,18}/",$information["Zuonumber"])!='1')
        {
            exit("座机格式错误！");
        }
        $value = ModelBusiness::where('id', $information["num"])
            ->update([
            'LiablePeople' =>  $information["Name"],
            'CompanyName'=>$information["Gsname"],
            'address'=>$information["Address"],
            'EndTime'=>strtotime($information["Date"]),
            'PhoneNum'=>$information["Phonenumber"].",".$information["Zuonumber"]
        ]);
        if($value=="1")
        {
            exit("success");//
        }
        else
        {
            exit("error");
        }

    }
    
    /*
     * 密码重置
     * */
    public function ResBusinessPwd()
    {
        $id=input("num");
        $Account=json_decode(json_encode(ModelBusiness::where('id', $id)->field("Account")->find(),true),true)["Account"];
        $password=MD5("DHFPWd".$Account."PWD");
        $value = ModelBusiness::where('id', $id)
            ->update([
                'LoginPwd'=>$password
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
