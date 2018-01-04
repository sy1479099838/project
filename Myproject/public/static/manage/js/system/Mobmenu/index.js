// 打开修改按钮
function Editicon(data) {
    // alert(data);
    $(".Modify-Box").fadeIn(700);
}
// 关闭修改按钮
function closeEdition() {
    $(".Modify-Box").fadeOut(1000);
}
// 图片修改事件提交
function ImgButton(data) {
    $.ajax({
        url:"/manage/view/system/Mobmenu",
        type:"post",
        data:({data:data}),
        success:function (data) {
            if(data=="success"){
                $.showBox("图标修改成功！");
                window.location.reload();
                $(".Modify-Box").fadeOut(1000);
            }
            else if(data=="error"){
                $.showBox("图标修改失败！");
                window.location.reload();
                $(".Modify-Box").fadeOut(1000);
            }
            else {
                $.showBox(data);
            }
        }
    })

}
// 图片修改预览功能
function PreviewFile () {
    var preview = document.getElementById('img1');
    var imgfile=preview.getElementsByTagName('img')[0];
    var file  = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        imgfile.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        imgfile.src = "";
    }
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
        $("#Edit                    ClassSelect"+num).fadeIn(700);
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
//编辑按钮 打开
function EditClass() {
    $(".EditClass-Box").fadeIn(700);
}
// 编辑页面关闭
function closeEditClass() {
    $(".EditClass-Box").fadeOut(100);
}

function OpenClass(data) {
    $.ajax({
        url:"OpenClass",
        type:"post",
        data:({
            num:data
        }),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("成功！");
                $("#MobmenuSwitch_open"+data).fadeOut(0);
                $("#MobmenuSwitch_off"+data).fadeIn(500);

            }
            else
            {
                $.showBox("失败，请重试！");
            }
        },
        error:function (msg) {
            $.showBox("出错啦！");
        }
    });
}

function CloseClass(data) {
    $.ajax({
        url:"CloseClass",
        type:"post",
        data:({
            num:data
        }),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("成功！");
                $("#MobmenuSwitch_off"+data).fadeOut(0);
                $("#MobmenuSwitch_open"+data).fadeIn(500);

            }
            else
            {
                $.showBox("失败，请重试！");
            }
        },
        error:function (msg) {
            $.showBox("出错啦！");
        }
    });
}
// 删除分类
function DeleteMobmenu(date) {
    alert("del"+date);
    // $.ajax({
    //     url:"",
    //     type:"POST",
    //     data:({id:date}),
    //     sucess:function(msg){
    //         if (msg==="success"){
    //             $.showBox("删除成功！");
    //             $(".Mobmenu-index-Box").fadeIn(700);
    //         }
    //     },error:function (err) {
    //         $.showBox("删除失败！")；
    //     }
    // })
}