<?php
namespace app\admin\controller\common;
use think\Controller;
use think\Session;
use think\Request;
use app\admin\model\Phonemenu;
class Common extends Controller
{
    public function __construct(Request $request = null)
    {
        parent::__construct($request);
        $user=Session::get('UserInformation');
        if(empty($user))
        {
            $this->redirect('/admin/login/login/index');
        }
    }
    public function GetMenuName($id)
    {
        $Menu=Phonemenu::where("id",$id)->find();
        $Menu=json_decode(json_encode($Menu,true),true);
        return $Menu;
    }
    public function index()
    {

    }

    public static function fisker_decode_v2($s){
        $a = str_split($s,2);
        $s = '%' . implode('%',$a);
        return urldecode($s);
    }
}
