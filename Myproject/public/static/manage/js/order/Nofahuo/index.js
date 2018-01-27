function fahuo(){
    //alert(1111111111);
    $(".fahuo").fadeIn();
}
function close_fahuo(){
    $(".fahuo").fadeOut();
}

function fa(){
    var form = new FormData(document.getElementById("fahuo"));
    $.ajax({
        url:'fahuo',
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function (msg) {
            if(msg!=="error"){
                $.showBox("提交成功");
                alert("1111111");
            }else{
                $.showBox("提交失败");
            }

        },
        error:function (msg) {
            $.showBox("提交成功");
        }
    });
}