/**
 * Created by Administrator on 2018/1/10 0010.
 */
function PayGoods(data) {
    var obj = JSON.parse(data);
    callpay(obj.jsApiParameters);
}