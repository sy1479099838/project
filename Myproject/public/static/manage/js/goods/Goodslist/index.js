// 商品添加按钮打开
function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
// 商品关闭添加按钮
function closeAddGoods() {
    $(".Goods-AddMenu-Box").fadeOut(1000);
}

/*
* 分类查询
* */

function ClassSeach(date) {
    var currentUrl = this.location.href;
    var result=currentUrl.split("&");
    date=fisker_encode_v2(date);
    var href=result[0];
    window.location.href=href+"&Classify="+date;
}

function nowHref() {
    var currentUrl = this.location.href;
    return currentUrl;
}
/*
* 关键字搜索
* */
$(function () {
    $("#KeyWords").click(function () {
        var key=fisker_encode_v2($("input:text[name=KeywordSearch]").val());
        var currentUrl = nowHref();
        var result=currentUrl.split("&");
        var href=result[0];
        window.location.href=href+"&KeyWords="+key;
    });
});

function EditGoods() {
    $(".EditGoods-EditMenu-Box").fadeIn(700);
}
// 商品编辑关闭
function closeEditGoods() {
    $(".EditGoods-EditMenu-Box").fadeOut(1000);
}

// 商品删除
function DelGoods(data) {
    alert(data);
}

// 上下架
$(document).ready(function(){

    $(".GoodsChoice").each(function(){
        if($(this).children(".status").val()=="1")
        {
            $(this).find(".GoodsChoiceMenu-open").fadeIn();
            $(this).find(".GoodsChoiceMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()=="0")
        {
            $(this).find(".GoodsChoiceMenu-off").fadeIn();
            $(this).find(".GoodsChoiceMenu-open").fadeOut();
        }
    })

});



/*
* 插入地图
* */
$(function () {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(104.750115,31.472747);
    map.centerAndZoom(point,12);
    map.enableScrollWheelZoom(true);
    var geoc = new BMap.Geocoder();
    map.addEventListener("click", function(e){
        //通过点击百度地图，可以获取到对应的point, 由point的lng、lat属性就可以获取对应的经度纬度
        var pt = e.point;
        geoc.getLocation(pt, function(rs){
            //addressComponents对象可以获取到详细的地址信息
            var addComp = rs.addressComponents;
            var site = addComp.province +  addComp.city  + addComp.district  + addComp.street  + addComp.streetNumber;
            //将对应的HTML元素设置值
            map.clearOverlays();//清除所有标注

            var point = new BMap.Point(pt.lng,pt.lat);
            map.centerAndZoom(point , 11);
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);
            map.centerAndZoom(point,12);
            $('input:text[name="position-name"]').val(site);
            $('input:text[name="position-X"]').val(pt.lng);
            $('input:text[name="position-Y"]').val(pt.lat);
        });
    });
    map.centerAndZoom(point,11);
    $("#Map-serch").click(function () {
        var name=$('input:text[name="Map-serch"]').val();
        if(name != ""){
            map.centerAndZoom(name,11);      // 用城市名设置地图中心点
        }
    });
});


function goodsUp(id,state) {
    $.ajax({
        url:"goodsUp",
        type:"post",
        data:({
            id:id,
            state:state
        }),
        success:function (msg) {
            if (msg=="success"){
                if(state=="1")
                {
                    $("#xiajia"+id).fadeOut(0);
                    $("#shangjia"+id).fadeIn(200);
                }
                else
                {
                    $("#shangjia"+id).fadeOut(0);
                    $("#xiajia"+id).fadeIn(200);
                }
            }
            else if(msg=="error")
            {
                $.showBox("操作失败，请重试！");
            }
            else
            {
                $.showBox(msg);
            }
        },error:function (err) {
            $.showBox("失败！请重试！！")
        }
    })
}
// 点击套餐事件
function PackageBox() {
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
        $("#AddLiabilityGoods"+num).fadeIn(700);//将id与所选中的option的值相同相同的盒子显示
    });

});

$(function(){
    $('.AddLiabilityGoods-Choice_two').change(function () {
        $(".Choice-hidden").fadeOut(0);//将所有class=hidden的盒子全部隐藏
        var num=$(this).val();//获取到所选中的option的值
        $("#Select"+num).fadeIn(700);//将id与所选中的option的值相同相同的盒子显示
    });

});
// 拼团启用
$(document).ready(function(){

    $(".GoodsFight").each(function(){
        if($(this).children(".status").val()=="1")
        {
            $(this).children(".GoodsGroup-open").fadeIn();
            $(this).children(".GoodsGroup-off").fadeOut();
        }
        else if($(this).children(".status").val()=="0")
        {
            $(this).children(".GoodsGroup-off").fadeIn();
            $(this).children(".GoodsGroup-open").fadeOut();
        }
    })

});
function End_Menu(id) {
    if (id=="1"||id=="2"){
        $.showBox("对不起！你暂时无权限进行启动操作！")
    }else {
        $.ajax({
            url:"/manage/goods/Goodslist/End_Menu",
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
                $.showBox("启用失败！请重试！！")
            }
        })
    }
}

// 商品详情关闭
function closeGoodsPK() {
    $(".GoodsPK-Menu-Box").fadeOut(1000);
    $(".X-Submit2").html("");
}
// 商品参数打开
function GoodsParameter() {
    $(".GoodsParameter-Menu-Box").fadeIn(700);
}
// 商品参数关闭
function closeGoodsParameter() {
    $(".GoodsParameter-Menu-Box").fadeOut(1000);
    $(".X-Submit2").html("");
}
// 商品评论打开
function GoodsComment() {
    $(".GoodsComment-Menu-Box").fadeIn(700);
}
// 商品评论关闭
function closeGoodsComment() {
    $(".GoodsComment-Menu-Box").fadeOut(1000);
}




/*\
* 图片预览
*
* */

function OpenMoreFile()
{
    document.getElementById("doc").click();
}
var imgfile=new Object();
function choseMoreImg() {
    $("#dd").html("");
    imgfile[0]="";
    var file = document.getElementById('doc').files;
    var fileNum=file.length;
    if(fileNum!=0)
    {
        var arr = Object.keys(imgfile);
        var oldNum = arr.length;
        for(j=oldNum;j<(fileNum+oldNum);j++)
        {
            imgfile[j]=file[j-oldNum];
        }
    }
    var arr2 = Object.keys(imgfile);
    var oldNum2 = arr2.length;
    for(i=1;i<oldNum2;i++)
    {
        var imgfiles = imgfile[i];
        var reader = new FileReader();
        reader.readAsDataURL(imgfiles);
        reader.onload = function (theFile) {
            var image = new Image();
            image.src = theFile.target.result;
            image.onload = function () {
                var width = this.width;
                var height = this.height;
                if(width==640 && height==320)
                {
                    var text='<div class="ImgShow fl">' +
                        '<img src="'+image.src+'" id="ImgShow'+i+'">'+
                        '</div>';
                    var result=$("#dd").append(text);
                }
                else
                {
                    delete imgfile[i];
                    $.showBox("请上传640*320照片！");
                }
            }
        }
    }
}
/*
 * 多图上传测试
 * */
function testUploadsImg() {

    // var form = new FormData(document.getElementById("ADDGoods-Form"));//获取表单数据
    var formArray = JSON.stringify($("#ADDGoods-Form").serializeArray());
    // console.log(formArray);
    var arr = Object.keys(imgfile);//获取照片的数量
    var oldNum = arr.length;
    if(oldNum<2)//如果没有选择照片，则返回提醒选择照片
    {
        $.showBox("请选择上传照片");
    }
    else
    {
        var formData = new FormData();
        for(i=1;i<=(oldNum+1);i++){
            formData.append("Image["+(i-1)+"]", imgfile[i]);
        }

        $.ajax({
            url: 'AddGoods/FormData/'+formArray,
            type: "POST",
            processData: false,
            contentType: false,
            data: formData,
            success: function (msg) {
                if(msg=="success")
                {
                    $("#dd").html("");
                    imgfile={0:""};
                    $.showBox("添加商品成功！");
                }
                else if(msg=="error")
                {
                    $("#dd").html("");
                    imgfile={0:""};
                    $.showBox("失败，请重试！");
                }
                else
                {
                    $.showBox(msg);
                }
                // console.log(msg);
            },
            error:function (msg) {
                $.showBox("失败！");
            }
        });
    }
}




function GoodsFenye(nowPage,page,AllPage) {
    publicFenYe(nowPage,page,AllPage);
}

/*商品详情查看*/
function check_muban(data){
    $.ajax({
        url:"Muban",
        type:"post",
        data:({
            Id:data
        }),
        success:function (msg) {
            $(".muban").html(msg);
            $(".muban").fadeIn();
        },
        error:function (msg) {

        }
    });

}

/**/
function close_check_muban(){
    $(".muban").fadeOut();
}

function previewFile1 () {
    var preview = document.getElementById('yulan_1');
    var imgfile=preview.getElementsByTagName('img')[0];
    var file=document.getElementById('abc').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        imgfile.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        imgfile.src = "";
    }
}
function xiugai(data,b){
    $.ajax({
        url:"MubanEdit",
        type:"post",
        data:({
            tmp:data,
            GoodId:b
        }),
        success:function (msg) {
            $(".mu_edit").html(msg);
            $(".mu_edit").fadeIn();
        },
        error:function (msg) {

        }
});

}
function closexiugai(){
    $(".mu_edit").fadeOut();
}

function SaveImg(good,tmp) {
    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#abc").get(0).files[0]);
    $.ajax({
        url: 'SaveImg/good/'+good+'/tmp/'+tmp,
        type: "POST",
        processData: false,
        contentType: false,
        data:fd,
        success: function(msg) {
            if(msg=="success")
            {
                $.showBox("照片上传成功！");
                window.location.reload();
            }
            else
            {
                $.showBox("照片上传失败！");
                window.location.reload();
            }
        },
        error:function()
        {
            $.showBox("照片上传失败！");
        }
    });
}
function Package(data) {
    alert();
}
/*
* 预览框
* */
$(document).ready(function(){
    var WinWidth= $(window).width();
    var WinHeight=$(window).height();
    //当鼠标按下左边框,并移动的时候，将盒子边框随着鼠标移动
    $(".moveLeft").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'left' : e.pageX+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    $(".moveRight").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'right' : (WinWidth-e.pageX)+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    $(".moveTop").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'top' : e.pageY+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    $(".moveBottom").mousedown(function(){
        $(document).mousemove(function(e){$(".MoveBox").css({'bottom' : (WinHeight-e.pageY)+'px'});showWidth();});
        $(document).mouseup(function(){$(this).unbind('mousemove');});
    });
    //当加载完成是自动将盒子居中并显示
    $(".MoveBox").css({'left' : ((WinWidth-326)/2)+'px','right' : ((WinWidth-326)/2)+'px'}).fadeIn(200);
    //当窗口大小改变时，将盒子居中显示
    window.onresize = function(){
        var WinWidth= $(window).width();
        $(".MoveBox").css({'left' : ((WinWidth-326)/2)+'px','right' : ((WinWidth-326)/2)+'px'});showWidth();
    }
});
function changeBox(width,height) {
    var WinWidth= $(window).width();
    var WinHeight=$(window).height();
    $(".MoveBox").css({'left' : ((WinWidth-width)/2)+'px','right' : ((WinWidth-width)/2)+'px','top':((WinHeight-height)/2)+'px','bottom':((WinHeight-height)/2)+'px'});showWidth();
}
function showWidth() {
    $(".showBoxWidth").text("宽度："+$(".MoveBox").width()+"， 高度："+$(".MoveBox").height());
}


$(document).ready(function(){

    $(".GoodsFight").each(function(){
        // alert($(this).children(".status").val());
        if($(this).children(".status").val()=="1")
        {
            $(this).children(".GoodsMenu-open").fadeIn();
            $(this).children(".GoodsMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()!="1")
        {
            $(this).children(".GoodsMenu-off").fadeIn();
            $(this).children(".GoodsMenu-open").fadeOut();
        }
    })

});


function switch_Menu(id,OpenStyle) {
    $.ajax({
        type: "POST",
        url: 'SwitchClass',
        data:({
            id:id,
            Style:OpenStyle
        }),
        success: function(msg){
            if(msg=="success")
            {
                $.showBox("操作成功！");
                if(OpenStyle==0)
                {
                    $("#GoodsGroup-open"+id).fadeOut(0);
                    $("#GoodsGroup-off"+id).fadeIn(200);
                }
                else
                {
                    $("#GoodsGroup-off"+id).fadeOut(0);
                    $("#GoodsGroup-open"+id).fadeIn(200);
                }

            }
            else if(msg=="error")
            {
                $.showBox("操作失败！");
            }
            else
            {
                $.showBox(msg);
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}
function check_tao(GoodsId){
    $.ajax({
        url:"package",
        type:"post",
        data:({
            GoodsId:GoodsId
        }),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox("失败，请重试！");
            }
            else
            {
                $(".taocan_1").html(msg);
                $(".taocan_1").fadeIn();
            }
        },
        error:function (msg) {
            $.showBox("失败，请重试！");
        }
    });

}
function cl_check_tao(){
    //alert(1111111);
    $(".taocan_1").fadeOut();
}

function Add_tao() {
    var count=$("input:hidden[name=PackageCount]").val();
    var text1='<form action="PackageSubmit" method="post" id="PackageSubmit'+count+'" class="Package-From" ><li>名称：<input type="text" name="Min" value="">' +
              '&nbsp;提醒：<input type="text" name="Tix" value="">' +
              '&nbsp;价格：<input type="text" name="Price" value="">' +
              '&nbsp;活动价：<input type="text" name="AcPrice" value="">' +
              '<input type="hidden" name="PackageID" value="0"></li></form><button class="Dle1" onclick="DEl(0,'+count+','+0+')" id="Del'+count+'" style="float:right;margin-top:-40px;width:10%;margin-right:5%;background:#00F7DE;border:none;border-radius: 3px;">删除</button>';
    $("#taocan").append(text1);
    $("input:hidden[name=PackageCount]").val(parseInt(count)+1);
}
function DEl(data,count,id){
    var msg="真的删除吗？";
    var hanshu="delPackage("+data+","+count+","+id+")";
    affirm(msg,hanshu);//自定义的弹窗函数
}
/*确认删除*/
function delPackage(data,count,id) {
    if(data==0){
        $('#PackageSubmit'+count).remove();
        $('#Del'+count).remove();
        closeSure();
    }
    else
    {
        $.ajax({
            url:"DelPackage",
            type:"post",
            data:({
                packageId:data,
                goodsId:id
            }),
            success:function (msg) {
                if(msg=="success")
                {
                    $('#PackageSubmit'+count).remove();
                    $('#Del'+count).remove();
                    closeSure();
                }
                else
                {
                    closeSure();
                    $.showBox("删除失败，请重试！");
                }
            },
            error:function (msg) {
                closeSure();
                $.showBox("删除失败，请重试！");
            }
        });

    }

}

function savePackage(goodsId) {
    $(".Package-From").each(function(){
        var formName=$(this).attr('id');
        var count= formName.replace(/[^0-9]/ig,"");
        var result=FormInfo(formName,"savePackage",goodsId);
        var text="";
        if(result=="error")
        {
            $(this).find("label").remove();
            text='<label style="color: red;">添加失败！</label>';
            $(this).append(text);
        }
        else if(result=="success")
        {
            $(this).find("label").remove();
            text='<label style="color: green;">更新成功！</label>';
            $(this).append(text);
        }
        else if(result=="none")
        {
            $(this).find("label").remove();
        }
        else if(!isNaN(result))
        {
            $(this).find("label").remove();
            $(this).find("input:hidden[name=PackageID]").val(result);
            text='<label style="color: green;">添加成功！</label>';
            $(this).next("button").remove();
            var button='<button class="Dle1" onclick="DEl('+result+','+count+','+goodsId+')" id="Del'+count+'" style="float:right;margin-top:-40px;width:10%;margin-right:5%;background:#00F7DE;border:none;border-radius: 3px;">删除</button>';
            $(this).append(button);
            $(this).append(text);
        }
        else
        {
            $(this).find("label").remove();
            text='<label style="color: green;">'+result+'</label>';
            $(this).append(text);
        }
    });
}

/*
* 点击显示封面上传框
* */
function upCover(id) {
    $.ajax({
        url:"ShowHead",
        data:({
            id:id
        }),
        type:"post",
        success:function (msg) {
            if(msg!="error")
            {
                $(".upCover-Box").html(msg);
                $(".upCover-Box").fadeIn();
            }
            else
            {
                $.showBox("失败，请重试！");
            }

        },
        error:function (msg) {
            $.showBox("失败！");
        }
    });

}

/*
* 选择照片
* */
function choceHead() {
    document.getElementById("CoverImg").click();
}

function yulanHead () {
    var file = document.getElementById('CoverImg').files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function () {
            var width = this.width;
            var height = this.height;
            if(width==320 && height==320)
            {
                $(".CoverImg-Img").attr("src",image.src);
            }
            else
            {
                $.showBox("请上传320*320照片！");
            }
        }
    }
}
/*
* 关闭封面
* */
function closeCover() {
    $(".upCover-Box").fadeOut();
}

/*
* 保存商品封面图
* */
function SaveCover(id) {
    var files = document.getElementById('CoverImg').files[0];
    var formData = new FormData();
    formData.append("files",files);
    $.ajax({
        url: 'SaveCover/id/'+id,
        type: "POST",
        processData: false,
        contentType: false,
        data: formData,
        success: function (msg) {
            if(msg=="success")
            {
                $.showBox("添加商品成功！");
                window.location.reload();
            }
            else if(msg=="error")
            {
                $.showBox("失败，请重试！");
            }
            else
            {
                $.showBox(msg);
            }
        },
        error:function (msg) {
            $.showBox("失败！");
            window.location.reload();
        }
    });
}