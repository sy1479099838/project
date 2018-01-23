

function Huifu(Names){
    //alert(111111111);
    for(i=1;i<4;i++){
        var tempname="mune_x"+i;
        var NewsHot="x"+i;	// “X”是ID名称，与上面的传值的|数值匹配
        if (Names==tempname){
            Nnews=document.getElementById(NewsHot)
            Nnews.style.display='';
        }else{
            Nnews=document.getElementById(NewsHot)
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
            if(msg!=="error"){
                $.showBox("添加成功");
                //alert("1111111");
            }else{
                $.showBox("添加失败");
            }

        },
        error:function (msg) {
            $.showBox("添加失败");
        }
    });
}
