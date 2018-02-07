window.onscroll = function () {
    var wScrollY = window.scrollY; // 当前滚动条位置
    var wInnerH  = window.innerHeight; // 设备窗口的高度（不会变）
    var bScrollH = document.body.scrollHeight; // 滚动条总高度
    if (wScrollY + wInnerH >= bScrollH) {
        //console.log("到底了. ");
        //alert("到底 了");
        setTimeout(checkshi,1000);
    }
};
function checkshi(){
    alert("1秒后开始执行");
}
function fenlei(){
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