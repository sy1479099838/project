function Editicon(data) {
    alert(data);
}
$(document).ready(function(){

    $(".Mobmenu-Enable").each(function(){
        if($(this).children(".class-switch").val()==="open")
        {
            $(this).children(".Mobmenu-open").fadeIn();
            $(this).children(".Mobmenu-off").fadeOut();
        }
        else if($(this).children(".class-switch").val()==="off")
        {
            $(this).children(".Mobmenu-off").fadeIn();
            $(this).children(".Mobmenu-open").fadeOut();
        }
    })
});

function AddClass() {
    $(".AddClass-Box").fadeIn(200);
}
function closeAddClass() {
    $(".AddClass-Box").fadeOut(0);
}

$(function () {
    $(".ClassSelect_1").change(function () {
        $(".ClassSelect_2").fadeOut(0);
        var num=$(this).val();
        if(num=="0")
        {
            $(".mubanChoice").fadeIn(0);
        }
        else
        {
            $(".mubanChoice").fadeOut(0);
        }
        $("#ClassSelect"+num).fadeIn(700);
    });
});

function AddClassSubmit() {
    var Name=$('input:text[name="ClassName"]').val();
    var enable=$('input:radio[name="ClassEnable"]:checked').val();
    var muban=$('input:radio[name="AddMuban"]:checked').val();
    var pid="";
    var cid="";
    var level="";
    if(Name=="" || typeof(Name)=="undefined")
    {
        $.showBox("分类名称不能为空！");
    }
    else
    {
        var Class_1=$(".ClassSelect_1").val();
        // alert(Class_1);
        if(Class_1=="0")
        {
            pid=0;
            cid=0;
            level=1;
        }
        else
        {
            var Class_2=$("#ClassSelect"+Class_1).val();
            if(Class_2=="0" || typeof(Class_2)=="undefined")
            {
                pid=Class_1;
                cid=Class_1;
                level=2;
            }
            else
            {
                pid=Class_2;
                cid=Class_1+","+Class_2;
                level=3;
            }
        }
        $.ajax({
            url:"addclass",
            type:"post",
            data:({
                Name:Name,
                enable:enable,
                pid:pid,
                cid:cid,
                level:level,
                muban:muban
            }),
            success:function (msg) {
                if(msg=="success")
                {
                    $.showBox("成功！");
                    window.location.reload();
                }
                else
                {
                    $.showBox("失败！");
                    window.location.reload();
                }
            },
            error:function (msg) {
                $.showBox("出错啦！");
            }
        });
    }
}
