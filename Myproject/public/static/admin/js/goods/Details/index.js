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
    $('body,html').animate({'scrollTop':0},500);
}
function goodsEvaluate (data) {
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

/*商品添加到购物车时候弹出套餐*/

function Add_Tao() {
    //alert(1111);
    $(".Tao_can_list").fadeIn();
}
function Tao_que(){
    $(".Tao_can_list").fadeOut();
}
$(function (){
    var list=document.getElementById('third_2');
    var Obu=list.getElementsByTagName('button');
    var Num=list.getElementsByTagName('input')[0];
    var n1=Number(Num.value);
    console.log(n1);
    Obu[0].onclick=function(){
        //alert(1111);
        n1--;
        if(n1<1){
            n1=1;
        }
        //console.log(n1);
        document.getElementById("ccid").value=n1;
    };
    Obu[1].onclick=function(){
        //alert(111);
        n1++;
        //console.log(n1);
        document.getElementById("ccid").value=n1;
    };

    var lis=document.getElementById('Tao_second_2');
    var Ole=lis.getElementsByTagName('div');
    var num=0;
    var Oldli=null;
    Oldli=Ole[num];
    //console.log(Ole);
    //Ole[num].className='oldclass';
    for(var i=0;i<Ole.length;i++){
        Ole[i].onclick=function(){
            //console.log(Ole[i]);
            Oldli.className="active";
            Oldli=this;
            this.className="l_change";
            console.log(Oldli);
        };
    }
});

function Taoqueren(){
    $(".Tao_queren").fadeIn();
}

function Tao_que_1(){
    $(".Tao_queren").fadeOut();
}


$(function (){
    var list=document.getElementById('queren_third_2');
    var Obu=list.getElementsByTagName('button');
    var Num=list.getElementsByTagName('input')[0];
    var n1=Number(Num.value);
    console.log(n1);
    Obu[0].onclick=function(){
        //alert(1111);
        n1--;
        if(n1<1){
            n1=1;
        }
        //console.log(n1);
        document.getElementById("queren1").value=n1;
    };
    Obu[1].onclick=function(){
        //alert(111);
        n1++;
        //console.log(n1);
        document.getElementById("queren1").value=n1;
    };

    /*var lis=document.getElementById('Tao_queren_3');
    var Ole=lis.getElementsByTagName('div');
    var num=0;
    var Oldli=null;
    Oldli=Ole[num];
    //console.log(Ole);
    //Ole[num].className='oldclass';
    for(var i=0;i<Ole.length;i++){
        Ole[i].onclick=function(){
            //console.log(Ole[i]);
            Oldli.className="active";
            Oldli=this;
            this.className="l_change";
            console.log(Oldli);
        };
    }*/
});

function Change_price(data){
    $.ajax({
        url:"/admin/goods/Details/getPackage",
        type:"post",
        data:({
            id:data
        }),
        success:function (msg) {
            if(msg!="error")
            {
                $(".active").css("background","#00F7DE");
                $(".Package"+data).css("background","orange");
                $("input:hidden[name=pacageId]").val(data);

                var obj = JSON.parse(msg);
                // console.log(obj);
                $("#GoodPrice").html("￥"+obj.price);
            }
            else
            {
                $.showBox("请重新选择");
            }
        },
        error:function (msg) {
            $.showBox("请重新选择");
        }
    });

}
 function Tao_Qu(){
    var packgeId=$("input:hidden[name=pacageId]").val();
    var num=$("#queren1").val();
     self.location='/admin/shoppingcar/Shoppingcar/dingdanqu/taocan/'+packgeId+'/num/'+num+".html";
 }



