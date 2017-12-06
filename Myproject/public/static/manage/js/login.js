$(document).ready(function(){
    var WinHeight=$(window).height();
    WinHeight=WinHeight+"px";
    $(".BigBoxImg").css("height",WinHeight);
});

function refreshVerify() {
    var ts = Date.parse( new Date())/1000;
    $('#verify_img').attr("src", "/captcha?id="+ts);
}

$(function () {
    $(".Login_account").focusout(function () {
        var account=$(this).val();
        $.ajax({
            type: "POST",
            url: "login",
            data: ({account:account
            }),
            success: function(msg){
                if(msg==="success")
                {
                    $('.Login_password').attr("disabled",false).focus();
                    $(".account_label").css("color","green").text("√");
                }
                if(msg==="error")
                {
                    $.showBox("该账号不存在，请检查！");
                    $(".account_label").css("color","red").text("X");
                    $('.Login_password').attr("disabled",true).val("");
                }
            },
            error:function (err){
                $.showBox("账号验证失败！");
            }
        });
    })
});
$.extend({showBox:function (msg) {
    $(".prompt_Box").empty();
    $(".prompt_Box").append(msg).fadeIn(200);
    $('.prompt_Box').delay(700).fadeOut(200);
}});


$(function () {

    $(".login_submit_button").click(function () {
        var HiddenNum=$(".Hidden_Input").val();
        var timestamp = Date.parse(new Date())/1000;
        $(".Hidden_Input").val(timestamp);
        if(HiddenNum==="" || timestamp-HiddenNum>3)
        {
            var verify=$(".Verification").val();
            var account=$(".Login_account").val();
            var password=$(".Login_password").val();
            if(account==="")
            {
                $.showBox("账号不能为空！");
                $('.Login_account').attr("disabled",false).focus();
            }
            else if(password==="")
            {
                $.showBox("密码不能为空！");
                $(".password_label").css("color","red").text("X");
            }
            else if(verify==="")
            {
                $.showBox("验证码不能为空！");
                $('.Verification').attr("disabled",false).focus();
                $(".verify_label").css("color","red").text("X");
            }
            else
            {
                $.ajax({
                    type: "POST",
                    url: "verify",
                    data: ({verify:verify,
                        account:account,
                        password:password
                    }),
                    success: function(msg){
                        if(msg==="验证成功")
                        {
                            $.showBox("登陆成功");
                            $(".account_label").css("color","green").text("√");
                            $(".password_label").css("color","green").text("√");
                            $(".verify_label").css("color","green").text("√");
                            window.location.replace("../Index/index");
                        }
                        if(msg==="验证失败")
                        {
                            $.showBox("密码错误！");
                            $(".password_label").css("color","red").text("X");
                            $('.Login_password').val("");
                        }
                        if(msg==="验证码有误")
                        {
                            $.showBox(msg);
                            $(".verify_label").css("color","red").text("X");

                        }
                    },
                    error:function (err){
                        $.showBox("账号验证失败！");
                    }
                });
            }
        }


    })
});

$(window).keydown(function(){
    if(event.keyCode == "13") {//判断如果按下的是回车键则执行下面的代码

        var HiddenNum = $(".Hidden_Input").val();
        var timestamp = Date.parse(new Date()) / 1000;
        $(".Hidden_Input").val(timestamp);
        if (HiddenNum === "" || timestamp - HiddenNum > 3)
        {
            var verify = $(".Verification").val();
            var account = $(".Login_account").val();
            var password = $(".Login_password").val();
            if (account === "") {
                $.showBox("账号不能为空 ！");
                $(".account_label").css("color", "red").text("X");
            }
            else if (password === "") {
                $.showBox("密码不能为空！");
                $(".password_label").css("color", "red").text("X");
            }
            else if (verify === "") {
                $.showBox("验证码不能为空！");
                $(".verify_label").css("color", "red").text("X");
            }
            else {

                $.ajax({
                    type: "POST",
                    url: "verify",
                    data: ({
                        verify: verify,
                        account: account,
                        password: password
                    }),
                    success: function (msg) {
                        if (msg === "验证成功") {
                            $.showBox("登陆成功");
                            $(".account_label").css("color", "green").text("√");
                            $(".password_label").css("color", "green").text("√");
                            $(".verify_label").css("color", "green").text("√");
                            window.location.replace("../Index/index");
                        }
                        if (msg === "验证失败") {
                            $.showBox("密码错误！");
                            $(".password_label").css("color", "red").text("X");
                            $('.Login_password').val("");
                        }
                        if (msg === "验证码有误") {
                            $.showBox(msg);
                            $(".verify_label").css("color", "red").text("X");

                        }
                    },
                    error: function (err) {
                        $.showBox("登陆失败！");
                    }
                });
            }
        }
    }


});