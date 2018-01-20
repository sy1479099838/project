function nichengedit(){
    var form = new FormData(document.getElementById("necheng"));
    $.ajax({
        url:'nichengedit',
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function (msg) {
            if(msg!=="error"){
                $.showBox("修改成功");
                alert("1111111");
            }else{
                $.showBox("修改失败");
            }

        },
        error:function (msg) {
            $.showBox("修改失败");
        }
    });
}