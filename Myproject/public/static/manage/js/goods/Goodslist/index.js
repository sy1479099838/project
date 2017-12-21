// 商品添加按钮打开
function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
// 商品关闭添加按钮
function closeAddGoods() {
    $(".Goods-AddMenu-Box").fadeOut(1000);
}
function GoodsClassChoice(data) {
    alert(data);
    $.ajax({
        url:"",
        type:"post",
        data:({num:data}),
        success:function (msg) {
            // $(".Goodslist-table").html(msg);
        },
        error:function (meg) {

        }
    });

}
// 商品添加的提交按钮
function AddGoodsSubmit(){
    var GoodsName=$('input:text[name="goodsName"]').val();
    var ISBusiness=$("#BusinessChoice").length;
    var SjName="";
    if(ISBusiness=="1"){
        SjName=$('#BusinessChoice').val();
    }else{
        SjName="Business";
    }
    var Cid="";
    var pid="";
    var num_1=$(".AddLiabilityGoods-Choice_one").val();//获取第一个下拉框的值
    var Price=$('input[name="price"]').val();
    var ActivePrice=$('input[name="activeprice"]').val();
    var Number=$('input[name="number"]').val();
    var StartDate=$("input[name='start_time']").val();
    var EndDate=$("input[name='end_time']").val();
    var positionName=$("input:text[name='position-name']").val();
    var X=$("input:text[name='position-X']").val();
    var Y=$("input:text[name='position-Y']").val();
    var HotClass = $("input:checkbox[name='AddHot']:checked").map(function(index,elem) {
        return $(elem).val();
    }).get().join(',');

    if(num_1=="0"){
        $.showBox('请选择商品分类');
    }else{
        var num_2=$("#AddLiabilityGoods"+num_1).val();
        if(num_2=="0"){
            Cid=num_1;
            pid=num_1;
        }else{
            Cid=num_1+","+num_2;
            pid=num_2;
        }
    }
    if(GoodsName==""){
        $.showBox('请输入商品名');
    }else if(SjName=="")
    {
        $.showBox('请输商家名称');
    }else if (Price=="")
    {
        $.showBox("请输入商品原价")
    }
    else if (ActivePrice==""){
        $.showBox("请输入商品活动价")
    }
    else if (Number=="")
    {
        $.showBox("请输商品数量")
    }
    else if(StartDate=="")
    {
        $.showBox ("填写活动开始日期");
    }
    else if(EndDate=="")
    {
        $.showBox ("填写活动结束日期");
    }
    else if(positionName=="" || X=="" || Y=="")
    {
        $.showBox ("请选择商品位置！");
    }
    else{
         var result=uplode("doc","UploadImg");
         if(result=="success")
         {
             $.ajax({
                 type:'post',
                 url:'AddGoods',
                 data:({
                     GoodsName:GoodsName,
                     SjName:SjName,
                     Price:Price,
                     Cid:Cid,
                     ActivePrice:ActivePrice,
                     Number:Number,
                     StartDate:StartDate,
                     EndDate:EndDate,
                     positionName:positionName,
                     X:X,
                     Y:Y,
                     HotClass:HotClass,
                     pid:pid
                 }),
                 success:function(data){
                     if(data=="success")
                     {
                         $.showBox("商品添加成功！");
                         window.location.reload();
                     }
                     else if(data=="error")
                     {
                         $.showBox("商品添加失败！");
                         window.location.reload();
                     }
                     else
                     {
                         $.showBox(data);
                     }
                 }
             });
         }
         else
         {
             $.showBox("请选择照片！");
         }
    }
}

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
            $(this).children(".GoodsChoiceMenu-open").fadeIn();
            $(this).children(".GoodsChoiceMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()==="off")
        {
            $(this).children(".GoodsChoiceMenu-off").fadeIn();
            $(this).children(".GoodsChoiceMenu-open").fadeOut();
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


function UpMenu(id) {
    $.ajax({
        url:"UpMenu",
        type:"post",
        data:({id:id}),
        success:function (msg) {
            if (msg==suceess){
                $.showBox("操作成功！");
                $(".GoodsState"+id).val("open");
                $(".GoodsState"+id).next(".GoodsChoiceMenu-open").next(".GoodsChoiceMenu-off").fadeOut(0);
                $(".GoodsState"+id).next(".GoodsChoiceMenu-open").fadeIn(1000);
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
                    $(".GoodsState"+id).next(".GoodsChoiceMenu-open").fadeOut(0);
                    $(".GoodsState"+id).next(".GoodsChoiceMenu-open").next(".GoodsChoiceMenu-off").fadeIn(1000);
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
function Up_Menu(id) {
    $.ajax({
        url:"/manage/goods/Goodslist/Up_Menu",
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
            $.showBox("启用失败！请重试！！")
        }
    })
}
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
// 商品详情打开
function GoodsPK() {
    $(".GoodsPK-Menu-Box").fadeIn(700);
}
// 商品详情关闭
function closeGoodsPK() {
    $(".GoodsPK-Menu-Box").fadeOut(1000);
}
// 商品参数打开
function GoodsParameter() {
    $(".GoodsParameter-Menu-Box").fadeIn(700);
}
// 商品参数关闭
function closeGoodsParameter() {
    $(".GoodsParameter-Menu-Box").fadeOut(1000);
}
// 商品评论打开
function GoodsComment() {
    $(".GoodsComment-Menu-Box").fadeIn(700);
}
// 商品评论关闭
function closeGoodsComment() {
    $(".GoodsComment-Menu-Box").fadeOut(1000);
}

/*商品详情预览页面*/
//页面加载完毕后执行页面右边的函数
$(function () {
//页面加载完毕后执行页面右边的函数
    window.onload=function (){
        //通过ID找到元素 并且将它赋值给 变量oBox
        var oBox=document.getElementById('yulan-box');
        //声明X 代表以后要存储的数据类型是字符串 Y同上
        var X='';
        var Y='';
        //当鼠标点击盒子的时候触发 执行右边的函数   ev形参  向浏览器返回当前值 FireFox火狐 Chrome谷歌默认都是有一个值传进来的
        oBox.onmousedown=function (ev){
            //兼容IE和FireFox Chrome 只要一个为真就可以执行
            var iEvent=ev || event;
            //将盒子点击时获取的宽度赋值给W
            var W=oBox.offsetWidth;
            //将盒子点击时获取的宽度赋值给H
            var H=oBox.offsetHeight;
            //将盒子点击时获取的鼠标X轴的值赋值给disX
            var disX=iEvent.clientX;
            //将盒子点击时获取的鼠标Y轴的值赋值给disY
            var disY=iEvent.clientY;
            //将盒子的鼠标点击时的距离左边的距离和盒子的宽度总和 赋值给disW
            var disxW=oBox.offsetLeft+W;
            //将盒子的鼠标点击时的距离头部的距离和盒子的高度总和 赋值给dis
            var disyH=oBox.offsetTop+H;

            //这是判断是否当前点击的是盒子的四周
            //当盒子当前点击X轴的值大于 盒子的距离左边的值加盒子自身的宽度减去10像素时  就是表示已经点击到了盒子的右边框
            if(iEvent.clientX>oBox.offsetLeft+oBox.offsetWidth-10){
                //alert('碰到了盒子的右边！');
                //赋予上面X的值这时等于right  好用于下面的对比
                X='right';
                oBox.style.cursor='e-resize';
            }
            //当盒子当前点击X轴的值小于 盒子的距离左边的值10像素时  就是表示已经点击到了盒子的左边框
            else if(iEvent.clientX<oBox.offsetLeft+10){
                //alert('碰到了盒子的左边！');
                //赋予上面X的值这时等于left  好用于下面的对比
                X='left';
                oBox.style.cursor='e-resize';
            }
            //底端判断和顶部判断同上
            else if(iEvent.clientY>oBox.offsetTop+oBox.offsetHeight-10){
                //alert('你碰到了盒子的底部！');
                Y='bottom';
                oBox.style.cursor='s-resize';
            }
            else if(iEvent.clientY<oBox.offsetTop+10){
                //alert('你碰到了盒子的顶部！');
                Y='top';
                oBox.style.cursor='s-resize';
            }

            //当鼠标每移动一个像素点之时 触发 执行右边的函数  在事件前加document 是为了加大事件的作用域 移动时对整个页面文档有效
            document.onmousemove=function (ev){
                var iEvent=ev || event; //当当前的鼠标值减去之前获取的鼠标值为正数 那么正数加正数是增大
                if (X=='right') {       //当当前的鼠标值减去之前获取的鼠标值为负数 那么正数加负数是变小
                    oBox.style.width=W+(iEvent.clientX-disX)+'px';
                }                       //当当前的鼠标值减去之前获取的鼠标值为负数 那么正数减负数是负负得正 增大
                if(X=='left'){      //当当前的鼠标值减去之前获取的鼠标值为正数 那么正数减正数数是缩小
                    oBox.style.width=W-(iEvent.clientX-disX)+'px';
                    //需要修复的bug是左边拖动的时候 光改变宽度 盒子距离左边的值是不变的 这时候特殊的一点是需要改变盒子距离左边的值
                    //这时我是这样得到盒子在拖动过程中距离左边的值的 通过鼠标点击时 就获取盒子当前距离左边的值加盒子的宽度 然后在这里需要的时候
                    //换个比喻来说就是 12=5+7  12是盒子的距离左边的值5 加上盒子的宽度 7 得到的    这个时候我们得到了盒子的 距离左边的值和盒子的宽度
                    //很明显 我们直接用 盒子距离左边的值减去已知盒子的宽度 (这时候盒子的宽度是变化的 )那么就可以得到盒子距离左边的距离值.最后记得加上像素
                    oBox.style.left=disxW-oBox.offsetWidth+'px';

                }
                //顶部  和底端的拖动同上  同理可得
                if(Y=='bottom'){
                    oBox.style.height=H+(iEvent.clientY-disY)+'px';
                }
                if(Y=='top'){
                    oBox.style.height=H-(iEvent.clientY-disY)+'px';
                    oBox.style.top=disyH-oBox.offsetHeight+'px';
                }
            };
            //当拖动结束后 我们需要释放鼠标 添加鼠标按下松开事件 onmouseup 让鼠标点击不松 的事件为空 让鼠标每移动
            document.onmouseup=function (){
                document.onmousedown=null;
                document.onmousemove=null;//一像素的触发的事件为空
            }
        };

    };
});


/*商品照片批量添加*/
function uplode(idName,url){
    var fileCount = document.getElementById("dd").getElementsByTagName("img");
    if(fileCount.length<1)
    {
        return "error";
    }
    else
    {
        for(i=0;i<fileCount.length;i++)
        {
            var fd = new FormData();
            fd.append("upload", 1);
            fd.append("upfile", $("#"+idName).get(0).files[i]);
            $.ajax({
                url: url,
                type: "POST",
                processData: false,
                contentType: false,
                data: fd,
                success: function(msg) {
                    if(i==fileCount.length-1)
                    {
                        return "success";
                    }
                },
                error:function()
                {
                    $.showBox("第"+i+"张照片上传失败！");
                }
            });
        }

    }


}


//下面用于多图片上传预览功能
function setImagePreviews(avalue) {
    console.log(avalue);
    var docObj = document.getElementById("doc");
//    console.log(docObj.files);


    var dd = document.getElementById("dd");
    dd.innerHTML = "";
    var fileList = docObj.files;


    for (var i = 0; i < fileList.length; i++) {
        dd.innerHTML += "<div style='float: left;margin-top: 10px;' > <img id='img" + i + "'  /> </div>";
        var imgObjPreview = document.getElementById("img"+i);
        if (docObj.files && docObj.files[i]) {
            //火狐下，直接设img属性
            // imgObjPreview.style.display = 'block';
            imgObjPreview.style.width = '160px';
            imgObjPreview.style.height = '130px';
            imgObjPreview.style.margin = '5px';
            imgObjPreview.style.borderRadius = '5px';
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
            imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);
        }
        else {
            //IE下，使用滤镜
            docObj.select();
            var imgSrc = document.selection.createRange().text;
            var localImagId = document.getElementById("img" + i);
            //必须设置初始大小
            localImagId.style.width = "160px";
            localImagId.style.height = "130px";
            imgObjPreview.style.margin = '5px';
            imgObjPreview.style.borderRadius = '5px';
            //图片异常的捕捉，防止用户修改后缀来伪造图片
            try {
                localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
            }
            catch (e) {
                alert("您上传的图片格式不正确，请重新选择!");
                return false;
            }
            imgObjPreview.style.display = 'none';
            document.selection.empty();
        }
    }
    return true;

}


