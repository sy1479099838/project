<?php
namespace app\admin\model;
use think\Model;
use app\admin\model\User;
class Friendtalk extends Model
{
    public function profile()
    {
        return $this->hasMany('User',"id","UserId")->field('id,UserName');
    }
}
