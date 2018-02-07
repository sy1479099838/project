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
    //alert(1111111111);
    $(".fenlei_list").show().animate({left:0},1000);
}
function tiaozhuan(){
    self.location='/admin/home/home/index';
}
function quanfen(){
    self.location='/admin/home/Home/piao';
}
function cloase_fen(){
    $(".fenlei_list").show().animate({left:'-100%'},0);
}