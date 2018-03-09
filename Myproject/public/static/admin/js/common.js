$.extend({showBox:function (msg) {
    $(".prompt_Box").empty();//
    $(".prompt_Box").append(msg).fadeIn(200);
    $('.prompt_Box').delay(700).fadeOut(200);
}});

function fisker_encode_v2(s){
    var es = [],c='',ec='';
    s = s.split('');//10.19补 忘记ie不能下标访问字符串
    for(var i=0,length=s.length;i<length;i++){
        c = s[i];
        ec = encodeURIComponent(c);
        if(ec==c){
            ec = c.charCodeAt().toString(16);
            ec = ('00' + ec).slice(-2);
        }
        es.push(ec);
    }
    return es.join('').replace(/%/g,'').toUpperCase();
}

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


// function FadeOutSure() {
//     $(".SureBox").fadeOut(0);
// }
//
// function FadeInSure(text,Hanshu) {
//     $(".SureBox-Content-Text").text(text);
//     $("#SureBox-sure").attr("onclick",Hanshu);
//     $(".SureBox").fadeIn(100);
// }