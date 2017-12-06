$(function () {
    var mySwiper = new Swiper('.swiper-container',{
        loop: true,
        autoplay: 3000
    });
});
$(function(){
    $(".menu").mouseover(function(){
        $(this).css("color","#095f8a")
    })
});
$(function(){
    $(".menu").mouseout(function(){
        $(this).css("color","#5e9b1a")
    })
});
$(function () {
    $(".chevron_button_right").click(function () {
        var a=$(".swiper-wrapper a").length-1;
        var b=$(".swiper-wrapper").css("transform");
        var arr=b.split(',');
        var width=arr[4];
        width=parseInt(width);
        var winWidth=-$(window).width();
        if(width<=winWidth)
        {
            if(width===a*winWidth)
            {
                $(".swiper-wrapper").css("transform","matrix(1,0,0,1,"+2*winWidth+",0)");
            }
            else
            {
                var d=width+winWidth;
                $(".swiper-wrapper").css("transform","matrix(1,0,0,1,"+d+",0)");
            }

        }
    });
});
$(function () {
    $(".chevron_button_left").click(function () {
        var a=$(".swiper-wrapper a").length-1;
        var b=$(".swiper-wrapper").css("transform");
        var arr=b.split(',');
        var width=arr[4];
        width=parseInt(width);
        var winWidth=-$(window).width();
        if(width>=a*winWidth)
        {
            if(width===2*winWidth)
            {
                $(".swiper-wrapper").css("transform","matrix(1,0,0,1,"+a*winWidth+",0)");
            }
            else
            {
                var d=width-winWidth;
                $(".swiper-wrapper").css("transform","matrix(1,0,0,1,"+d+",0)");
            }

        }
    });
});

function refreshVerify(abc) {
    alert(abc);
}


function HotShop(abc) {
    alert(abc);
}



window.onresize = function(){

};


$(function(){
    $(document).ready(function(){
        var LIheight=$('.Index_classify').css('width');
        $(".Index_classify").css("height",LIheight);
    });
    $(document).ready(function(){
        var Lheight=$('.Index_styleBox_2 a img').css('width');
        $(".Index_styleBox_2 a img").css("height",Lheight);
    });
});
window.onresize = function(){
    var LIheight=$('.Index_classify').css('width');
    $(".Index_classify").css("height",LIheight);

    var Lheight=$('.Index_styleBox_2 a img').css('width');
    $(".Index_styleBox_2 a img").css("height",Lheight);
};


