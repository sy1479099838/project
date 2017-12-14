// 商品添加按钮打开
function AddGoods() {
    $(".Goods-AddMenu-Box").fadeIn(700);
}
// 商品关闭添加按钮
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
// 商品添加的提交按钮
function AddGoodsSubmit(){
    var fg = new FormData();
    fg.append("upload", 1);
    fg.append("upfile", $("#img2").get(0).files[0]);
    $.ajax({
        url: "/manage/view/goods/Goodslist/Goods-AddMenu-Box",
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
                var SjName=$('input:text[name="sjName"]').val()
                var AddLiabilityGoodsPid="";
                var AddLiabilityGoodsCid="";
                var num=$(".AddLiabilityGoods-Choice_one").val();
                var Price=$('#input[name="price"]').val();
                var ActivePrice=$('#input[name="activeprice"]').val();
                var Number=$('#input[name="number"]').val();
                var StartDate=$("input[name='start_date']").val();
                var EndDate=$("input[name='end_date']").val();
                var Head=msg;
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
                else if(Head=="")
                {
                    $.showBox("请上传头像");
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
                else{
                    $.ajax({
                        type:'post',
                        url:'AddGoods',
                        data:({
                            GoodsName:GoodsName,
                            SjName:SjName,
                            AddLiabilityGoodsPid:AddLiabilityGoodsPid,
                            AddLiabilityGoodsCid:AddLiabilityGoodsCid,
                            Price:Price,
                            ActivePrice:ActivePrice,
                            Number:Number,
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
function UpMenu(id) {
    $.ajax({
        url:"/manage/goods/Goodslist/UpMenu",
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
        $("#"+num).fadeIn(700);//将id与所选中的option的值相同相同的盒子显示
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

function Xiangyu(){
    var  Value =document.getElementById('newsEditor').innerHTML;
    alert(Value);
}


/*商品详情预览页面*/
/*var Sys = (function(ua){
    var s = {};
    s.IE = ua.match(/msie ([\d.]+)/)?true:false;
    s.Firefox = ua.match(/firefox\/([\d.]+)/)?true:false;
    s.Chrome = ua.match(/chrome\/([\d.]+)/)?true:false;
    s.IE6 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 6))?true:false;
    s.IE7 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 7))?true:false;
    s.IE8 = (s.IE&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1] == 8))?true:false;
    return s;
})(navigator.userAgent.toLowerCase());/!*判断是哪一种浏览器,火狐,谷歌,ie*!/*/
$(function () {
    

var $ = function (id) {
    return document.getElementById(id);
}; /*获取元素,模仿jQuery*/
var Css = function(e,o){ /*更改对象的top,left,width,height来控制对象的大小*/
    for(var i in o)
        e.style[i] = o[i];
};
var Extend = function(destination, source) { /*拷贝对象的属性*/
    for (var property in source) {
        destination[property] = source[property];
    }
};
/*直接调用方法*/
var Bind = function(object, fun) {
    var args = Array.prototype.slice.call(arguments).slice(2);
    return function() {
        return fun.apply(object, args);
    }
};
/*直接调用方法,并将事件的类型传入作为第一个参数*/
var BindAsEventListener = function(object, fun) {
    var args = Array.prototype.slice.call(arguments).slice(2);
    return function(event) {
        return fun.apply(object, [event || window.event].concat(args));
    }
};
/*获取当前元素的属性*/
var CurrentStyle = function(element){
    return element.currentStyle || document.defaultView.getComputedStyle(element, null);
};
/*事件监听,执行对应的函数*/
function addListener(element,e,fn){
    element.addEventListener?element.addEventListener(e,fn,false):element.attachEvent("on" + e,fn);
};
/*事件的移除*/
function removeListener(element,e,fn){
    element.removeEventListener?element.removeEventListener(e,fn,false):element.detachEvent("on" + e,fn)
};
/*创建一个新的可以拖拽的,变换大小的对象*/
var Class = function(properties){
    var _class = function(){return (arguments[0] !== null && this.initialize && typeof(this.initialize) == 'function') ? this.initialize.apply(this, arguments) : this;};
    _class.prototype = properties;
    return _class;
};
var Resize =new Class({
    initialize : function(obj){
        this.obj = obj;
        this.resizeelm = null;
        this.fun = null; //记录触发什么事件的索引
        this.original = []; //记录开始状态的数组
        this.width = null;
        this.height = null;
        this.fR = BindAsEventListener(this,this.resize);  /*拖拽去更改div的大小*/
        this.fS = Bind(this,this.stop);  /*停止移除监听的事件*/
    },
    set : function(elm,direction){
        if(!elm)return;
        this.resizeelm = elm;
        /*点击事件的监听,调用start函数去初始化数据,监听mousemove和mouseup,这两个事件,当mouseover的时候,去更改div的大小,当mouseup,去清除之前监听的两个事件*/
        addListener(this.resizeelm,'mousedown',BindAsEventListener(this, this.start, this[direction]));
        return this;
    },
    start : function(e,fun){
        this.fun = fun;
        this.original = [parseInt(CurrentStyle(this.obj).width),parseInt(CurrentStyle(this.obj).height),parseInt(CurrentStyle(this.obj).left),parseInt(CurrentStyle(this.obj).top)];
        console.log({width:this.original[0],height:this.original[1],left:this.original[2],top:this.original[3]}) ;
        this.width = (this.original[2]||0) + this.original[0];
        this.height = (this.original[3]||0) + this.original[1];
        addListener(document,"mousemove",this.fR);
        addListener(document,'mouseup',this.fS);
    },
    resize : function(e){
        this.fun(e);
        /*失去焦点的时候,调用this.stop去清除监听事件*/
        Sys.IE?(this.resizeelm.onlosecapture=function(){this.fS(); }):(this.resizeelm.onblur=function(){this.fS();})
    },
    stop : function(){
        removeListener(document, "mousemove", this.fR);
        removeListener(document, "mousemove", this.fS);
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();      /**清除选中的内容*/
    },
    up : function(e){
        this.height>e.clientY?Css(this.obj,{top:e.clientY + "px",height:this.height-e.clientY + "px"}):this.turnDown(e);
    },
    down : function(e){
        e.clientY>this.original[3]?Css(this.obj,{top:this.original[3]+'px',height:e.clientY-this.original[3]+'px'}):this.turnUp(e);
    },
    left : function(e){
        e.clientX<this.width?Css(this.obj,{left:e.clientX +'px',width:this.width-e.clientX + "px"}):this.turnRight(e);
    },
    right : function(e){
        e.clientX>this.original[2]?Css(this.obj,{left:this.original[2]+'px',width:e.clientX-this.original[2]+"px"}):this.turnLeft(e)    ;
    },
    leftUp:function(e){
        this.up(e);this.left(e);
    },
    leftDown:function(e){
        this.left(e);this.down(e);
    },
    rightUp:function(e){
        this.up(e);this.right(e);
    },
    rightDown:function(e){
        this.right(e);this.down(e);
    },
    turnDown : function(e){
        Css(this.obj,{top:this.height+'px',height:e.clientY - this.height + 'px'});
    },
    turnUp : function(e){
        Css(this.obj,{top : e.clientY +'px',height : this.original[3] - e.clientY +'px'});
    },
    turnRight : function(e){
        Css(this.obj,{left:this.width+'px',width:e.clientX- this.width +'px'});
    },
    turnLeft : function(e){
        Css(this.obj,{left:e.clientX +'px',width:this.original[2]-e.clientX+'px'});
    }
});
window.onload = function(){
    new Resize($('ss')).set($('rUp'),'up').set($('rDown'),'down').set($('rLeft'),'left').set($('rRight'),'right').set($('rLeftUp'),'leftUp').set($('rLeftDown'),'leftDown').set($('rRightDown'),'rightDown').set($('rRightUp'),'rightUp');
};
});