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
/*---------点击显示图片详情--------*/
// function referurl() {
//     var ref = $("#hd_referrer").val();
//     if (ref !== "" && ref !== "undefined") {
//         window.location.href  = ref;
//     }
//     else {
//         window.location.href  = history.back(-1);
//     }
// }

// function SeeImg(date) {
//     var display=$("#SeeImg").css("top");
//     var wid=-$(window).width();
//     if(display!=="0px")
//     {
//         $("#SeeImg").css("top","0");
//         var WinHeight=$(window).height();
//         var hei=$(".swiper-container").height();
//         $("#SeeImg>.SeeImgBox").css("top",(WinHeight-hei)/2+"px");
//         $(".swiper-container").css("line-height",hei+"px");
//         $(".swiper-container").css("margin-top",(WinHeight-hei)/2+"px");
//         $(".swiper-wrapper").css("transform","translate3d("+date*wid+"px, 0px, 0px)");
//     }
//     else
//     {
//         $("#SeeImg").fadeIn(200);
//         $(".swiper-wrapper").css("transform","translate3d("+date*wid+"px, 0px, 0px)");
//     }
// }

function GoodsDetails(data) {
    $.ajax({
        type: "POST",
        url: "GoodsDetails",
        data: ({num:data
        }),
        success: function(msg){
            $(".Goods-Details-BigBox").html(msg);
            var mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop:true,
                grabCursor: true,
                paginationClickable: true
            });
        },
        error:function (err){
            $.showBox("账号验证失败！");
        }
    });
}


function goodsEvaluate (data) {
    $.ajax({
        type: "POST",
        url: "evaluate",
        data: ({num:data
        }),
        success: function(msg){
            $(".Goods-Details-BigBox").html(msg);
        },
        error:function (err){
            $.showBox("账号验证失败！");
        }
    });
}
function goodsParameter(data) {
    $.ajax({
        type: "POST",
        url: "parameter",
        data: ({num:data
        }),
        success: function(msg){
            $(".Goods-Details-BigBox").html(msg);
        },
        error:function (err){
            $.showBox("账号验证失败！");
        }
    });
}

