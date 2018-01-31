$(function () {
   $("input:radio[name=MenuEnable]").click(function () {
       var MenuEnable=$(this).val();
       if(MenuEnable=="1")
       {
            $(this).parents(".Menu-box").find(".Menu-Content").fadeIn();
       }
       else
       {
           $(this).parents(".Menu-box").find(".Menu-Content").fadeOut(0);
       }
   });

   $("input:radio[name=Menu-type]").click(function () {
       var MenuType=$(this).val();
       if(MenuType=="1")
       {
           $(this).nextAll("button").fadeOut(0);
           $(this).parents(".Menu-Content").find(".childrenMenu").remove();
           $(this).parents(".Menu-Content").find(".href").fadeIn(200);
       }
       else
       {

           $(this).nextAll("button").fadeIn(0);
           $(this).parents(".Menu-Content").find(".href").fadeOut(0);
       }
   });

   $(".addChildrenMenu").click(function () {
       var num=$(this).parents(".Menu-Content").find(".childrenMenu").length;
       var text='<div class="Menu-Content-children childrenMenu" style="display: block;"><div class="children-Menu"><span>子菜单'+(parseInt(num)+1)+'：</span><input type="text" placeholder="最多八个汉字16个字符" name="first-children-'+(parseInt(num)+1)+'" value="" style="width: 200px;display: inline-block;border: 1px solid black;height: 22px;"><input class="children-enable" type="radio" value="1" name="chidren1-enable'+(parseInt(num)+1)+'" placeholder=""><span>跳转链接</span><input type="radio" value="0" name="chidren1-enable'+(parseInt(num)+1)+'" placeholder="" checked><span>关键字回复</span><br><span>跳转链接或者关键字：</span><input type="text" name="chidren1-href'+(parseInt(num)+1)+'" placeholder="关键字内容不限；跳转链接以\'http://\'或者\'https://\'开头" style="width: 500px;border: 1px solid black;height: 22px;margin: 5px 0"></div></div>';
       if(num<5)
       {
           $(this).parents(".Menu-Content").append(text);
       }
       else
       {
           $.showBox("最多只能添加5个子菜单哦");
       }
   });
});
function sureSave() {
    var text="您确认保存菜单？";
    var hanshu="saveMenu()";
    affirm(text,hanshu);
}
function saveMenu() {
    var menu1 = JSON.stringify($("#form1").serializeArray());
    var menu2 = JSON.stringify($("#form2").serializeArray());
    var menu3 = JSON.stringify($("#form3").serializeArray());
    $.ajax({
        url:"saveMenu",
        type:"post",
        data:({
            menu1:menu1,
            menu2:menu2,
            menu3:menu3
        }),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("菜单生成成功！");
                window.location.reload();
            }
            else
            {
                $.showBox("菜单生成失败啦！");
            }
        },
        error:function (msg) {
            $.showBox("失败，请重试！");
        }
    });

}

$(document).ready(function(){
    $(".WeiXinMenu-form").each(function(){
        var menuEnable=$(this).find("input:radio[name=MenuEnable]:checked").val();
        if(menuEnable=="1")
        {
            $(this).find(".Menu-Content").fadeIn(0);
            var MenuType=$(this).find("input:radio[name=Menu-type]:checked").val();
            if(MenuType=="1")
            {
                $(this).find(".href").fadeIn();
            }
            else
            {
                $(this).find(".addChildrenMenu").fadeIn();
            }
        }
    });
});


