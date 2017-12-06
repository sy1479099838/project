function Login() {
    var LoginUserAccount = $('input:text[name="LoginUserAccount"]').val();
    var LoginUserPwd =$('input:password[name="LoginUserPwd"]').val();
    if(LoginUserAccount===null || LoginUserAccount==="")
    {
        $.showBox("账号不能为空！");
        $('input:text[name="LoginUserAccount"]').attr("disabled",false).focus();
        $('input:text[name="LoginUserAccount"]').next("label").html("必填").css("color","red").show();
    }
    else if(LoginUserPwd===null || LoginUserPwd==="")
    {
        $.showBox("密码不能为空！");
        $('input:password[name="LoginUserPwd"]').attr("disabled",false).focus();
        $('input:password[name="LoginUserPwd"]').next("label").html("必填").css("color","red").show();
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "UserLogin",
            data: ({account:LoginUserAccount,
                PWD:LoginUserPwd
            }),
            success: function(msg){
                if(msg==="success")
                {
                    $.showBox("登录成功！");
                    window.location.replace("/admin/home/Home/index");
                }
                if(msg==="error")
                {
                    $.showBox("密码有误");
                    $('input:password[name="LoginUserPwd"]').next("label").css("color","red").text("？？").show();
                    $('input:password[name="LoginUserPwd"]').attr("disabled",false).val("");
                }
            },
            error:function (err){
                $.showBox("账号验证失败！");
            }
        });
    }
}

$(function () {
    $('input:text[name="LoginUserAccount"]').focusout(function () {
        var account=$(this).val();
        $.ajax({
            type: "POST",
            url: "AccountValidate",
            data: ({account:account
            }),
            success: function(msg){
                if(msg==="success")
                {
                    $('input:password[name="LoginUserPwd"]').attr("disabled",false).focus();
                    $(".account_label").css("color","green").text("√");
                    $('input:text[name="LoginUserAccount"]').next("label").css("color","green").text("√").show();
                }
                if(msg==="error")
                {
                    $.showBox("该账号不存在，请检查！");
                    $('input:text[name="LoginUserAccount"]').next("label").css("color","red").text("？？").show();
                    $('input:text[name="LoginUserAccount"]').attr("disabled",false).focus();
                    $('input:password[name="LoginUserPwd"]').attr("disabled",true).val("");

                }
            },
            error:function (err){
                $.showBox("账号验证失败！");
            }
        });
    })



});

$(window).keydown(function(){
    if(event.keyCode == "13") {//判断如果按下的是回车键则执行下面的代码

        var LoginUserAccount = $('input:text[name="LoginUserAccount"]').val();
        var LoginUserPwd =$('input:password[name="LoginUserPwd"]').val();
        if(LoginUserAccount===null || LoginUserAccount==="")
        {
            $.showBox("账号不能为空！");
            $('input:text[name="LoginUserAccount"]').attr("disabled",false).focus();
            $('input:text[name="LoginUserAccount"]').next("label").html("必填").css("color","red").show();
        }
        else if(LoginUserPwd===null || LoginUserPwd==="")
        {
            $.showBox("密码不能为空！");
            $('input:password[name="LoginUserPwd"]').attr("disabled",false).focus();
            $('input:password[name="LoginUserPwd"]').next("label").html("必填").css("color","red").show();
        }
        else
        {
            $.ajax({
                type: "POST",
                url: "UserLogin",
                data: ({account:LoginUserAccount,
                    PWD:LoginUserPwd
                }),
                success: function(msg){
                    if(msg==="success")
                    {
                        $.showBox("登录成功！");
                        window.location.replace("/admin/home/Home/index");
                    }
                    if(msg==="error")
                    {
                        $.showBox("密码有误");
                        $('input:password[name="LoginUserPwd"]').next("label").css("color","red").text("？？").show();
                        $('input:password[name="LoginUserPwd"]').attr("disabled",false).val("");
                    }
                },
                error:function (err){
                    $.showBox("账号验证失败！");
                }
            });
        }
    }


});