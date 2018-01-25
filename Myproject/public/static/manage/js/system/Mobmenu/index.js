// 打开修改按钮
function Editicon(data) {
    $("#subImg").attr("onclick","ImgButton("+data+")");
    $(".Modify-Box").fadeIn(700);
}
// 关闭修改按钮
function closeEdition() {
    $(".Modify-Box").fadeOut(200);
    $("#img2").val("");
    $("#icon-Img").attr("src","/public/static/admin/images/sina.png");
}
// 图片修改事件提交
function ImgButton(data) {
    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#img2").get(0).files[0]);
    $.ajax({
        url: 'subIcon/id/'+data,
        type: "POST",
        processData: false,
        contentType: false,
        data: fd,
        success: function (msg) {
            if(msg=="success")
            {
                $.showBox("图标上传成功！");
                window.location.reload();
            }
            else
            {
                $.showBox("上传失败，请重试！");
            }
        },
        error:function (msg) {
            $.showBox("失败！");
            window.location.reload();
        }
    });

}

function OpenFile()
{
    document.getElementById("img2").click();

}
function choseimg() {
    var imgfile = document.getElementById("img2").files[0];
    var prew = document.getElementById("icon-Img");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload = function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function () {

            var width = this.width;
            var height = this.height;
            if(width==200 && height==200)
            {
                prew.src=image.src;
            }
            else
            {
                $.showBox("请上传200*200照片！");
            }

        }
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
        $("#EditClassSelect"+num).fadeIn(700);
    });
});


function EditClassSubmit (id) {
    var form = new FormData(document.getElementById("EditForm"));
    $.ajax({
        url:"saveFrom/id/"+id,
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function(msg) {
            if(msg=="success")
            {
                $.showBox("修改成功！");
                window.location.reload();
            }
            else
            {
                $.showBox("修改失败！");
            }
        },
        error:function () {
            $.showBox("修改失败，请重试！");
        }
    });
}

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
function EditClass(id) {
    $.ajax({
        url:"Edit",
        type:"post",
        data:({
            id:id
        }),
        success:function (msg) {
            $(".EditClass-Box").html(msg);
            $(".EditClass-Box").fadeIn(700);
        },
        error:function () {
            $.showBox("失败，请重试！");
        }
    });

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