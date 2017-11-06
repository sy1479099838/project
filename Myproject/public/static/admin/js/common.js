$.extend({showBox:function (msg) {
    $(".prompt_Box").empty();//
    $(".prompt_Box").append(msg).fadeIn(200);
    $('.prompt_Box').delay(700).fadeOut(200);
}});
