function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
function AddGoodsSubmit() {
    var GoodsName=$('input:text[name="GoodsName"]').val();
    var SjName=$('input:text[name="SjName"]').val();

    var GoodsRegion=$("#GoodsRegion-Add").val();
    var Date=$("input[name='Date']").val();
    var head=msg;
    if(GoodsRegion==""||typeof(GoodsRegion) == "undefined"||GoodsRegion=="0" )
    {
        $.showBox("请选择商品所属类别！");
    }
    else
    {
        var num=$(".AddLiabilityGoods-Choice_one").val();
        if(num=="0")
        {
            AddLiabilityGoodsPid = 0;
            AddLiabilityGoodsCid = 0;
        }
        else if(num!="0" && $("#AddLiabilityGoods" + num).length<=0)
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
function GoodslistRegionChoice(data) {
    $.ajax({
        url:"GoodslistRegionChoice",
        type:"post",
        data:({num:data}),
        success:function (msg) {
            $(".Goodslist-table").html(msg);
        },
        error:function (meg) {

        }
    });

}