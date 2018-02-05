window.onscroll = function () {
    var wScrollY = window.scrollY; // 当前滚动条位置
    var wInnerH  = window.innerHeight; // 设备窗口的高度（不会变）
    var bScrollH = document.body.scrollHeight; // 滚动条总高度
    if (wScrollY + wInnerH >= bScrollH) {
        //console.log("到底了.");
        //alert("到底了");
          setTimeout(tishi,1000);
    }
};
function tishi(){
    alert("1秒后开始执行");
}
function fanhui(){
    alert(11111111111111);
}
function fenlei(){
    alert(1111111111);
    //$(".fenlei_list").show().animate({width:'100%'},2000);
    //var text='<div class="fen_list"><p>1111111111111111111</p></div>';
    //$(".fenlei_list").html(text);
    $(".fenlei_list").show();
}
function tiaozhuan(){
    self.location='/admin/home/home/index';
}
function quanfen(){
    self.location='/admin/home/Home/piao';
}
function cloase_fen(){
    $(".fenlei_list").hide();
}