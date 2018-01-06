/**
 * Created by Administrator on 2018/1/5 0005.
 */
$(function () {
   $(".chakan-newsid").click(function () {
       $(".news-newsId").fadeOut(0);
       $(this).next(".news-newsId").fadeIn(200);
   })
});
function closeNewsId() {
    $(".news-newsId").fadeOut(200);
}
function showContent(data) {
    $.ajax({
        url:"chakanXQ",
        data:({
            id:data
        }),
        type:"post",
        success:function (msg) {
            $.showBox(msg);
        },
        error:function () {
            
        }

    });
    $(".moveContent").html(data);
    $(".changeWidth").fadeIn();
}
function closenews() {
    $(".moveContent").html("");
    $(".changeWidth").fadeOut(0);
}

/*
 * 预览框
 * */
$(document).ready(function(){
    var WinWidth= $(window).width();
    var WinHeight=$(window).height();
    //当鼠标按下左边框,并移动的时候，将盒子边框随着鼠标移动
    $(".moveLeft").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'left' : e.pageX+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    $(".moveRight").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'right' : (WinWidth-e.pageX)+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    $(".moveTop").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'top' : e.pageY+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    $(".moveBottom").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'bottom' : (WinHeight-e.pageY)+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    //当加载完成是自动将盒子居中并显示
    $(".MoveBox").css({'left' : ((WinWidth-326)/2)+'px','right' : ((WinWidth-326)/2)+'px'}).fadeIn(200);
    //当窗口大小改变时，将盒子居中显示
    window.onresize = function(){
        var WinWidth= $(window).width();
        $(".MoveBox").css({'left' : ((WinWidth-326)/2)+'px','right' : ((WinWidth-326)/2)+'px'});showWidth();
    }
});
function changeBox(width,height) {
    var WinWidth= $(window).width();
    var WinHeight=$(window).height();
    $(".MoveBox").css({'left' : ((WinWidth-width)/2)+'px','right' : ((WinWidth-width)/2)+'px','top':((WinHeight-height)/2)+'px','bottom':((WinHeight-height)/2)+'px'});showWidth();
}
function showWidth() {
    $(".showBoxWidth").text("宽度："+$(".MoveBox").width()+"， 高度："+$(".MoveBox").height());
}