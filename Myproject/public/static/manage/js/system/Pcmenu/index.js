$(document).ready(function(){

    $(".PcMenu-Enable").each(function(){
        if($(this).children(".status").val()==="open")
        {
            $(this).children(".PcMenu-open").fadeIn();
            $(this).children(".PcMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()==="off")
        {
            $(this).children(".PcMenu-off").fadeIn();
            $(this).children(".PcMenu-open").fadeOut();
        }
    })

});

function OffMenu(id) {
    if(id=="1" || id=="2")
    {
        $.showBox("对不起，此项不可操作！");
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "/manage/system/Pcmenu/OffMenu",
            data:({id:id}),
            success: function(msg){
                if(msg==="success")
                {
                    $.showBox("操作成功！");
                    $(".MenuState"+id).val("off");
                    $(".MenuState"+id).next(".PcMenu-open").fadeOut(0);
                    $(".MenuState"+id).next(".PcMenu-open").next(".PcMenu-off").fadeIn(1000);
                }
            },
            error:function (err){
                $.showBox("失败，请重试！");
            }
        });
    }

}

function OpenMenu(id) {
    $.ajax({
        type: "POST",
        url: "/manage/system/Pcmenu/OpenMenu",
        data:({id:id}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                $(".MenuState"+id).val("open");
                $(".MenuState"+id).next(".PcMenu-open").next(".PcMenu-off").fadeOut(0);
                $(".MenuState"+id).next(".PcMenu-open").fadeIn(1000);
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}

function closeAddMenu() {
    $(".Pcmenu-AddMenu-Box").fadeOut(1000);
}
function closeEditMenu() {
    $(".Pcmenu-EditMenu-Box").fadeOut(1000);
}

$(function () {
    $('.father-Menu').change(function(){
        $(".Pcmenu-AddMenu-Box>.Pcmenu-AddMenu-Window>.Pcmenu-AddMenu span>.Menu-chose-2").val("0");
        $(".Pcmenu-AddMenu-Box>.Pcmenu-AddMenu-Window>.Pcmenu-AddMenu span>.Menu-chose-2").fadeOut(0);
        var Menu1_id=$(this).children('option:selected').val();
        var fileName=$('input:text[name="fileName"]').val();
        var ret = /^[a-zA-Z]{3,15}$/;
        if(ret.test(fileName))
        {
            // var MenuName=$(this).children('option:selected').html();
            $('input:text[name="fileName"]').next("b").fadeOut(0);
            if(Menu1_id=="0")
            {
                var MenuHref_1="/manage/"+fileName;
                $('input:text[name="MenuHref"]').val(MenuHref_1);
            }
            else
            {
                Menu1_id=Menu1_id.split('|+|');
                var MenuHref_2="/manage/"+Menu1_id[0]+"/"+fileName+"/index";
                $('input:text[name="MenuHref"]').val(MenuHref_2);
                $("#Menu-chose"+Menu1_id[1]).fadeIn(200);
            }
        }
        else
        {
            $.showBox("请输入正确的文件名！");
            $('input:text[name="fileName"]').after("<b class='fr' style='color: red'>请检查</b>");
            $('input:text[name="fileName"]').focus().val("");
        }

    });


    $(".Pcmenu-AddMenu-Box>.Pcmenu-AddMenu-Window>.Pcmenu-AddMenu span>.Menu-chose-2").change(function () {
        var Menu1_id=$(".father-Menu").children('option:selected').val();
        var Menu2_id=$(this).children('option:selected').val();
        var fileName=$('input:text[name="fileName"]').val();
        var ret = /^[a-zA-Z]{3,15}$/;
        if(ret.test(fileName))
        {
            $('input:text[name="fileName"]').next("b").fadeOut(0);
            if(Menu2_id=="0")
            {
                Menu1_id=Menu1_id.split('|+|');
                var MenuHref_1="/manage/"+Menu1_id[0]+"/"+fileName+"/index";
                $('input:text[name="MenuHref"]').val(MenuHref_1);
            }
            else
            {
                Menu1_id=Menu1_id.split('|+|');
                Menu2_id=Menu2_id.split('|+|');
                var MenuHref_2="/manage/"+Menu1_id[0]+"/"+Menu2_id[0]+"/"+fileName;
                $('input:text[name="MenuHref"]').val(MenuHref_2);
            }
        }
        else
        {
            $.showBox("请输入正确的文件名！");
            $('input:text[name="fileName"]').after("<b class='fr' style='color: red'>请检查</b>");
            $('input:text[name="fileName"]').focus().val("");
        }

    });


    //编辑



    $('.Editfather-Menu').change(function(){
        $(".Pcmenu-EditMenu-Box>.Pcmenu-EditMenu-Window>.Pcmenu-EditMenu span>.EditMenu-chose-2").val("0");
        $(".Pcmenu-EditMenu-Box>.Pcmenu-EditMenu-Window>.Pcmenu-EditMenu span>.EditMenu-chose-2").fadeOut(0);
        var Menu1_id=$(this).children('option:selected').val();
        var fileName=$('input:text[name="EditFileName"]').val();
        var ret = /^[a-zA-Z]{3,15}$/;
        if(ret.test(fileName))
        {
            // var MenuName=$(this).children('option:selected').html();
            $('input:text[name="EditFileName"]').next("b").fadeOut(0);
            if(Menu1_id=="0")
            {
                var MenuHref_1="/manage/"+fileName;
                $('input:text[name="EditMenuHref"]').val(MenuHref_1);
            }
            else
            {
                Menu1_id=Menu1_id.split('|+|');
                var MenuHref_2="/manage/"+Menu1_id[0]+"/"+fileName+"/index";
                $('input:text[name="EditMenuHref"]').val(MenuHref_2);
                $("#EditMenu-chose"+Menu1_id[1]).fadeIn(200);
            }
        }
        else
        {
            $.showBox("请输入正确的文件名！");
            $('input:text[name="EditFileName"]').after("<b class='fr' style='color: red'>请检查</b>");
            $('input:text[name="EditFileName"]').focus().val("");
        }

    });


    $(".Pcmenu-EditMenu-Box>.Pcmenu-EditMenu-Window>.Pcmenu-EditMenu span>.EditMenu-chose-2").change(function () {
        var Menu1_id=$(".Editfather-Menu").children('option:selected').val();
        var Menu2_id=$(this).children('option:selected').val();
        var fileName=$('input:text[name="EditFileName"]').val();
        var ret = /^[a-zA-Z]{3,15}$/;
        if(ret.test(fileName))
        {
            $('input:text[name="EditFileName"]').next("b").fadeOut(0);
            if(Menu2_id=="0")
            {
                Menu1_id=Menu1_id.split('|+|');
                var MenuHref_1="/manage/"+Menu1_id[0]+"/"+fileName+"/index";
                $('input:text[name="EditMenuHref"]').val(MenuHref_1);
            }
            else
            {
                Menu1_id=Menu1_id.split('|+|');
                Menu2_id=Menu2_id.split('|+|');
                var MenuHref_2="/manage/"+Menu1_id[0]+"/"+Menu2_id[0]+"/"+fileName;
                $('input:text[name="EditMenuHref"]').val(MenuHref_2);
            }
        }
        else
        {
            $.showBox("请输入正确的文件名！");
            $('input:text[name="EditFileName"]').after("<b class='fr' style='color: red'>请检查</b>");
            $('input:text[name="EditFileName"]').focus().val("");
        }

    })
});

function AddMenuSubmit() {
    var MenuName=$('input:text[name="MenuName"]').val();
    var FileName=$('input:text[name="fileName"]').val();
    var MenuHref=$('input:text[name="MenuHref"]').val();
    var Menu1_id=$(".father-Menu").children('option:selected').val();
    var checked=$("input[name='ISUSE']:checked").val();
    var FilePosition="";
    var cid="";
    var pid="";
    var leval="";
    if(Menu1_id=="0")
    {
        FilePosition=FileName;
        cid="0";
        pid="0";
        leval="1";
    }
    else
    {
        Menu1_id=Menu1_id.split('|+|');
        var Menu2_id=$("#Menu-chose"+Menu1_id[1]).children('option:selected').val();
        if(Menu2_id=="0")
        {
            FilePosition=Menu1_id[0]+"/"+FileName+"/index";
            pid=Menu1_id[1];
            cid=Menu1_id[1];
            leval="2";
        }
        else
        {
            Menu2_id=Menu2_id.split('|+|');
            FilePosition=Menu1_id[0]+"/"+Menu2_id[0]+"/"+FileName;
            pid=Menu2_id[1];
            cid=Menu1_id[1]+","+Menu2_id[1];
            leval="3";
        }

    }
    var ret = /^[a-zA-Z]{3,15}$/;
    if(ret.test(FileName))
    {
        if(MenuName=="")
        {
            $.showBox("请输入菜单名！");
            $('input:text[name="MenuName"]').after("<b class='fr' style='color: red'>请检查</b>");
            $('input:text[name="MenuName"]').focus();
        }
        else if(MenuHref=="")
        {
            $.showBox("请选择父级菜单！");
        }
        else
        {
            $.ajax({
                type: "POST",
                url: "/manage/system/Pcmenu/AddMenu",
                data: ({MenuName:MenuName,
                        FileName:FileName,
                        MenuHref:MenuHref,
                        FilePosition:FilePosition,
                        cid:cid,
                        pid:pid,
                        checked:checked,
                        leval:leval
                }),
                success: function(msg){
                    if(msg==="success")
                    {
                        $.showBox("菜单添加成功！");
                        window.location.reload();
                    }
                    else
                    {
                        $.showBox("菜单添加失败！");
                    }
                },
                error:function (err){
                    $.showBox("菜单添加失败！");
                }
            });
        }
    }
    else
    {
        $.showBox("请输入正确的文件名！");
        $('input:text[name="fileName"]').after("<b class='fr' style='color: red'>请检查</b>");
        $('input:text[name="fileName"]').focus().val("");
    }
}
function AddMenu() {
    $(".Pcmenu-AddMenu-Box").fadeIn(700);
}
function EditMenu(date) {
    $(".Pcmenu-EditMenu-Box").fadeIn(700);
    var num=date.split('|+|');
    var id=num[0];
    var cid=num[1];
    var fileName=$(".fileName"+id).html();
    var MenuName=$(".MenuName"+id).children("label").html();
    var fileHref=$(".fileHref"+id).html();
    $('input:text[name="EditFileName"]').val(fileName);
    $('input:text[name="EditMenuHref"]').val(fileHref);
    $('input:text[name="EditMenuName"]').val(MenuName);
    $('input:hidden[name="EditHidden"]').val(id);
    if(cid.indexOf(",") > 0)
    {
        cid=cid.split(',');
        var id_1=cid[0];
        var FatherFileName=$(".fileName"+id_1).html();
        $(".Editfather-Menu").val(FatherFileName+"|+|"+id_1);
        var id_2=cid[1];
        $("#EditMenu-chose"+id_1).fadeIn(0);
        var FatherFileName2=$(".fileName"+id_2).html();
        $("#EditMenu-chose"+id_1).val(FatherFileName2+"|+|"+id_2);
    }
    else if(cid=="0")
    {
        $(".Editfather-Menu").val(cid);
    }
    else
    {
        var FatherFileName=$(".fileName"+cid).html();
        $(".Editfather-Menu").val(FatherFileName+"|+|"+cid);
    }
}

function EditMenuSubmit() {
    var MenuName=$('input:text[name="EditMenuName"]').val();
    var FileName=$('input:text[name="EditFileName"]').val();
    var MenuHref=$('input:text[name="EditMenuHref"]').val();
    var Menu1_id=$(".Editfather-Menu").children('option:selected').val();//获取第1个下拉框的值
    var MenuId=$('input:hidden[name="EditHidden"]').val();
    var FilePosition="";
    var cid="";
    var pid="";
    var leval="";
    if(Menu1_id=="0")//当第一个下拉框的值为0时
    {
        FilePosition=FileName;
        cid="0";
        pid="0";
        leval="1";
    }
    else
    {
        Menu1_id=Menu1_id.split('|+|');//当第一个下拉框的值不等于0时用“|+|”分解值，0为文件名，1为ID值
        var Menu2_id=$("#EditMenu-chose"+Menu1_id[1]).children('option:selected').val();//获取第二个下拉框的值
        if(Menu2_id=="0")//当第二个下拉框的值为0
        {
            FilePosition=Menu1_id[0]+"/"+FileName+"/index";
            pid=Menu1_id[1];
            cid=Menu1_id[1];
            leval="2";
        }
        else
        {
            Menu2_id=Menu2_id.split('|+|');//当第2个下拉框的值不等于0时用“|+|”分解值，0为文件名，1为ID值
            FilePosition=Menu1_id[0]+"/"+Menu2_id[0]+"/"+FileName;
            pid=Menu2_id[1];
            cid=Menu1_id[1]+","+Menu2_id[1];
            leval="3";
        }

    }
    var ret = /^[a-zA-Z]{3,15}$/;
    if(ret.test(FileName))
    {
        if(MenuName=="")
        {
            $.showBox("请输入菜单名！");
            $('input:text[name="EditMenuName"]').after("<b class='fr' style='color: red'>请检查</b>");
            $('input:text[name="EditMenuName"]').focus();
        }
        else if(MenuHref=="")
        {
            $.showBox("请选择父级菜单！");
        }
        else
        {
            $.ajax({
                type: "POST",
                url: "/manage/system/Pcmenu/EditMenu",
                data: ({MenuName:MenuName,
                    FileName:FileName,
                    MenuHref:MenuHref,
                    FilePosition:FilePosition,
                    cid:cid,
                    pid:pid,
                    leval:leval,
                    MenuId:MenuId
                }),
                success: function(msg){
                    if(msg==="success")
                    {
                        $.showBox("菜单修改成功！");
                        window.location.reload();
                    }
                    else
                    {
                        $.showBox("菜单修改失败！");
                    }
                },
                error:function (err){
                    $.showBox("菜单修改失败！");
                }
            });
        }
    }
    else
    {
        $.showBox("请输入正确的文件名！");
        $('input:text[name="EditFileName"]').after("<b class='fr' style='color: red'>请检查</b>");
        $('input:text[name="EditFileName"]').focus().val("");
    }
}
