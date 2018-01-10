<?php
namespace app\manage\controller\weixin;
use think\Controller;
use think\Session;
class Pay extends Controller
{
    public function goodspay()
    {
        $openId=Session::get("UserInformation");
        $openId=$openId["UserAccount"];
        $value=$this->pay($openId);
        exit($value);
    }
    public function pay($openId)
    {
        $shangHuId="1483747952";
        $outTradeNo=$shangHuId.date("YmdHis");//创建订单表的时候注意要有这样一个生成唯一订单号的字段，并且不能太短，不然会报错的
        //商品名称
//        $openId="oNqUrwRmDJslHtb9wlOmcJQUekLc";
        $goodsName="九皇山";
        $totalPrice=0.01;
        $wxpayDate='pay/wxpay/lib/WxPay.Data.php';//引入
        include($wxpayDate);
        $input = new \WxPayUnifiedOrder();
        $input->SetAttach($goodsName);
        $input->SetBody($goodsName);
        $input->SetOut_trade_no($outTradeNo);//订单号
        $totalPrice=($totalPrice*100);
        $input->SetTotal_fee($totalPrice);//总额 int  单位 分
        // $input->SetTime_start(date("YmdHis"));
        // $input->SetTime_expire(date("YmdHis", time() + 600));//失效时间
        // $input->SetGoods_tag("test");
        $input->SetNotify_url("http://www.hfyiqiwan.top/manage/weixin/Pay/notify");
        $input->SetTrade_type("JSAPI");
//        $input->SetProduct_id($orderId);//商品id
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
                db('order')->where(array('out_trade_no'=>$outTradeTo))->update(['pay_status'=>1]);
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