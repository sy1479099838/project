function AdminPower(data) {
    $.ajax({
        url:"SetPower",
        type:"post",
        data:({num:data}),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox("对不起，您没有权利！");
            }
            else
            {
                $(".Admin-power-BigBox").html(msg);
                $(".Admin-power-BigBox").fadeIn(500);
            }

        },
        error:function () {
            $.showBox("对不起，请重试！");
        }
    });
}
/*
* 保存权限
* 
* */

function SavePower(data) {
    var text = $("input:checkbox[name='MenuPower']:checked").map(function(index,elem) {
        return $(elem).val();
    }).get().join(',');
    $.ajax({
        url:"SavePower",
        type:"post",
        data:({text:text,
                num:data
        }),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("保存成功！");
                $(".Admin-power-BigBox").fadeOut(500);
                $(".Admin-power-BigBox").html("");

            }
            else if(msg=="error")
            {
                $.showBox("保存失败！");
                $(".Admin-power-BigBox").fadeOut(500);
                $(".Admin-power-BigBox").html("");
            }
            else
            {
                $.showBox(msg);
                $(".Admin-power-BigBox").fadeOut(500);
                $(".Admin-power-BigBox").html("");
            }
        },
        error:function () {
            $.showBox("对不起，请重试！");
            $(".Admin-power-BigBox").fadeOut(500);
            $(".Admin-power-BigBox").html("");
        }
    });
}
/*
* 管理员编辑
*
* */
function EditAdmin(date) {
    $.ajax({
        url:"edit",
        type:"post",
        data:({num:date}),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox("对不起，您没有编辑的权利！");
            }
            else
            {
                $(".Admin-Edit-Box").html(msg);
                $(".Admin-Edit-Box").fadeIn(500);
            }

        },
        error:function (num) {
            
        }
    });

}
/*
* 管理员编辑窗口关闭
* */
function closeEditAdmin() {
    $(".Admin-Edit-Box").fadeOut(500);
}


function DelAdmin(date) {
    alert("del"+date);
}
function AddAdmin() {
    $(".Admin-Add-Box").fadeIn(500);
}
function closeAddAdmin() {
    $(".Admin-Add-Box").fadeOut(500);
}

function closePowerAdmin() {

    $(".Admin-power-BigBox").fadeOut(500);
    $(".Admin-power-BigBox").html("");
}


function AdminRegionChoice(date) {
    $.ajax({
        url:"AdminRegionChoice",
        type:"post",
        data: ({num:date
        }),
        success:function (msg) {
            $(".AdminList-table").html(msg);
        },
        error:function (meg) {

        }
    });
}
/*
* 当负责人选择框第一个的值发生改变的时候触发
*返回后台进行区域选择
* */
$(function () {
   $(".AddLiabilityPeople-Choice_one").change(function () {
       $(".AddLiabilityPeople-Choice_Two").fadeOut(0);
       var num=$(this).val();
       // alert(num);
       $.ajax({
           url:"AddAdminSelect",
           type:"post",
           data: ({num:num
           }),
           success:function (msg) {
               $(".AddAdmin-Region").html(msg);
           },
           error:function (meg) {
               
           }
       });
       $("#AddLiabilityPeople"+num).fadeIn(500);
   });
/*
* 当第二个负责人选择框的值发生改变时触发次事件
* */
    $(".AddLiabilityPeople-Choice_Two").change(function () {
        var num=$(this).val();
        if(num=="0")
        {
            num=$(".AddLiabilityPeople-Choice_one").val();
        }
        $.ajax({
            url:"AddAdminSelect",
            type:"post",
            data: ({num:num
            }),
            success:function (msg) {
                $(".AddAdmin-Region").html(msg);
            },
            error:function (meg) {

            }
        });
    });

    /*
    * 当输入密码的框市区焦点的时候触发事件
    * */
    $('input:password[name="AdminLoginPwdOne"]').focusout(function () {
        // alert(123456);
        var Password=$(this).val();
        var ret = /^[A-Z]{2}[A-Za-z0-9]{4,16}$/;
        if(!ret.test(Password))
        {
            $.showBox("请按照正确格式填写！");
            $(this).next("label").html("格式错误").css("color","red");
        }
        else
        {
            $(this).next("label").html("");
        }
    });
    /*
    * 当确认密码输入框失去焦点的时候触发事件
    * */
    $('input:password[name="AdminLoginPwdTwo"]').focusout(function () {
        var password_1=$('input:password[name="AdminLoginPwdOne"]').val();
        var Password_2=$(this).val();
        var ret = /^[A-Z]{2}[A-Za-z0-9]{4,16}$/;
        if(!ret.test(Password_2))
        {
            $.showBox("请按照正确格式填写！");
            $(this).next("label").html("格式错误").css("color","red");
        }
        else
        {
            $(this).next("label").html("");
            if(password_1===Password_2)
            {
                $(this).next("label").html("√").css("color","green");
                $('input:password[name="AdminLoginPwdOne"]').next("label").html("√").css("color","green");
            }
            else
            {
                $.showBox("密码前后不一致，请检查！");
                $('input:password[name="AdminLoginPwdOne"]').next("label").html("");
                $(this).next("label").html("请检查！").css("color","red");
            }
        }
    });
    /*
    * 当账号输入框失去焦点的时候触发事件
    * */
    $('input:text[name="AdminAccount"]').focusout(function () {
        // alert(123456);
        var Account=$(this).val();
        var ret = /^[A-Za-z0-9]{4,18}$/;
        if(!ret.test(Account))
        {
            $.showBox("请按照正确格式填写账号！");
            $(this).next("label").html("格式错误").css("color","red");
        }
        else
        {
            $(this).next("label").html("");
        }
    });
    /*
    * 当手机号输入框失去焦点的时候触发事件
    * */
    $('input:text[name="AdminPhoneNum"]').focusout(function () {
        // alert(123456);
        var PhoneNum=$(this).val();
        var ret = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if(!ret.test(PhoneNum))
        {
            $.showBox("请按照正确格式填写手机号！");
            $(this).next("label").html("格式错误").css("color","red");
        }
        else
        {
            $(this).next("label").html("");
        }
    });
    $('input:text[name="AdminAge"]').focusout(function () {
        // alert(123456);
        var AdminAge=$(this).val();
        if(AdminAge!="")
        {
            var ret = /^[0-9]{1,2}$/;
            if(!ret.test(AdminAge))
            {
                $.showBox("请输入准确年龄！");
                $(this).next("label").html("错误").css("color","red");
            }
            else
            {
                $(this).next("label").html("");
            }
        }

    });

});
/*
* 当点击提交按钮的时候触发事件
* */
function AddAdminSubmit() {
    var AdminName=$('input:text[name="AdminName"]').val();
    var AdminAccount=$('input:text[name="AdminAccount"]').val();
    var AdminPhoneNum=$('input:text[name="AdminPhoneNum"]').val();
    var AdminAge=$('input:text[name="AdminAge"]').val();
    var AdminSex=$("input[name='AdminSex']:checked").val();
    var password_2=$('input:password[name="AdminLoginPwdTwo"]').val();
    var password_1=$('input:password[name="AdminLoginPwdOne"]').val();
    // alert(password_1);alert(password_2);
    var AddLiabilityPeoplePid="";
    var AddLiabilityPeopleCid="";
    var AdminRegion=$("#AdminRegion-Add").val();
    var PwdRet = /^[A-Z]{2}[A-Za-z0-9]{4,16}$/;
    var AccountRet = /^[A-Za-z0-9]{4,18}$/;
    var PhoneNumRet = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if(AdminRegion==""||typeof(AdminRegion) == "undefined"||AdminRegion=="0" )
    {
        $.showBox("请选择负责区域！");
    }
    else
    {
        var num=$(".AddLiabilityPeople-Choice_one").val();
        if(num=="0")
        {
            AddLiabilityPeoplePid = 0;
            AddLiabilityPeopleCid = 0;
        }
        else if(num!="0" && $("#AddLiabilityPeople" + num).length<=0)
        {
            AddLiabilityPeoplePid = num;
            AddLiabilityPeopleCid = num;
        }
        else {
            var num_2 = $("#AddLiabilityPeople" + num).val();
            if (num_2 == "0") {
                AddLiabilityPeoplePid = num;
                AddLiabilityPeopleCid = num;
            }
            else {
                AddLiabilityPeoplePid = num_2;
                AddLiabilityPeopleCid = num + "," + num_2;
            }
        }

        if(AdminName=="")
        {
            $.showBox("请输入名字！");
        }
        else if(AdminAccount=="" || !AccountRet.test(AdminAccount))
        {
            $.showBox("请正确输入账号！");
        }
        else if(AdminPhoneNum=="" || !PhoneNumRet.test(AdminPhoneNum))
        {
            $.showBox("请正确填写手机号！");
        }
        else if(AdminSex=="")
        {
            $.showBox("请选择性别！");
        }
        else if(password_1=="" || !PwdRet.test(password_1))
        {
            $.showBox("请设置登录密码！");
        }
        else if(password_2=="" || !PwdRet.test(password_2))
        {
            $.showBox("请确认登录密码！");
        }
        else if(password_2!==password_1)
        {
            $.showBox("两次密码不一致！");
        }
        else
        {
            // alert(password_1);alert(password_2);
            $.ajax({
                url:"Add",
                type:"post",
                data: ({AdminName:AdminName,
                    AdminAccount:AdminAccount,
                    AdminPhoneNum:AdminPhoneNum,
                    AdminAge:AdminAge,
                    AdminSex:AdminSex,
                    password_1:password_1,
                    password_2:password_2,
                    AddLiabilityPeoplePid:AddLiabilityPeoplePid,
                    AddLiabilityPeopleCid:AddLiabilityPeopleCid,
                    AdminRegion:AdminRegion
                }),
                success:function (msg) {
                    if(msg=="success")
                    {
                        $.showBox("添加成功！");
                        window.location.reload();
                    }
                    else if(msg=="error")
                    {
                        $.showBox("添加失败！");
                    }
                    else
                    {
                        $.showBox(msg);
                    }
                },
                error:function () {

                }
            })
        }
    }
}

/*
* 密码重置按钮
* */
function PwdRes(data) {
    $('input:hidden[name="SureResPwdNum"]').val(data);
    $(".Admin-pwd-Res-Box").fadeIn(500);
}

function SureResPwd() {
    var num=$('input:hidden[name="SureResPwdNum"]').val();
    $.ajax({
        url:"ResPwd",
        type:"post",
        data:({num:num}),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("密码重置成功！");
                $('input:hidden[name="SureResPwdNum"]').val("");
                $(".Admin-pwd-Res-Box").fadeOut(500);
            }
            else
            {
                $.showBox("密码已重置！");
                $('input:hidden[name="SureResPwdNum"]').val("");
                $(".Admin-pwd-Res-Box").fadeOut(500);
            }
        },
        error:function () {
            $.showBox("密码重置失败！");
        }
    });
}
function CancelResPwd() {
    var num=$('input:hidden[name="SureResPwdNum"]').val("");
    $(".Admin-pwd-Res-Box").fadeOut(500);
}


/*
* 关键字搜索
* */

function KeywordSearch() {
    var text=$('input:text[name="KeywordSearch"]').val();
    $.ajax({
        url:"KeywordSearch",
        type:"post",
        data:({key:text}),
        success:function (msg) {
            $(".AdminList-table").html(msg);
        },
        error:function (msg) {
            
        }
    });
}


