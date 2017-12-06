

/*
* 当负责人选择框第一个的值发生改变的时候触发
*返回后台进行区域选择
* */
$(function () {
   $(".EditLiabilityPeople-Choice_one").change(function () {
       $(".EditLiabilityPeople-Choice_Two").fadeOut(0);
       var num=$(this).val();
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
       $("#EditLiabilityPeople"+num).fadeIn(500);
   });
/*
* 当第二个负责人选择框的值发生改变时触发次事件
* */
    $(".EditLiabilityPeople-Choice_Two").change(function () {
        var num=$(this).val();
        if(num=="0")
        {
            num=$(".EditLiabilityPeople-Choice_one").val();
        }
        $.ajax({
            url:"AddAdminSelect",
            type:"post",
            data: ({num:num
            }),
            success:function (msg) {
                $(".EditAdmin-Region").html(msg);
            },
            error:function (meg) {

            }
        });
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
    /*
    * 当年龄输入框失去焦点时触发
    * */
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
    /*
    * 加载前自动执行将第二个下拉框显示
    * */
    $(document).ready(function () {
        var num=$(".EditLiabilityPeople-Choice_one").val();
        $("#EditLiabilityPeople"+num).fadeIn(0);
    });
    
    
});
/*
* 当点击提交按钮的时候触发事件
* */
function EditAdminSubmit(data) {
    var AdminName=$('input:text[name="EditAdminName"]').val();
    var AdminAccount=$('input:text[name="EditAdminAccount"]').val();
    var AdminPhoneNum=$('input:text[name="EditAdminPhoneNum"]').val();
    var AdminAge=$('input:text[name="EditAdminAge"]').val();
    var AdminSex=$("input[name='EditAdminSex']:checked").val();
    var AddLiabilityPeoplePid="";
    var AddLiabilityPeopleCid="";
    var AdminRegion=$("#AdminRegion-Add").val();
    var AccountRet = /^[A-Za-z0-9]{4,18}$/;
    var PhoneNumRet = /^1[3|4|5|7|8][0-9]\d{8}$/;
    if(AdminRegion==""||typeof(AdminRegion) == "undefined"||AdminRegion=="0" )
    {
        $.showBox("请选择负责区域！");
    }
    else
    {
        var num=$(".EditLiabilityPeople-Choice_one").val();
        if(num=="0")
        {
            AddLiabilityPeoplePid = 0;
            AddLiabilityPeopleCid = 0;
        }
        else if(num!="0" && $("#EditLiabilityPeople" + num).length<=0)
        {
            AddLiabilityPeoplePid = num;
            AddLiabilityPeopleCid = num;
        }
        else {
            var num_2 = $("#EditLiabilityPeople" + num).val();
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
        else
        {
            $.ajax({
                url:"SaveEdit",
                type:"post",
                data: ({AdminName:AdminName,
                    AdminPhoneNum:AdminPhoneNum,
                    AdminAge:AdminAge,
                    AdminSex:AdminSex,
                    AddLiabilityPeoplePid:AddLiabilityPeoplePid,
                    AddLiabilityPeopleCid:AddLiabilityPeopleCid,
                    AdminRegion:AdminRegion,
                    num:data
                }),
                success:function (msg) {
                    if(msg=="success")
                    {
                        $.showBox("编辑成功！");
                        window.location.reload();
                    }
                    else if(msg=="error")
                    {
                        $.showBox("编辑失败！");
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