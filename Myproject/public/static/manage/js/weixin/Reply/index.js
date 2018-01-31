function Huifu(Names){
    for(i=1;i<4;i++){
        var tempname="mune_x"+i;
        var NewsHot="x"+i;	// “X”是ID名称，与上面的传值的|数值匹配
        if (Names==tempname){
            Nnews=document.getElementById(NewsHot);
            Nnews.style.display='';
        }else{
            Nnews=document.getElementById(NewsHot);
            Nnews.style.display='none';
        }
    }
}
function Appaly_close(){
    $(".Appaly_box").fadeOut();
}
function AddReply(){
    $(".Appaly_box").fadeIn();
}
function AddguanReply(){
    $(".Gujian_h").fadeIn();
}
function Gujian_h_close(){
    $(".Gujian_h").fadeOut();
}



function guanjiansub(){
    var form = new FormData(document.getElementById("huifu"));
    $.ajax({
        url:'guanjianzi',
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function (msg) {
            if(msg=="success"){
                $.showBox("添加成功");
                window.location.reload();
            }else{
                $.showBox("添加失败");
            }

        },
        error:function (msg) {
            $.showBox("添加失败");
        }
    });
}
$(function () {
   $(".weixinBiaoqing").click(function () {
       var text=$(this).attr("id");
       var textara = document.getElementById('TextContent');
       insertAtCursor(textara, "["+text+"]");
   });
});

function insertAtCursor(myField, myValue) {
    if (document.selection) {
        //IE support
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    } else if (myField.selectionStart || myField.selectionStart == '0') {
        //MOZILLA/NETSCAPE support
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var beforeValue = myField.value.substring(0, startPos);
        var afterValue = myField.value.substring(endPos, myField.value.length);

        myField.value = beforeValue + myValue + afterValue;

        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
        myField.focus();
    } else {
        myField.value += myValue;
        myField.focus();
    }
}

function subMsg() {
    var form = new FormData(document.getElementById("subInfo"));
    $.ajax({
        url:'saveReceive',
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function (msg) {
            $.showBox("添加成功");
            // if(msg=="success"){
            //     $.showBox("添加成功");
            //     window.location.reload();
            // }else{
            //     $.showBox("添加失败");
            // }

        },
        error:function (msg) {
            $.showBox("添加失败");
        }
    });
}