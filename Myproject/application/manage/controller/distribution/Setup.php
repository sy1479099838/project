<?php
namespace app\manage\controller\distribution;
use app\manage\controller\Common;
class Setup extends Common
{
    public function index()
    {
        return $this->fetch();
    }

    public function SaveInfo()
    {
        $info=input("data");
        $info=json_decode($info,true);
        $val=array();
        foreach ($info as $value)
        {
            $value=json_decode(Common::fisker_decode_v2($value),true);
            $arr=array();
            foreach ($value as $val1)
            {
                $arr[$val1["name"]]=$val1["value"];
            }
            $val[]=$arr;
        }
        foreach ($val as $value1)
        {
            if(!preg_match('/[1-9]\d*/', $value1["DayNum"]))
            {
                exit("请填写正确的天数！");
            }
            if($value1["IsPay"]==1 || $value1["IsPay"]==0)
            {
                if($value1["IsPay"]==1)
                {
                    $str = $value1["Price"];
                    $isMatched = preg_match('/^(?:[1-9][0-9]*(?:\.[0-9]+)?|0\.(?!0+$)[0-9]+)$/', $str);
                    if($isMatched==0)
                    {
                        exit("请输入正确的价格！");
                    }
                }
            }
        }
    }
}