function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
function closeAddGoods() {
    $(".Goods-AddMenu-Box").fadeOut(1000);
}
// function AddGoodsSubmit() {
//     var GoodsName=$('input:text[name="GoodsName"]').val();
//     var SjName=$('input:text[name="SjName"]').val();
//     var AddLiabilityGoodsPid="";
//     var AddLiabilityGoodsCid="";
//     var GoodsRegion=$("#GoodsRegion-Add").val();
//     var Date=$("input[name='Date']").val();
//     if(GoodsRegion==""||typeof(GoodsRegion) == "undefined"||GoodsRegion=="0" )
//     {
//         $.showBox("请选择商品所属类别！");
//     }
//     else
//     {
//         var num=$(".AddLiabilityGoods-Choice_one").val();
//         if(num=="0")
//         {
//             AddLiabilityGoodsPid = 0;
//             AddLiabilityGoodsCid = 0;
//         }
//         else if(num!="0" && $("#AddLiabilityGoods" + num).length<=0)
//         {
//             AddLiabilityPeoplePid = num;
//             AddLiabilityPeopleCid = num;
//         }
//         else {
//             var num_2 = $("#AddLiabilityGoods" + num).val();
//             if (num_2 == "0") {
//                 AddLiabilityGoodsPid = num;
//                 AddLiabilityGoodsCid = num;
//             }
//             else {
//                 AddLiabilityGoodsPid = num_2;
//                 AddLiabilityGoodsCid = num + "," + num_2;
//             }
//         }
//         if(GoodsName=="")
//         {
//             $.showBox("请输入商品名称！");
//         }
//         else if(SjName=="" )
//         {
//             $.showBox("请正确商家名称！");
//         }
//         else if(Date=="")
//         {
//             $.showBox ("填写活动日期");
//         }
//         var fd = new FormData();
//         fd.append("upload", 1);
//         fd.append("upfile", $("#img2").get(0).files[0]);
//         $.ajax({
//             url: "UplodeImg",
//             type: "POST",
//             processData: false,
//             contentType: false,
//             data: fd,
//             success: function(msg) {
//                 if(msg=="error")
//                 {
//                     $.showBox("照片上传失败！");
//                 }
//                 else
//                 {
//                     var  Head=msg;
//
//                    if(Head==""){
//                         $.showBox("请上传头像");
//                     }}}})
//
//         else
//         {
//             $.ajax({
//                 url:"AddGoods",
//                 type:"post",
//                 data: ({GoodsName:GoodsName,
//                     SjName:SjName,
//                     AddLiabilityPeoplePid:AddLiabilityPeoplePid,
//                     AddLiabilityPeopleCid:AddLiabilityPeopleCid,
//                     head:head,
//                     Date:Date,
//                 }),
//                 success:function (msg) {
//                     if(msg=="success")
//                     {
//                         $.showBox("添加成功！");
//                         window.location.reload();
//                     }
//                     else if(msg=="error")
//                     {
//                         $.showBox("添加失败！");
//                     }
//                     else
//                     {
//                         $.showBox(msg);
//                     }
//                 },
//                 error:function () {
//
//                 }
//             })
//         }
//     }
// }
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
function AddGoodsSubmit(){
    var fg = new FormData();
    fg.append("upload", 1);
    fg.append("upfile", $("#img2").get(0).files[0]);
    $.ajax({
        url: "UplodeImg",
        type: "POST",
        processData: false,
        contentType: false,
        data: fg,
        success: function(msg) {
            alert(123);
            if(msg=="error")
            {
                $.showBox("照片上传失败！");
            }
            else
            {
                var GoodsName=$('input:text[name="goodsName"]').val();
                var SjName=$('input:text[name="sjName"]').val();
                var AddLiabilityGoodsPid="";
                var AddLiabilityGoodsCid="";
                var GoodsRegion=$("#GoodsRegion-Add").val();
                var Date=$("input[name='date']").val();
                var Head=msg;
                // var AccountRet = /^[A-Za-z0-9]{4,18}$/;
                // var PwdRet = /^[A-Z]{2}[A-Za-z0-9]{4,16}$/;
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
                        var num_2 = $("#AddLiabilityGoods" + num).val();
                        if (num_2 == "0") {
                            AddLiabilityGoodsPid = num;
                            AddLiabilityGoodsCid = num;
                        }
                        else {
                            AddLiabilityGoodsPid = num_2;
                            AddLiabilityGoodsCid = num + "," + num_2;
                        }
                    }
                if(GoodsName==""){
                    $.showBox('请输入商品名');
                }else if(SjName=="")
                {
                    $.showBox('请输商家名称');
                }
                else if(Head==""){
                    $.showBox("请上传头像");
                }else if(Date=="")
                {
                    $.showBox ("填写注册日期");
                }
                else{
                    $.ajax({
                        type:'post',
                        url:'AddGoods',
                        data:({
                            GoodsName:GoodsName,
                            SjName:SjName,
                            AddLiabilityGoodsPid:AddLiabilityGoodsPid,
                            AddLiabilityGoodsCid:AddLiabilityGoodsCid,
                            Head:Head,
                            Hate:Date
                        }),
                        success:function(data){
                            if(data=="success")
                            {
                                $.showBox("商家添加成功！");
                                window.location.reload();
                            }
                            else if(data=="error")
                            {
                                $.showBox("商家添加失败！");
                                window.location.reload();
                            }
                            else
                            {
                                $.showBox(data);
                            }
                        }
                        });
                    }
                }


            }
        }
    });
}

