<?php
namespace app\manage\controller\weixin;
use think\Controller;
use think\Session;
use app\admin\model\GoodsOrder;
class Pay extends Controller
{
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
        $input->SetNotify_url("http://www.hfyiqiwan.top/manage/weixin/Linkwx/notify");
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




}