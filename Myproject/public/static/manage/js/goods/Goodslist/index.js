// 添加按钮打开
function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
// 关闭添加按钮
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
// 商品添加
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

// 商品编辑
function EditGoods(data) {
    $.ajax({
        url:"",
        type:"post",
        data:({num:data}),
        success:function (msg) {
            if (msg==null)
            {
                $.showBox("你暂时没有查询条件！");
            }   else {
                $('.Goods-Edit-Box').html(msg);
                $('.Goods-Edit-Box').fedeIn(700);
            }
        },error:function (num) {

        }
    })
}
// 商品删除
function DelGoods(data) {
    alert("del"+date);
}
/*
 * 关键字搜索
 * */
function KeywordSearch() {
    var text=$('input:text[name="KeywordSearch"]').val();
    $.ajax({
        type:"post",
        data:({key:text}),
        url:"KeywordSearch",
        success:function (msg) {
            $(".Goodslist-table").html(msg);
        },error:function (msg) {
        }
    })
}
// 上下架
$(document).ready(function(){

    $(".GoodsMenu-Enable").each(function(){
        if($(this).children(".status").val()==="open")
        {
            $(this).children(".GoodsMenu-open").fadeIn();
            $(this).children(".GoodsMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()==="off")
        {
            $(this).children(".GoodsMenu-off").fadeIn();
            $(this).children(".GoodsMenu-open").fadeOut();
        }
    })

});
function UpMenu(id) {
    $.ajax({
        url:"",
        type:"post",
        data:({id:id}),
        success:function (msg) {
            if (msg==suceess){
                $.showBox("操作成功！");
                $(".GoodsState"+id).val("open");
                $(".GoodsState"+id).next(".GoodsMenu-open").next(".GoodsMenu-off").fadeOut(0);
                $(".GoodsState"+id).next(".GoodsMenu-open").fadeIn(1000);
            }
        },error:function (err) {
            $.showBox("操作失败！请重试！！")
        }
    })
}
function EndMenu(id) {
    if (id=="1"||id=="2"){
      $.showBox("对不起！你暂时无权限进行上下架操作！")
    }else {
        $.ajax({
            url:"",
            type:"post",
            data:({id:id}),
            success:function (msg) {
                if (msg==success){
                    $.showBox("操作成功！");
                    $(".GoodsState"+id).val(off);
                    $(".GoodsState"+id).next(".GoodsMenu-open").fadeOut(0);
                    $(".GoodsState"+id).next(".GoodsMenu-open").next(".GoodsMenu-off").fadeIn(1000);
                }
            },error:function (err) {
                $.showBox("操作失败！请重试！！")
            }
        })
    }
}

