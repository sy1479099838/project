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
            if($value1["IsPay"]==1 || $value1["IsPay"]==0)
            {
                if($value1["IsPay"]==1)
                {
                    $str = $value1["Price"];
                    $isMatched = preg_match('/^(?:[1-9][0-9]*(?:\.[0-9]+)?|0\.(?!0+$)[0-9]+)$/', $str, $matches);
                    var_dump($isMatched, $matches);
                }
            }
        }


        dump($val);
    }
}