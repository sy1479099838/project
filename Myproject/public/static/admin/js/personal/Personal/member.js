function xiugai_img(){
    $(".img_caijian").fadeIn();
}
// function closeCaijian() {
//     $(".img_caijian").fadeOut();
// }

$(function () {
    var dom = document.getElementById('CaiJianBox');
    dom.addEventListener('touchmove', touchMoveFunc, false);
});

var a=new Object();
a.x=0;
a.y=0;
var b=new Object();
b.x=0;
b.y=0;
var ju=0;
function touchMoveFunc(evt) {
    if(evt.changedTouches.length==1)
    {
        try {
            evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等

            var parent=document.getElementById("imgBox");
            var PWidth=parent.offsetWidth;
            var PHeight=parent.offsetHeight;
            var position=document.getElementById("CaiJianBox");
            var width=position.offsetWidth;
            var height=position.offsetHeight;
            var left=position.offsetLeft;
            var right=PWidth-(left+width);
            var top=position.offsetTop;
            var bottom=PHeight-(top+height);
            //获取点
            var touch = evt.touches[0]; //获取第一个触点
            var x = Number(touch.pageX); //页面触点X坐标
            var y = Number(touch.pageY); //页面触点Y坐标
            if(a.x==0 && a.y==0) {a.y=y;a.x=x;}
            else{
                var turnX=x-a.x;
                var turnY=y-a.y;
                if(turnX>0 && turnY==0 ){if(right!=0 && right>1){$("#CaiJianBox").css({"left":(left+1)+"px"});}}
                else if(turnX<0 && turnY==0){if(left!=0 && left>1){$("#CaiJianBox").css({"left":(left-1)+"px"});}}
                else if(turnY>0 && turnX==0){if(bottom!=0 && bottom>1){$("#CaiJianBox").css({"top":(top+1)+"px"});}}
                else if(turnY<0 && turnX==0){if(top!=0 && top>1){$("#CaiJianBox").css({"top":(top-1)+"px"});}}
                else if(turnY<0 && turnX<0)//左上
                {
                    if(left==0 && top!=0){$("#CaiJianBox").css({"top":(top-1)+"px"});}
                    else if(top==0 && left!=0){$("#CaiJianBox").css({"left":(left-1)+"px"});}
                    else if(top>0 && left>0){$("#CaiJianBox").css({"left":(left-1)+"px","top":(top-1)+"px"});}
                }
                else if(turnY>0 && turnX<0)//左下
                {
                    if(left==0 && bottom!=0){$("#CaiJianBox").css({"top":(top+1)+"px"});}
                    else if(bottom==0 && left!=0){$("#CaiJianBox").css({"left":(left-1)+"px"});}
                    else if(bottom>0 && left>0){$("#CaiJianBox").css({"left":(left-1)+"px","top":(top+1)+"px"});}
                }
                else if(turnY<0 && turnX>0)//右上
                {
                    if(right==0 && top!=0) {$("#CaiJianBox").css({"top":(top-1)+"px"});}
                    else if(top==0 && right!=0) {$("#CaiJianBox").css({"left":(left+1)+"px"});}
                    else if(top>0 && right>0) {$("#CaiJianBox").css({"left":(left+1)+"px", "top":(top-1)+"px"});}
                }
                else if(turnY>0 && turnX>0)//右下
                {
                    if(right==0 && bottom!=0) {$("#CaiJianBox").css({"top":(top+1)+"px"});}
                    else if(bottom==0 && right!=0) {$("#CaiJianBox").css({"left":(left+1)+"px"});}
                    else if(bottom>0 && right>0) {$("#CaiJianBox").css({"left":(left+1)+"px", "top":(top+1)+"px"});}
                }
                a.y=y;
                a.x=x;
            }
        } catch (e) {
            // alert('touchMoveFunc：' + e.message);
        }
    }
    else if(evt.changedTouches.length==2)
    {
        try {
            evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
            var touch1 = evt.touches[0]; //获取第一个触点
            var x1 = Number(touch1.pageX); //页面触点X坐标
            var y1 = Number(touch1.pageY); //页面触点Y坐标
            var touch2 = evt.touches[1]; //获取第一个触点
            var x2 = Number(touch2.pageX); //页面触点X坐标
            var y2 = Number(touch2.pageY); //页面触点Y坐标
            var X=Math.abs(x1-x2);
            var Y=Math.abs(y1-y2);
            var juli=0;
            if(X==0 && Y!=0)
            {
                juli=Y;
            }
            else if(Y==0 && X!=0)
            {
                juli=X;
            }
            else
            {
                var cha=(X*X)+(Y*Y);
                juli=Math.sqrt(cha)
            }
            if(ju==0)
            {
                ju=juli;
            }
            else
            {
                var posit=document.getElementById("CaiJianBox");
                var wid=posit.offsetWidth;
                var suojin=0;
                var par=document.getElementById("imgBox");
                var parWid=par.offsetWidth;
                var parHei=par.offsetHeight;
                var parwidth=0;
                if(parWid>parHei)
                {
                    parwidth=parHei;
                }
                else
                {
                    parwidth=parWid;
                }
                if(juli>ju)
                {
                    suojin=wid+4;
                    if(suojin>parwidth)
                    {
                        suojin=parwidth;
                    }
                    $("#CaiJianBox").css({
                        "width":suojin+"px",
                        "height":suojin+"px"
                    });
                }
                else if(juli<ju)
                {
                    suojin=wid-4;
                    if(suojin<100)
                    {
                        suojin=100;
                    }
                    $("#CaiJianBox").css({
                        "width":suojin+"px",
                        "height":suojin+"px"
                    });
                }
            }
            a.x=x1;
            a.y=y1;
            a.x=x2;
            a.y=y2;
            ju=juli;
        } catch (e) {

        }
    }

}

$(document).ready(function(){
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var o = document.getElementById("abc");
    var inputHeight  = o.offsetHeight; //高度
    $("#img-Box").css({
        "height":winWidth+"px",
        "margin-top":50+"px"
    });
    $("#CaiJianBox").fadeOut();
});
function fuwei() {
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var o = document.getElementById("abc");
    var inputHeight  = o.offsetHeight; //高度
    $("#img-Box").css({
        "height":winWidth+"px",
        "margin-top":50+"px"
    });
    $("#CaiJianBox").css({"top":0,"left":0}).fadeOut();
}


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
            fuwei();
            if (width>height || width==height) {
                if(width>winWidth)
                {
                    var bi=width/winWidth;
                    $("#imgBox").css({
                        "width":"100%",
                        "height":(height/bi)+"px",
                        "margin-top":((winHeightw-(height/bi))/2)+"px"
                    });
                    $("#CaiJianBox").css({
                        "width":(height/bi)+"px",
                        "height":(height/bi)+"px"
                    }).fadeIn();
                }
                else
                {
                    $("#imgBox").css({
                        "width":width+"px",
                        "height":height+"px",
                        "margin-top":((winHeightw-height)/2)+"px"
                    });
                    $("#CaiJianBox").css({
                        "width":height+"px",
                        "height":height+"px"
                    }).fadeIn();
                }

                prew.src=image.src;
            } else {
                if(height>winHeightw)
                {
                    var bi2=height/winHeightw;
                    $("#imgBox").css({
                        "width":(width/bi2)+"px",
                        "height":"100%"
                    });
                    $("#CaiJianBox").css({
                        "width":(width/bi2)+"px",
                        "height":(width/bi2)+"px"
                    }).fadeIn();
                }
                else
                {
                    $("#imgBox").css({
                        "width":width+"px",
                        "height":height+"px",
                        "margin-top":((winHeightw-height)/2)+"px"
                    });
                    $("#CaiJianBox").css({
                        "width":width+"px",
                        "height":width+"px"
                    }).fadeIn();
                }
                prew.src=image.src;
            }
        };
    };
}


function caiHead() {
    var parent=document.getElementById("imgBox");
    var PWidth=parent.offsetWidth;
    var PHeight=parent.offsetHeight;
    var position=document.getElementById("CaiJianBox");
    var width=position.offsetWidth;
    var height=position.offsetHeight;
    var left=position.offsetLeft;
    var top=position.offsetTop;
    var CaiLeft=left/PWidth;
    var CaiTop=top/PHeight;
    var caiWidth=width/PWidth;
    var CaiHeight=height/PHeight;
    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#abc").get(0).files[0]);
    $.ajax({
        url: 'saveHeade/CaiLeft/'+CaiLeft+'/CaiTop/'+CaiTop+'/caiWidth/'+caiWidth+'/CaiHeight/'+CaiHeight,
        type: "POST",
        processData: false,
        contentType: false,
        data:fd,
        success: function(msg) {
            if(msg=="error")
            {
                $.showBox("裁剪失败");
            }
            else
            {
                var obj = JSON.parse(msg);
                $("#imgBox").css({
                    "width":"auto",
                    "height":"auto"
                });
                $("#CaiJianBox").fadeOut();
                $('#asdfg').attr('src',"/public/uploads/"+obj.head);
                $("#saveHead").attr("onclick","saveimg("+"\""+obj.bigImg+"\""+",\""+obj.head+"\")");
                $("#cancalImg").attr("onclick","cancalImg("+"\""+obj.bigImg+"\""+",\""+obj.head+"\")")
            }
        },
        error:function()
        {
            $.showBox("照片上传失败！");
        }
    });
}

function saveimg(bigImg,head) {
    $.ajax({
        url:"save",
        type:"post",
        data:({
            bigImg:bigImg,
            head:head
        }),
        success:function (msg) {
            if(msg=="success")
            {
                alert("保存成功！");
                window.location.reload();
            }
            else
            {
                alert("保存失败！");
                window.location.reload();
            }
        },
        error:function (msg) {
           alert("保存失败！");
            window.location.reload();
        }
    });
}
function cancalImg(bigImg,head) {
    $.ajax({
        url:"cancalImg",
        type:"post",
        data:({
            bigImg:bigImg,
            head:head
        }),
        success:function (msg) {
            window.location.reload();
        },
        error:function (msg) {
            window.location.reload();
        }
    });
}