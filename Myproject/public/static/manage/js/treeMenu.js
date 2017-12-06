
$(function () {
    $(".list_dt").on("click",function () {
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        $(".list_three").slideUp();
        $(".list_li").removeAttr("id");
        if($(this).attr("id")==="open"){
            $(this).removeAttr("id").siblings("dd").slideUp();
        }else{
            $(this).attr("id","open").next().slideDown().siblings("dd").slideUp();
        }
    });

    $("#OpenTree_1").trigger("click");

    $(".list_li").on("click",function () {
        $('.list_three').stop();
        $(this).siblings("a").removeAttr("id");
        if($(this).attr("id")==="open_1"){
            $(this).removeAttr("id").siblings("span").slideUp();
        }else{
            $(this).attr("id","open_1").next().slideDown().siblings("span").slideUp();
        }
    });
    $("#OpenTree_2").trigger("click");
});
