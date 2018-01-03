$(function () {
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    });

});


$(document).ready(function(){
    $(".A-1").css("background","#d2d2d2");
    $(".A-2").css("background","none");
    $(".A-3").css("background","none");
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
    // var mySwiper = new Swiper('.swiper-container',{
    //     pagination: '.pagination',
    //     loop:true,
    //     grabCursor: true,
    //     paginationClickable: true
    // });
    $(".A-1").css("background","#d2d2d2");
    $(".A-2").css("background","none");
    $(".A-3").css("background","none");
    $('body,html').animate({'scrollTop':0},500);
}
function goodsEvaluate (data) {
    $(".A-2").css("background","#d2d2d2");
    $(".A-1").css("background","none");
    $(".A-3").css("background","none");
    var pinglun=$("input:hidden[name=ThisGoodsHidden]").val();
    if(pinglun!="0")
    {
        var x=$(".Goods-Evaluate-BigBox").offset();//获取当前盒子的位移 x.top
        var t = $(window).height();
        var top=x.top;
        $('body,html').animate({'scrollTop':top-(t-60)},500);
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "/admin/goods/Details/evaluate",
            data: ({
                num:data
            }),
            success: function(msg){
                if(msg!="error")
                {
                    $(".Goods-Evaluate-BigBox").html(msg);
                    $("input:hidden[name=ThisGoodsHidden]").val("1");
                    var x=$(".Goods-Evaluate-BigBox").offset();//获取当前盒子的位移 x.top
                    var t = $(window).height();
                    var top=x.top;
                    $('body,html').animate({'scrollTop':top-(t-60)},500);
                }
            },
            error:function (err){
                $.showBox("账号验证失败！");
            }
        });
    }

}
function goodsParameter(data) {
    $(".A-3").css("background","#d2d2d2");
    $(".A-1").css("background","none");
    $(".A-2").css("background","none");
    var pinglun=$("input:hidden[name=ThisGoodsHidden]").val();
    if(pinglun=="0")
    {
        $.ajax({
            type: "POST",
            url: "/admin/goods/Details/evaluate",
            data: ({
                num:data
            }),
            success: function(msg){
                if(msg!="error")
                {
                    $(".Goods-Evaluate-BigBox").html(msg);
                    $("input:hidden[name=ThisGoodsHidden]").val("1");
                    $.ajax({
                        type: "POST",
                        url: "/admin/goods/Details/parameter",
                        data: ({
                            num:data
                        }),
                        success: function(msg){
                            if(msg!="error")
                            {
                                $(".Goods-xiangqing-BigBox").html(msg);
                                $("input:hidden[name=ThisGoodsHidden]").val("2");
                                var x=$(".Goods-xiangqing-BigBox").offset();//获取当前盒子的位移 x.top
                                var t = $(window).height();
                                var top=x.top;
                                $('body,html').animate({'scrollTop':top-(t-60)},500);
                            }

                        },
                        error:function (err){
                            $.showBox("账号验证失败！");
                        }
                    });
                }

            },
            error:function (err){
                $.showBox("账号验证失败！");
            }
        });
    }
    else if(pinglun=="1")
    {
        $.ajax({
            type: "POST",
            url: "/admin/goods/Details/parameter",
            data: ({
                num:data
            }),
            success: function(msg){
                if(msg!="error")
                {
                    $(".Goods-xiangqing-BigBox").html(msg);
                    $("input:hidden[name=ThisGoodsHidden]").val("2");
                    var x=$(".Goods-xiangqing-BigBox").offset();//获取当前盒子的位移 x.top
                    var t = $(window).height();
                    var top=x.top;
                    $('body,html').animate({'scrollTop':top-(t-60)},500);
                }

            },
            error:function (err){
                $.showBox("账号验证失败！");
            }
        });
    }
    else
    {
        var x=$(".Goods-xiangqing-BigBox").offset();//获取当前盒子的位移 x.top
        var t = $(window).height();
        var top=x.top;
        $('body,html').animate({'scrollTop':top-(t-60)},500);
    }
}

function goback() {
    window.history.back(-1);
}

$(document).on('scroll', function () {
    var wScrollY = window.scrollY; // 当前滚动条位置
    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
    var bScrollH = document.body.scrollHeight; // 滚动条总高度
    if (wScrollY + wInnerH >= bScrollH) {
        var pinglun=$("input:hidden[name=ThisGoodsHidden]").val();
        var data=$("input:hidden[name=ThisGoodsId]").val();
        if(pinglun==0)
        {
            $(".A-2").css("background","#d2d2d2");
            $(".A-1").css("background","none");
            $(".A-3").css("background","none");
            $.ajax({
                type: "POST",
                url: "/admin/goods/Details/evaluate",
                data: ({
                    num:data
                }),
                success: function(msg){
                    $(".Goods-Evaluate-BigBox").html(msg);
                    $("input:hidden[name=ThisGoodsHidden]").val("1");

                },
                error:function (err){
                    $.showBox("账号验证失败！");
                }
            });
            return 0;
        }
        else if(pinglun==1)
        {
            $(".A-3").css("background","#d2d2d2");
            $(".A-1").css("background","none");
            $(".A-2").css("background","none");
            $.ajax({
                type: "POST",
                url: "/admin/goods/Details/parameter",
                data: ({
                    num:data
                }),
                success: function(msg){
                    if(msg!="error")
                    {
                        $(".Goods-xiangqing-BigBox").html(msg);
                        $("input:hidden[name=ThisGoodsHidden]").val("2");

                    }

                },
                error:function (err){
                    $.showBox("账号验证失败！");
                }
            });
        }
        // x=$("p").offset();//获取当前盒子的位移 x.top
    }

    var a=$(".Goods-Evaluate-BigBox").offset().top;//获取当前盒子的位移 x.top
    var b=$(".Goods-xiangqing-BigBox").offset().top;//获取当前盒子的位移 x.top
    var c=wScrollY + wInnerH;
    if(c>=(a+55) && c<b)
    {
        $(".A-2").css("background","#d2d2d2");
        $(".A-1").css("background","none");
        $(".A-3").css("background","none");
    }
    else if(c>=(b+55))
    {
        $(".A-3").css("background","#d2d2d2");
        $(".A-1").css("background","none");
        $(".A-2").css("background","none");
    }
    else if(c<b)
    {
        $(".A-1").css("background","#d2d2d2");
        $(".A-2").css("background","none");
        $(".A-3").css("background","none");
    }

});


$(function () {
    $(".Goods_info_content1").click(function(){
        var t = $(window).scrollTop();
        $('body,html').animate({'scrollTop':t+400},2000);
    });
});


