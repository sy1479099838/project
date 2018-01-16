function xiugai_img(){
    $(".img_caijian").fadeIn();
}
// function closeCaijian() {
//     $(".img_caijian").fadeOut();
// }

$(function () {
    var dom = document.getElementById('test');
    dom.addEventListener('touchmove', touchMoveFunc, false);
});

var a=new Object();
a.x=0;
a.y=0;
var b=new Object();
b.x=0;
b.y=0;
function touchMoveFunc(evt) {
    alert(evt.changedTouches.length);
    if(evt.changedTouches.length==1)
    {
        console.log(evt.changedTouches.length);
        try {
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
            var touch = evt.touches[0]; //获取第一个触点
            var x = Number(touch.pageX); //页面触点X坐标
            var y = Number(touch.pageY); //页面触点Y坐标
            console.log(a);
            console.log(x+"+"+y);
            a.y=y;
            a.x=x;

            $(".test").html("第一个点："+x+"+"+y);
        } catch (e) {
            // alert('touchMoveFunc：' + e.message);
        }
    }
    else if(evt.changedTouches.length==2)
    {
        try {
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
            var touch1 = evt.touches[0]; //获取第一个触点
            var x1 = Number(touch.pageX); //页面触点X坐标
            var y1 = Number(touch.pageY); //页面触点Y坐标
            console.log(a);
            console.log(x1+"+"+y1);
            a.x=x1;
            a.y=y1;



            var touch2 = evt.touches[1]; //获取第一个触点
            var x2 = Number(touch.pageX); //页面触点X坐标
            var y2 = Number(touch.pageY); //页面触点Y坐标
            console.log(b);
            console.log(x2+"+"+y2);
            a.x=x2;
            a.y=y2;
            $(".test").html("第一个点："+x1+"+"+y1+";第二个点："+x2+"+"+y2);
        } catch (e) {
            // alert('touchMoveFunc：' + e.message);
        }
    }

}

// function previewF () {
//     var preview = document.getElementById('asdfg');
//     var imgfile=preview.getElementsByTagName('img')[0];
//     var file=document.getElementById('abc').files[0];
//     var reader = new FileReader();
//     console.log(file);
//     reader.onloadend = function () {
//         imgfile.src = reader.result;
//     };
//     if (file) {
//         reader.readAsDataURL(file);
//     } else {
//         imgfile.src = "";
//     }
// }

function previewF () {
    var imgfile = document.getElementById("abc").files[0];
    var prew=document.getElementById("asdfg");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    // console.log(imgfile);
    reader.onload= function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        // console.log(image);
        image.onload = function() {

            var width=this.width;
            var height=this.height;
            var o = document.getElementById("img-Box");
            var winHeightw  = o.offsetHeight; //高度
            var winWidth  = o.offsetWidth; //宽度
            console.log(winHeightw+"+"+winWidth);
            prew.src=image.src;
            if (width>height) {

                prew.src=image.src;
            } else {
                // imgfile.src = "";
                // document.getElementById("abc").value="";
                alert(123456);
            }
        };
    };


}