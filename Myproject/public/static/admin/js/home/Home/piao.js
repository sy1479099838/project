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