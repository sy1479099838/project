<?php
namespace app\manage\model;
use think\Model;

class Goods extends Model
{
    public function comments()
    {
        return $this->hasMany('GoodsPackage',"GoodsID","id");
    }
}
