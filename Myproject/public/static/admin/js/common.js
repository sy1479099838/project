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
            alert(res.err_code+res.err_desc+res.err_msg);
        }
    );
}

function callpay(data)
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