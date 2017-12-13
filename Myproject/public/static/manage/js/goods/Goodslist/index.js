// 添加按钮打开
function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
// 关闭添加按钮
function closeAddGoods() {
    $(".Goods-AddMenu-Box").fadeOut(1000);
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
// 商品添加/编辑提交
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
                var StartDate=$("input[name='start_date']").val();
                var EndDate=$("input[name='end_date']").val();
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
                }else if(StartDate=="")
                {
                    $.showBox ("填写活动开始日期");
                }
                else if(EndDate=="")
                {
                    $.showBox ("填写活动结束日期");
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
                            StartDate:StartDate,
                            EndDate:EndDate,
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
// function EditGoods(data) {
//     $.ajax({
//         url:"/manage/view/goods/Goodslist/Goodslist",
//         type:"post",
//         data:({num:data}),
//         success:function (msg) {
//             if (msg==null)
//             {
//                 $.showBox("你暂时没有查询条件！");
//             }   else {
//                 $('.EditGoods-EditMenu-Box').html(msg);
//                 $('.EditGoods-EditMenu-Box').fadeIn(700);
//             }
//         },error:function (num) {
//
//         }
//     })
// }
function EditGoods() {
    $(".EditGoods-EditMenu-Box").fadeIn(700);
}
// 商品编辑关闭
function closeEditGoods() {
    $(".EditGoods-EditMenu-Box").fadeOut(1000);
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

    $(".GoodsChoice").each(function(){
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
        url:"/manage/goods/Goodslist/UpMenu",
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
            $.showBox("上架失败！请重试！！")
        }
    })
}
function EndMenu(id) {
    if (id=="1"||id=="2"){
      $.showBox("对不起！你暂时无权限进行上下架操作！")
    }else {
        $.ajax({
            url:"/manage/goods/Goodslist/EndMenu",
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
                $.showBox("下架失败！请重试！！")
            }
        })
    }
}
// 点击套餐事件
function PackageBox() {
    // $.ajax({
    //     url:"/manage/view/goods/Goodslist/",
    //     type:"post",
    //     data:({data:data}),
    //     success:function (msg) {
    //         $(".Package-Menu-Box").html(msg);
    //         $(".Package-Menu-Box").fadeIn(700);
    //     },error:function (meg) {
    //
    //     }
    // })
    $(".Package-Menu-Box").fadeIn(700);
}
function closeShow() {
    $(".Package-Menu-Box").fadeOut(1000);

}

/*日期插件配置*/

layui.use(['form', 'laydate'], function() {
    var form = layui.form
        , laydate = layui.laydate;

    //日期
    laydate.render({
        elem: '#date1',
        type: 'datetime'
    });
    laydate.render({
        elem: '#date2',
        type: 'datetime'

        /* ,lang: 'en'*/
    });
    laydate.render({
        elem: '#date3',
        type: 'datetime'
        /* ,lang: 'en'*/
    });
    laydate.render({
        elem: '#date4',
        type: 'datetime'
        /* ,lang: 'en'*/
    });
    laydate.render({
        elem: '#date5',
        type: 'datetime'
        /* ,lang: 'en'*/
    });
    laydate.render({
        elem: '#date6',
        type: 'datetime'
        /* ,lang: 'en'*/
    });
});

$(function(){
    $('.AddLiabilityGoods-Choice_one').change(function () {
        $(".Choice-hidden").fadeOut(0);//将所有class=hidden的盒子全部隐藏
        var num=$(this).val();//获取到所选中的option的值
        $("#"+num).fadeIn(700);//将id与所选中的option的值相同相同的盒子显示
    });

});
