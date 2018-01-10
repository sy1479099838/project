<?php
namespace app\manage\controller\weixin;
use think\Controller;
use think\Session;
use app\admin\model\GoodsOrder;
class Pay extends Controller
{
    public function goodspay()
    {
        $goods=input();
        dump($goods);exit;
        $openId=Session::get("UserInformation");
        $openId=$openId["UserAccount"];
        $shangHuId="1483747952";
        $outTradeNo=$shangHuId.date("YmdHis");//创建订单表的时候注意要有这样一个生成唯一订单号的字段，并且不能太短，不然会报错的
        $goodsName="九皇山";
        $totalPrice=0.01;
        $order=GoodsOrder::create([
            "GoodsOrderID"=>$outTradeNo,
            "GoodsId"=>$goods,
            "PackageId"=>"",
            "num"=>"",
            "createTime"=>time(),
            "User"=>$openId,
            "lastUpdateTime"=>time(),
            "state"=>0,
            "ReceiveAddress"=>$goods
        ]);
        if($order)
        {
            $value=$this->pay($openId,$outTradeNo,$goodsName,$totalPrice);
            exit($value);
        }
        else
        {
            exit("error");
        }

    }
    public static function pay($openId,$outTradeNo,$goodsName,$totalPrice)//参数分别为：用户ID、订单号、商品名称、价格
    {
        $wxpayDate='pay/wxpay/lib/WxPay.Data.php';//引入
        include($wxpayDate);
        $input = new \WxPayUnifiedOrder();
        $input->SetAttach($goodsName);
        $input->SetBody($goodsName);
        $input->SetOut_trade_no($outTradeNo);//订单号
        $totalPrice=($totalPrice*100);
        $input->SetTotal_fee($totalPrice);//总额 int  单位 分
        $input->SetNotify_url("http://www.hfyiqiwan.top/manage/weixin/Pay/notify");
        $input->SetTrade_type("JSAPI");
        $input->SetOpenid($openId);
        $wxpayApi='pay/wxpay/lib/WxPay.Api.php';//引入
        include($wxpayApi);
        $result = \WxPayApi::unifiedOrder($input);
        $wxpay_jsapipay='pay/wxpay/example/WxPay.JsApiPay.php';
        include($wxpay_jsapipay);
        $tools= new \JsApiPay;
        $jsApiParameters=$tools->GetJsApiParameters($result);
        $editAddress = $tools->GetEditAddressParameters();
        $value=array(
            "jsApiParameters"=>$jsApiParameters,
            "editAddress"=>$editAddress
        );
        $value=json_encode($value);
        return $value;
    }

    public function notify()
    {
        $data=file_get_contents("php://input");
        $result=xmlToArray($data);
        $outTradeTo = $result['out_trade_no'];
        if($result['return_code'] == 'FAIL'){
            $failResult="
                <xml>
                    <return_code><![CDATA[FAIL]]></return_code>
                    <return_msg><![CDATA[OK]]></return_msg>
                </xml>
            ";
            echo $failResult;
            exit;
        }else{
            if($result['result_code'] == 'FAIL'){

            }else{
                $value=GoodsOrder::where("GoodsOrderID",$outTradeTo)->update([
                    "lastUpdateTime"=>time(),
                    "state"=>2,
                ]);
            }
        }

        $failResult="
                <xml>
                    <return_code><![CDATA[FAIL]]></return_code>
                    <return_msg><![CDATA[OK]]></return_msg>
                </xml>
            ";
        echo $failResult;
        exit;

    }




}