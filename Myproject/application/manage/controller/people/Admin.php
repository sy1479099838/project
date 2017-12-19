<?php
namespace app\manage\controller\people;
use app\manage\controller\Common;
use app\manage\model\Admin as ModelAdmin;
use app\manage\model\Managemenu;
use app\manage\model\Region;
use app\manage\model\Business;
use think\Session;
use \think\Validate;

class Admin extends Common
{
    public function index()
    {
        $admin=Session::get('admin');
        $id=$admin["id"];
        if($id===1)
        {
            $AdminList=ModelAdmin::with("AdminRegion")->select();
            $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
            $AdminList=Common::treeData($AdminList,$admin["pid"]);//转换成树状数组

            $RegionList=json_decode(json_encode(Region::where("enable","1")->select(),true),true);
            $RegionList=Common::treeData($RegionList);
        }
        else
        {
            $map[]=['exp',"FIND_IN_SET($id,cid)"];
            $AdminList=ModelAdmin::with("AdminRegion")->where("id",$id)->whereor($map)->select();
            $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
            $AdminList=$this->treeData($AdminList,$admin["pid"]);//转换成树状数组
            $AdminRegionId=$admin["RegionId"];
            $RegionId[]=['exp',"FIND_IN_SET($AdminRegionId,cid)"];
            $RegionList=json_decode(json_encode(Region::where($RegionId)->whereOr("id",$AdminRegionId)->where("enable","1")->select(),true),true);
            $RegionPid=Region::where("id",$AdminRegionId)->field("pid")->find();
            $RegionList=$this->treeData($RegionList,$RegionPid->pid);
        }


        $this->assign("RegionList",$RegionList);
        $this->assign("AdminList",$AdminList);
        return $this->fetch();
    }

    /*
     * 编辑管理员
     *
     * */
    public function edit()
    {
        $AdminId=input("num");
        $admin=Session::get('admin');
        $id=$admin["id"];
        if($AdminId===$id || $AdminId=="1")//判断是否是超级管理员或者是自己，如果是，返回您没有修改的权利
        {
            exit("error");
        }
        else
        {
            if($id===1)//判断是否是超级管理员
            {
                /*
                 * 查询出所有的管理员显示在下拉框中
                 * */
                $AdminList=ModelAdmin::field("id,pid,AdminName")->select();//是超级管理员的话查询所有的管理员，选择三个字段查询
                $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
                $AdminList=$this->treeData($AdminList,$admin["pid"]);//转换成树状数组

                /*
                 * 判断是否是顶级负责人，如果是顶级负责人，则查询所有的顶级区域
                 * 如果不是顶级负责人，则查询该管理员的负责人的社区id，在查询负责人的社区id下所有自己社区
                 * */
                $NowEditAdmin=json_decode(json_encode(ModelAdmin::where("id",$AdminId)->find(),true),true);//查询当前修改人的信息
                if(strpos($NowEditAdmin['cid'],','))
                {
                    $cid=explode(",",$NowEditAdmin['cid']);
                    $value['cid']=$cid[0];
                }
                if($NowEditAdmin["pid"]=="0")//判断是否是顶级负责人
                {
                    $RegionList=json_decode(json_encode(Region::where("pid","0")->where("enable","1")->select(),true),true);//如果是顶级负责人，则查询所有顶级区域
                    $RegionList=$this->treeData($RegionList,"0");
                }
                else//如果不是顶级负责人，查询当前修改人的上一级负责人的社区id，查询所有pid为上一级负责人的社区id的所有社区
                {
                    $RegionId=json_decode(json_encode(ModelAdmin::where("id",$NowEditAdmin["pid"])->field("RegionId")->find(),true),true)["RegionId"];
                    $RegionList=json_decode(json_encode(Region::where("enable","1")->where("pid",$RegionId)->select(),true),true);
                    $RegionList=$this->treeData($RegionList,$RegionId);
                }

            }
            else//如果不是超级管理员，执行以下程序
            {
                $AlChildId[]=['exp',"FIND_IN_SET($id,cid)"];//先查询其所有可以编辑的子管理员的id
                $ALLAdmin=ModelAdmin::where($AlChildId)->field("id")->select();
                $ALLAdmin=json_decode(json_encode($ALLAdmin,true),true);
                $Array=array();
                foreach ($ALLAdmin as $key=>$value)//将查询出来的所有管理员的id合并在一起
                {
                    $Array[$key]=$value["id"];
                }

                if(in_array($AdminId,$Array))//判断传入过来的管理员id是否在该登录管理员的权限范围
                {

                    $map[]=['exp',"FIND_IN_SET($id,cid)"];//如果在该管理员的权限范围内，则查询所有子管理员和自己，显示在下拉框中
                    $AdminList=ModelAdmin::where("id",$id)->whereor($map)->field("id,pid,AdminName")->select();
                    $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
                    $AdminList=$this->treeData($AdminList,$admin["pid"]);//转换成树状数组
                    //在根据传入的管理员id查询其信息，取出pid，查询父级负责人的摄入id，再查询父级负责人的社区id下所有pid为这个id的自己社区


                    $NowEditAdmin=json_decode(json_encode(ModelAdmin::where("id",$AdminId)->find(),true),true);//查询当前修改人的信息
                    if(strpos($NowEditAdmin['cid'],','))
                    {
                        $cid=explode(",",$NowEditAdmin['cid']);
                        $value['cid']=$cid[0];
                    }
                    $fatherAdminRegionId=json_decode(json_encode(ModelAdmin::where("id",$NowEditAdmin["pid"])->field("RegionId")->find(),true),true)["RegionId"];

                    $RegionList=json_decode(json_encode(Region::where("pid",$fatherAdminRegionId)->where("enable","1")->select(),true),true);

                    $RegionList=$this->treeData($RegionList,$fatherAdminRegionId);
                }
                else
                {
                    exit("error");
                }

            }
        }

        return $this->fetch("edit",["RegionList"=>$RegionList,"AdminList"=>$AdminList,"NowAdmin"=>$NowEditAdmin]);
    }


    /**
     *添加管理员的时候查询区域
     *
     * */
    public function AddAdminSelect()
    {
        $AdminId=input("num");//接收收到的负责人管理员的管理员id
        $admin=Session::get('admin');
        $Adminid=$admin["id"];
        if($AdminId==0 && $Adminid=="1")//当前登录人如果是超级管理员的话，并且传入的管理员id为0时查询所有的区域
        {
            $RegionList=json_decode(json_encode(Region::select(),true),true);
            $RegionList=$this->treeData($RegionList);
        }
        else
        {
            $RegionId=ModelAdmin::where("id",$AdminId)->field("RegionId")->find();//当前登录人不是超级管理员的话先查询传入的负责人管理员的所属区域
            $AdminRegionId=$RegionId["RegionId"];
            $Region[]=['exp',"FIND_IN_SET($AdminRegionId,cid)"];//根据查询出的负责人管理员区域id查询其所属的所有的字区域
            $RegionList=json_decode(json_encode(Region::where($Region)->select(),true),true);
//            $pid=Region::where("id",$AdminRegionId)->field("pid")->find();
            $RegionList=$this->treeData($RegionList,$AdminRegionId);
        }

        return $this->fetch("AddAdminSelect",["AdminSelect"=>$RegionList]);
    }


    /**
     * 管理员添加
     *2017/11/30
     * */
    public function Add()
    {
        $information=$_POST;
        //判断该账号是否是在上架表里面存在了
        $ISSBusiness=json_decode(json_encode(Business::where("Account",$information["AdminAccount"])->find(),true),true);
        if($ISSBusiness)
        {
            exit("该账号已经存在！");
        }
        $admin=Session::get('admin');
        $AdminName=$admin["AdminName"];
//        dump($information);exit;
        $PhoneNumReg = '/^1[3|4|5|7|8][0-9]\d{8}$/';
        if(preg_match($PhoneNumReg, $information["AdminPhoneNum"])=='1')
        {
            $AccountRet = '/^[A-Za-z0-9]{4,18}$/';
            if(preg_match($AccountRet, $information["AdminAccount"])=='1')
            {
                $PwdRet = '/^[A-Z]{2}[A-Za-z0-9]{4,16}$/';
                if(preg_match($PwdRet, $information["password_2"])=='1')
                {
                    $ageRet = '/^[0-9]{1,2}$/';
                    if($information["AdminAge"]==="" || preg_match($ageRet, $information["AdminAge"])=='1')
                    {
                        if($information["password_2"]===$information["password_1"])
                        {
                            $IssExist=json_decode(json_encode(ModelAdmin::where("account",$information["AdminAccount"])->find(),true));
//                            echo($IssExist);exit;
                            if($IssExist)
                            {
                                $value="该账号已经存在！";
                            }
                            elseif($IssExist=="" || $IssExist==NULL)
                            {
                                $password=MD5($information["password_2"]);
//                                dump($information);exit;
                                $Admin = ModelAdmin::create([
                                    'AdminName'  =>  $information["AdminName"],
                                    'account' =>  $information["AdminAccount"],
                                    'PhoneNumber'=>$information["AdminPhoneNum"],
                                    'age'=>$information["AdminAge"],
                                    'sex'=>$information["AdminSex"],
                                    'password'=>$password,
                                    'pid'=>$information["AddLiabilityPeoplePid"],
                                    'cid'=>$information["AddLiabilityPeopleCid"],
                                    'RegionId'=>$information["AdminRegion"],
                                    'RegisterTime'=>time(),
                                    'RegisterAdmin'=>$AdminName
                                ]);
                                if($Admin)
                                {
                                    $value="success";//
                                }
                                else
                                {
                                    $value="error";
                                }
                            }

                        }
                        else
                        {
                            $value="前后密码不一致！";
                        }
                    }
                    else
                    {
                        $value="请输入正确的年龄！";
                    }
                }
                else
                {
                    $value="密码格式不正确！";
                }
            }
            else
            {
                $value="账号格式有误！";
            }
        }
        else
        {
            $value="手机号格式有误！";
        }
        exit($value);
    }

    /**
     * 查询当前选择区域的所有管理员（左边的树状菜单）
     * @return mixed|string
     */
    public function AdminRegionChoice()
    {
        $RegionId=input("num");
        $admin=Session::get('admin');
        $id=$admin["id"];
        if($id=="1")//首先判断是否是超级管理员
        {
            if ($RegionId=="0")
            {
                $AdminList=ModelAdmin::with("AdminRegion")->select();
//                $AdminList=ModelAdmin::select();
                $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
                $AdminList=$this->treeData($AdminList);//转换成树状数组
                return $this->fetch("AdminRegionChoice",["AdminList"=>$AdminList]);
            }
            else
            {
                //当为超级管理员的时候，查询当前区域是否有多个负责人
                $AllId=json_decode(json_encode(ModelAdmin::where("RegionId",$RegionId)->field("id,pid")->select(),true),true);
//                dump($AllId);exit;
                if(count($AllId)=="0")//如果当前区域没有负责人，返回。
                {
                    return $this->fetch("AdminRegionChoice",array());
                }

                else//如果查询出当前区域有一个或更多的管理员
                {
                    foreach ($AllId as $key=>$value)//循环查询当前区域的管理员以及其下属所有管理员。
                    {
                        $AdminId=$value["id"];
                        $AdminPid=$value["pid"];
                        $map[]=['exp',"FIND_IN_SET($AdminId,cid)"];
                        $List=ModelAdmin::with("AdminRegion")->where("id",$AdminId)->whereor($map)->select();
                        $AList[]=json_decode(json_encode($List,true),true);//根据登录人员的区域Id查询出来的用户列表
                    }
                    $array=array();//将查询出来的管理员全部合并成一个数组
                    for($i=0;$i<count($AList);$i++)
                    {
                        $array=$cards = array_merge($array, $AList[$i]);
                    }
                    $AdminList=$this->treeData($array,$AdminPid);//转换成树状数组
                    return $this->fetch("AdminRegionChoice",["AdminList"=>$AdminList]);//返回结果
                }
            }


        }
        else//当不是超级管理员的时候执行以下程序
        {

            if($RegionId=="0")
            {
                $map[]=['exp',"FIND_IN_SET($id,cid)"];//如果是当前登录人的社区ID，查询登录人以及登录人所管理的所有管理员
                $AdminList=ModelAdmin::with("AdminRegion")->where("id",$id)->whereor($map)->select();
                $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
                $AdminList=$this->treeData($AdminList,$admin["pid"]);//转换成树状数组
                return $this->fetch("AdminRegionChoice",["AdminList"=>$AdminList]);
            }
            else
            {
                $map[]=['exp',"FIND_IN_SET($id,cid)"];
                $ALLAdminId=ModelAdmin::where("id",$id)->whereor($map)->field("RegionId")->select();
                $array=array();
                foreach ($ALLAdminId as $key=>$value)
                {
                    $array[$key]=$value["RegionId"];
                }
//                dump($array);exit;
                if(in_array($RegionId,$array))
                {
                    if($RegionId==$admin["RegionId"])//判断传到后台的社区ID是否是当前登录人的社区ID
                    {
                        $map[]=['exp',"FIND_IN_SET($id,cid)"];//如果是当前登录人的社区ID，查询登录人以及登录人所管理的所有管理员
                        $AdminList=ModelAdmin::with("AdminRegion")->where("id",$id)->whereor($map)->select();
                        $AdminList=json_decode(json_encode($AdminList,true),true);//根据登录人员的区域Id查询出来的用户列表
                        $AdminList=$this->treeData($AdminList,$admin["pid"]);//转换成树状数组
                        return $this->fetch("AdminRegionChoice",["AdminList"=>$AdminList]);
                    }
                    else
                    {//如果不是当前登录人的社区ID，查询出满足传入的社区ID所有管理员
                        $allId=json_decode(json_encode(ModelAdmin::where("RegionId",$RegionId)->field("id,pid")->select(),true),true);
//                        dump($RegionId);
//                        dump($allId);exit;
                        if(count($allId)=="0")//如果没有，返回
                        {
                            return $this->fetch("AdminRegionChoice",array());
                        }
                        else
                        {
//                            dump($allId);exit;
                            foreach ($allId as $k=>$val)//如果有，查询，合并，转树状数组，返回
                            {
//                                echo($AList);
                                $AId=$val["id"];
                                $APid=$val["pid"];
                                $map1[]=['exp',"FIND_IN_SET($AId,cid)"];
                                $List=ModelAdmin::with("AdminRegion")->where("id",$AId)->whereOr($map1)->select();
                                $AList[]=json_decode(json_encode($List,true),true);//根据登录人员的区域Id查询出来的用户列表
                            }
                            $array=array();
                            for($i=0;$i<count($AList);$i++)
                            {
                                $array=$cards = array_merge($array, $AList[$i]);
                            }
                            $AdminList=$this->treeData($array,$APid);//转换成树状数组

                            return $this->fetch("AdminRegionChoice",["AdminList"=>$AdminList]);
                        }
                    }
                }
                else
                {
                    return $this->fetch("AdminRegionChoice",["AdminList"=>""]);
                }
            }
        }

    }

    /*
     * 保存编辑
     * */
    public function SaveEdit()
    {
        $EditInformation=input();
        $PhoneNumReg = '/^1[3|4|5|7|8][0-9]\d{8}$/';
        if(preg_match($PhoneNumReg, $EditInformation["AdminPhoneNum"])=='1')
        {
            $ageRet = '/^[0-9]{1,2}$/';
            if($EditInformation["AdminAge"]==="" || preg_match($ageRet, $EditInformation["AdminAge"])=='1')
            {
                $result=ModelAdmin::where('id', $EditInformation["num"])
                    ->update([
                    'AdminName'  =>  $EditInformation["AdminName"],
                    'PhoneNumber'=>$EditInformation["AdminPhoneNum"],
                    'age'=>$EditInformation["AdminAge"],
                    'sex'=>$EditInformation["AdminSex"],
                    'pid'=>$EditInformation["AddLiabilityPeoplePid"],
                    'cid'=>$EditInformation["AddLiabilityPeopleCid"],
                    'RegionId'=>$EditInformation["AdminRegion"]
                ]);
                if($result)
                {
                    $value="success";//
                }
                else
                {
                    $value="error";
                }
            }
            else
            {
                $value="请输入正确的年龄！";
            }
        }
        else
        {
            $value="手机号格式有误！";
        }
        exit($value);
    }


    /**
     *管理员的权限设定
     *
     */
    public function SetPower()
    {
        $AdminId=input("num");
        $admin=Session::get('admin');//首先查询一下当前登录人的信息
        $id=$admin["id"];
        if($AdminId=="1" || $AdminId==$id )//判断当传入的id为当前登录人或者是超级管理员的话就返回没有权限的信息
        {
            exit("error");
        }
        else
        {
            if($id=="1")//判断当前登录人是否是超级管理员，如果是超级管理员的话则对他没有人员限制要求
            {
                $Set=json_decode(json_encode(ModelAdmin::where("id",$AdminId)->field("pid,AdminRule")->find(),true),true);
                $RuleId=explode(",",$Set["AdminRule"]);
                if($Set["pid"]=="0")
                {
                    //如果pid为0，说明是顶级管理员，故查询所有的菜单
                    $MenuList=json_decode(json_encode(Managemenu::field("id,MenuName,pid")->select(),true),true);
                    foreach ($MenuList as $k=>$v)
                    {
                        if(in_array($v["id"],$RuleId))
                        {
                            $MenuList[$k]["key"]="1";
                        }
                        else
                        {
                            $MenuList[$k]["key"]="0";
                        }
                    }
                    $MenuList=$this->treeData($MenuList);
                }
                else
                {
                    //先查询当前传入的人的父级的所有权限id
                    $MenuId=json_decode(json_encode(ModelAdmin::where("id",$Set["pid"])->field("AdminRule")->find(),true),true);
                    //查询当前登录人的权限菜单id
                    $MenuList=json_decode(json_encode(Managemenu::where("id","in",$MenuId["AdminRule"])->field("id,MenuName,pid")->select(),true),true);
                    //判断传入人的权限id有哪些
                    foreach ($MenuList as $k=>$v)
                    {
                        if(in_array($v["id"],$RuleId))
                        {
                            $MenuList[$k]["key"]="1";
                        }
                        else
                        {
                            $MenuList[$k]["key"]="0";
                        }
                    }
                    $MenuList=$this->treeData($MenuList);
                }
            }
            else
            {
                $map[]=['exp',"FIND_IN_SET($id,cid)"];//如果不是超级管理员的话先查询当前登录人能设置权限的人员有哪些
                $ALLAdminId=ModelAdmin::where("id",$id)->whereor($map)->field("id")->select();
                $array=array();
                foreach ($ALLAdminId as $key=>$value)
                {
                    $array[$key]=$value["id"];
                }
                if(in_array($AdminId,$array))
                {
                    $Set=json_decode(json_encode(ModelAdmin::where("id",$AdminId)->field("pid,AdminRule")->find(),true),true);
                    $RuleId=explode(",",$Set["AdminRule"]);
                    if($Set["pid"]=="0")
                    {
                        //如果pid为0，说明是顶级管理员，故查询所有的菜单
                        $MenuList=json_decode(json_encode(Managemenu::field("id,MenuName,pid")->select(),true),true);
                        foreach ($MenuList as $k=>$v)
                        {
                            if(in_array($v["id"],$RuleId))
                            {
                                $MenuList[$k]["key"]="1";
                            }
                            else
                            {
                                $MenuList[$k]["key"]="0";
                            }
                        }
                        $MenuList=$this->treeData($MenuList);
                    }
                    else
                    {
                        //先查询当前登录人的所有权限id
                        $MenuId=json_decode(json_encode(ModelAdmin::where("id",$Set["pid"])->field("AdminRule")->find(),true),true);
                        //查询当前登录人的权限菜单id
                        $MenuList=json_decode(json_encode(Managemenu::where("id","in",$MenuId["AdminRule"])->field("id,MenuName,pid")->select(),true),true);
                        //判断传入人的权限id有哪些
                        foreach ($MenuList as $k=>$v)
                        {
                            if(in_array($v["id"],$RuleId))
                            {
                                $MenuList[$k]["key"]="1";
                            }
                            else
                            {
                                $MenuList[$k]["key"]="0";
                            }
                        }
                        $MenuList=$this->treeData($MenuList);
                    }
                }
                else
                {
                    exit("error");
                }
            }

        }
//        dump($MenuList);exit;
        return $this->fetch("SetPower",["List"=>$MenuList,"id"=>$AdminId]);

    }

    /*
     * 保存权限设定的值
     * 数据防呆
     * */
    public function SavePower()
    {
        $information=input();
        //先查询当前修改人的父级
        $Set=json_decode(json_encode(ModelAdmin::where("id",$information["num"])->field("pid")->find(),true),true);
        if($Set["pid"]=="0")
        {
            $result=ModelAdmin::where('id', $information["num"])
                ->update([
                    'AdminRule'  =>  $information["text"]
                ]);
            if($result=="1")
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

            $father=json_decode(json_encode(ModelAdmin::where("id",$Set["pid"])->field("AdminRule")->find(),true),true);
            $father=explode(",",$father["AdminRule"]);
            $num=$information["text"];
            $num=explode(",",$num);

            foreach ($num as $k=>$v)
            {
                if(!in_array($v,$father))
                {
                    exit("对不起，保存失败，请勿随意修改！");
                }
            }

            $result=ModelAdmin::where('id', $information["num"])
                ->update([
                    'AdminRule'  =>  $information["text"]
                ]);
            if($result=="1")
            {
                exit("success");
            }
            else
            {
                exit("error");
            }

        }
    }


    /*
     * 管理员密码重置
     * */
    public function ResPwd()
    {
        $num=input("num");
        $admin=ModelAdmin::where("id",$num)->field("PhoneNumber")->find();
        $lastnum=substr($admin->PhoneNumber,-6);
        $password="DHf".$lastnum;
        $password=MD5($password);
        $result=ModelAdmin::where('id', $num)
        ->update([
            'password'  => $password
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
    /*
     * 关键字搜索查询
     * */
    public function KeywordSearch()
    {
        $key=input("key");
        $admin=Session::get('admin');//首先查询一下当前登录人的信息
        $id=$admin["id"];
        if($id=="1")
        {
            $list=ModelAdmin::with("AdminRegion")->where('AdminName|PhoneNumber','like',"%".$key."%")->select();
            $list=json_decode(json_encode($list,true),true);
        }
        else
        {
            $map[]=['exp',"FIND_IN_SET($id,cid)"];
            $list=ModelAdmin::with("AdminRegion")->where('AdminName|PhoneNumber','like',"%".$key."%")->where(function ($query)use($map,$id){
                $query->where($map)->whereOr("id",$id);
            })->select();
            $list=json_decode(json_encode($list,true),true);
        }
        return $this->fetch("KeywordSearch",["list"=>$list]);
    }
}
