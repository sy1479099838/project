<?php
namespace app\manage\model;
use think\Model;
use app\manage\model\Goods;
class Hotclass extends Model
{
    public function goodslist()
    {
        return $this->hasMany('goods')->field('id,author,content');
    }
}
