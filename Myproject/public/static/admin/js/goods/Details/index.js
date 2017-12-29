$(function () {
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    });
});

$(document).ready(function(){
    var i=parseInt($("input:hidden[name=daojishi]").val());

    var timer = setInterval(function(){
        if(i===0){
            clearInterval(timer);
            $(".Goods_info_Box>.Goods_info_content span:nth-child(4)").html("");
        }else{
            --i;
            var day=parseInt(i/(24*60*60));
            var shi=parseInt((i%(24*60*60))/3600);
            var fen=parseInt(((i%(24*60*60))%3600)/60);
            var miao=parseInt(((i%(24*60*60))%3600)%60);
            $(".Goods_info_Box>.Goods_info_content span:nth-child(4)").html("<i class=\"icon-time\">&nbsp\;</i>"+"剩余:"+day+"天"+shi+":"+fen+":"+miao);
        }
    },1000);
});
/*---------返回上一级--------*/
$(function () {
    $("#hd_referrer").val(document.referrer);
});

function GoodsDetails(data) {
    $(".Goods-xiangqing-BigBox").html("").fadeOut(0);
    $(".Goods-Evaluate-BigBox").html("").fadeOut(0);
    $(".Goods-Details-BigBox").fadeIn(200);
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    });
}
function goodsEvaluate (data) {
    $.ajax({
        type: "POST",
        url: "/admin/goods/Details/evaluate",
        data: ({
            num:data
        }),
        success: function(msg){
            $(".Goods-Details-BigBox").fadeOut(0);
            $(".Goods-xiangqing-BigBox").html("").fadeOut(0);
            $(".Goods-Evaluate-BigBox").html(msg);
            $(".Goods-Evaluate-BigBox").fadeIn(200);
        },
        error:function (err){
            $.showBox("账号验证失败！");
        }
    });
}
function goodsParameter(data) {
    $(".Goods-Details-BigBox").fadeOut(0);
    $.ajax({
        type: "POST",
        url: "/admin/goods/Details/parameter",
        data: ({
            num:data
        }),
        success: function(msg){
            $(".Goods-Details-BigBox").fadeOut(0);
            $(".Goods-Evaluate-BigBox").html("").fadeOut(0);
            $(".Goods-xiangqing-BigBox").html(msg);
            $(".Goods-xiangqing-BigBox").fadeIn(200);
        },
        error:function (err){
            $.showBox("账号验证失败！");
        }
    });
}

