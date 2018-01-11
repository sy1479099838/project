/**
 * Created by Administrator on 2018/1/10 0010.
 */
function WXpay(taocan,num) {
    $.ajax({
        url:"/admin/shoppingcar/ShoppingCar/calculate",
        type:"post",
        data:({
            taocan:taocan,
            num:num
        }),
        success:function (msg) {
            if(msg!="error")
            {
                var obj = JSON.parse(msg);
                Goodspay(obj.jsApiParameters);
            }
            else
            {
                $.showBox("请正确选择商品！");
            }
        },
        error:function (msg) {
            $.showBox("失败，请重试！");
        }
    });
}