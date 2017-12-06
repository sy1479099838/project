<?php
namespace app\manage\model;
use think\Model;
use app\manage\model\Region;
class Admin extends Model
{
    public function AdminRegion()
    {
        return $this->hasMany('Region',"id","RegionId")->field('id,regionName');
    }
}
