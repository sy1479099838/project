function fahuo(num){
    $("#SureFa").attr("onclick","fa("+num+")");
    $(".fahuo").fadeIn();
}
function close_fahuo(){
    $(".fahuo").fadeOut();
}

function fa(num){
    var wuliu=$("input[name='Wuliu']:checked").val();
    if(wuliu==0)
    {
        $.ajax({
            url:'fahuo',
            type:'post',
            data:({
                Id:num,
                state:wuliu
            }),
            success:function (msg) {
                if(msg=="sorry")
                {
                    $.showBox("对不起，暂时还不支持物流！");
                }
                else if(msg=="Cant")
                {
                    $.showBox("对不起，请不要随意修改！");
                }
                else if(msg=="error")
                {
                    $.showBox("对不起，发货失败");
                }
                else
                {
                    $.showBox("成功！");
                    window.location.reload();
                }
            },
            error:function (msg) {
                $.showBox("失败，请重试！");
            }
        });
    }
    else
    {
        var form = new FormData(document.getElementById("fahuo"));
        $.ajax({
            url:'fahuo/Id/'+num+"/state/"+wuliu,
            type:"post",
            data:form,
            processData:false,
            contentType:false,
            async:false,
            success:function (msg) {
                if(msg=="sorry")
                {
                    $.showBox("对不起，暂时还不支持物流！");
                }
                else if(msg=="Cant")
                {
                    $.showBox("对不起，请不要随意修改！");
                }
                else if(msg=="error")
                {
                    $.showBox("对不起，发货失败");
                }
                else
                {
                    $.showBox("成功！");
                    window.location.reload();
                }
            },
            error:function (msg) {
                $.showBox("失败，请重试！");
            }
        });
    }

}

function showFrom(num) {
    if(num==1)
    {
        $("#fahuo").fadeIn();
    }
    else
    {
        $("#fahuo").fadeOut();
    }
}
