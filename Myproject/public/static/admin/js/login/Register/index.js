function daojishi() {
    var htmlText=$(".RegisterPhone_Code").html();
    var phoneNum=$('input:text[name="RegisterPhoneNum"]').val();
    if(htmlText==="点击获取验证码" || htmlText==="没收到？那就重发" || htmlText==="短信发送失败")
    {
        if(phoneNum==="" || phoneNum===null)
        {
            $('input:text[name="RegisterPhoneNum"]').next("label").html("？？").css("color","red").show();
            $.showBox("请输入您的手机号！");
        }
        else
        {
            $.ajax({
                type: "POST",
                url: "phoneCode",
                data: ({phoneNum:phoneNum
                }),
                success: function(msg)
                {
                    if(msg==="success")
                    {
                        $(".RegisterPhone_Code").css("background","#b5b5b5");
                        $('input:password[name="RegisterUserPwd_1"]').attr("disabled",false);
                        $('input:password[name="RegisterUserPwd_2"]').attr("disabled",false);
                        var i = 60;
                        var timer = setInterval(function(){
                            if(i===0){
                                clearInterval(timer);
                                $(".RegisterPhone_Code").html("没收到？那就重发").css("background","green");
                            }else{
                                --i;
                                $(".RegisterPhone_Code").html(i+"秒后可重发");
                            }
                        },1000);
                    }
                    else if(msg==="phoneExist")
                    {
                        $.showBox("该账号已经存在！");
                        $('input:text[name="RegisterPhoneNum"]').next("label").html("已存在").css("color","red").show();
                    }
                    else
                    {
                        $(".RegisterPhone_Code").html("短信发送失败");
                    }
                },
                error:function (msg) {
                    $(".RegisterPhone_Code").html("短信发送失败");
                }
            })
        }
    }
}


function RegisterJudge() {
    var phoneNum=$('input:text[name="RegisterPhoneNum"]').val();
    if(phoneNum==="" || phoneNum===null)
    {
        $('input:text[name="RegisterPhoneNum"]').next("label").html("？？").css("color","red").show();
        $.showBox("请输入您的手机号！");
    }
    else if($('input:password[name="RegisterUserPwd_1"]').attr("disabled"))
    {
        $.showBox("请先获取验证码！");
    }
}

function LRegister() {
    var username=$('input:text[name="RegisterUserName"]').val();
    var phoneNum=$('input:text[name="RegisterPhoneNum"]').val();
    var PhoneCode=$('input:text[name="RegisterPhoneCode"]').val();
    var UserPwd_1=$('input:password[name="RegisterUserPwd_1"]').val();
    var UserPwd_2=$('input:password[name="RegisterUserPwd_2"]').val();
    if(username==="" || username===null)
    {
        $('input:text[name="RegisterUserName"]').next("label").html("请输入").css("color","red").show();
        $.showBox("请输入昵称！");
    }
    else if(phoneNum==="" || username===null)
    {
        $('input:text[name="RegisterPhoneNum"]').next("label").html("请输入").css("color","red").show();
        $.showBox("请输入您的电话号码！");
    }
    else if(PhoneCode==="" || username===null)
    {
        $('input:text[name="RegisterPhoneCode"]').next("label").html("请输入").css("color","red").show();
        $.showBox("请输入短信验证码！");
    }
    else if(UserPwd_1!==UserPwd_2)
    {
        $('input:password[name="RegisterUserPwd_2"]').next("label").html("有误").css("color","red").show();
        $.showBox("密码前后不一致！");
    }
    else if(UserPwd_1==="" || UserPwd_1===null)
    {
        $('input:password[name="RegisterUserPwd_2"]').next("label").html("有误").css("color","red").show();
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "PhoneRegister",
            data: ({username:username,
                    phoneNum:phoneNum,
                    PhoneCode:PhoneCode,
                    UserPwd:UserPwd_2
            }),
            success: function(msg)
            {
                if(msg==="RegisterSuccess")
                {
                    $.showBox("注册成功！");
                    window.location.replace("/admin/login/Login/index");
                }
                if(msg==="RegisterError")
                {
                    $.showBox("注册失败！");
                    window.location.replace("/admin/login/Register/index");
                }
                if(msg==="codeError")
                {
                    $.showBox("验证码错误！");
                }
                if(msg==="PhoneError")
                {
                    $.showBox("电话号码前后不一致！");
                    $('input:text[name="RegisterPhoneNum"]').next("label").html("？？").css("color","red").show();
                }
                if(msg==="phoneExist")
                {
                    $.showBox("该账号已经存在！");
                    $('input:text[name="RegisterPhoneNum"]').next("label").html("已存在").css("color","red").show();
                }
            },
            error:function (msg) {
                $.showBox("注册失败！");
                window.location.replace("/admin/login/Register/index");
            }
        })
    }
}

$(function () {
    
});