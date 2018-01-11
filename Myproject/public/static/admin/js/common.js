$.extend({showBox:function (msg) {
    $(".prompt_Box").empty();//
    $(".prompt_Box").append(msg).fadeIn(200);
    $('.prompt_Box').delay(700).fadeOut(200);
}});

/*
 * 支付
 * */
function jsApiCall(data)
{
    var val = JSON.parse(data);
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest',
        val,
        function(res){
            WeixinJSBridge.log(res.err_msg);
            if(res.err_msg == "get_brand_wcpay_request:ok"){
                $.showBox("支付成功！");
                self.location='/admin/personal/Personal/orderform.html';
            }else{
                $.showBox("支付失败！");
                window.history.go(-1);

            }
        }
    );
}

function Goodspay(data)
{
    if (typeof WeixinJSBridge == "undefined"){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', jsApiCall);
            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
        }
    }else{
        jsApiCall(data);
    }
}