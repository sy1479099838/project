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

function goback() {
    window.history.back(-1);
}

$(document).on('scroll', function () {
    var wScrollY = window.scrollY; // 当前滚动条位置
    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
    var bScrollH = document.body.scrollHeight; // 滚动条总高度
    if (wScrollY + wInnerH >= bScrollH) {
        // $loadMore.click();  //加载数据
        // alert(123456789);
        // x=$("p").offset();//获取当前盒子的位移 x.top
    }
});


$(function () {
    $(".Goods_info_content1").click(function(){
        var t = $(window).scrollTop();
        $('body,html').animate({'scrollTop':t+400},2000);
    });
});


