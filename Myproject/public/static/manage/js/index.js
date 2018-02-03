function TopMenu(date) {
    alert(date);
}

function OutLogin() {
    $.ajax({
        url:"/manage/Common/Outlogin",
        type:"post",
        success: function(d) {
            $.showBox("退出成功！");
            window.location.reload();
        },
        error:function () {

        }
    })
}

$(function () {
   $(".information_Box a").mouseover(function () {
       $(this).css("background","#388158");
   });
   $(".information_Box a").mouseout(function () {
       $(this).css("background","#00923f");
   });
});

function place(date) {
    var myVideo=document.getElementById(date);
    if (myVideo.paused)
    {
        $(myVideo).siblings("button").text("暂停");
        myVideo.play();
    }
    else
    {
        $(myVideo).siblings("button").text("播放");
        myVideo.pause();
    }
}

function fileUpload (date) {
    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#fileUpload").get(0).files[0]);
    $.ajax({
        url: date,
        type: "POST",
        processData: false,
        contentType: false,
        data: fd,
        success: function(d) {
            $(".Index_subImg").show();
            var href = $(".Index_subImg")[0].src;
            $(".Index_subImg").attr('src',href+"/uploads/"+d);
        }
    });
}

function tijiao() {
    var neirong=$('#JContent').serialize();
    $.ajax({
        // cache: true,
        type: "POST",
        url:"/manage/Index/file",
        data:neirong["content"],
        dataType: "json",
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            $("#commonLayout_appcreshi").parent().html(data);
        }
    });
}

function Submit() {
    var asdf=$("#submit").val();
    alert(asdf);
    $.ajax({
        type: "POST",
        url:"/manage/Index/file",
        data:asdf,
        dataType: "json",
        error: function(request) {
            alert("Connection error");
        },
        success: function(data) {
            $("#commonLayout_appcreshi").parent().html(data);
        }
    });
}





$(function() {
    $("#pic").click(function () {
        $("#upload").click(); //隐藏了input:file样式后，点击头像就可以本地上传
        $("#upload").on("change",function(){
            var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
            if (objUrl) {
                $("#pic").attr("src", objUrl) ; //将图片路径存入src中，显示出图片
            }
        });
    });
});

//建立一個可存取到該file的url
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}

$(document).ready(function(){
    $(".NowPosition").css("color","green");
    var position_1=$("#OpenTree_1").children("p").html();
    var Position_3=$(".NowPosition").html();

    if($("#OpenTree_2").length>0)
    {
        var Position_2=$("#OpenTree_2").next("p").html();
        $("#PositionName").html(position_1+" > "+Position_2+" > "+Position_3);
    }else
    {
        $("#PositionName").html(position_1+" > "+Position_3);
    }

});

$.extend({showBox:function (msg) {
    $(".prompt_Box").empty();
    $(".prompt_Box").append(msg).fadeIn(200);
    $('.prompt_Box').delay(700).fadeOut(200);
}});



$(function () {
    $(".TreeMenuOne-switch").click(function () {
        var display=$(this).parents("p").next(".treeMenu-one").css('display');
        if(display=="none")
        {
            $(this).children("img").attr('src',"/public/static/manage/images/closeFile.png");
            $(this).parents("p").next(".treeMenu-one").slideDown(500);

        }
        else
        {
            $(this).children("img").attr('src',"/public/static/manage/images/openFile.png");
            $(this).parents("p").next(".treeMenu-one").children("dt").children("button").children("img").attr('src',"/public/static/manage/images/openFile.png");
            $(this).parents("p").next(".treeMenu-one").children(".treeMenu-three").slideUp(500);
            $(this).parents("p").next(".treeMenu-one").slideUp(500);

        }
    });

    $(".TreeMenuTwo-switch").click(function () {
        var display=$(this).parents("dt").next(".treeMenu-three").css('display');
        if(display=="none")
        {
            $(this).children("img").attr('src',"/public/static/manage/images/closeFile.png");
            $(this).parents("dt").next(".treeMenu-three").slideDown(500);
        }
        else
        {
            $(this).children("img").attr('src',"/public/static/manage/images/openFile.png");
            $(this).parents("dt").next(".treeMenu-three").slideUp(500);
        }
    })
});
$(document).ready(function(){
    $("#treeOpen_1").slideDown(500);
    $("#treeOpen_1").prev("p").children(".TreeMenuOne-switch").children("img").attr('src',"/public/static/manage/images/closeFile.png");
    $("#treeOpen_2").slideDown(500);
    $("#treeOpen_2").prev("dt").children(".TreeMenuTwo-switch").children("img").attr('src',"/public/static/manage/images/closeFile.png");
});


function FormInfo(forname,url,id){
    var form = new FormData(document.getElementById(forname));
    var result;
    $.ajax({
        url:url+"/id/"+id,
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function(data){
            result=data;
        },
        error:function(e){
            alert("错误！！");
            result="error";
        }
    });
    return result;
}

function affirm(msg,hanshu) {
    var text='<button onclick="'+hanshu+'">确&nbsp;&nbsp;认</button>' +
        '&nbsp;&nbsp;&nbsp;' +
        '<button id="closeSure" onclick="closeSure()">取&nbsp;&nbsp;消</button>';
    $(".Sure-Box>.sure-button").append(text);
    $(".Sure-Box>.sure-text").html(msg);
    $(".Sure-Box").fadeIn(100);
}
function closeSure() {
    $(".Sure-Box").fadeOut(100);
    $(".Sure-Box>.sure-button").html("");
}

function fisker_encode_v2(s){
    var es = [],c='',ec='';
    s = s.split('');//10.19补 忘记ie不能下标访问字符串
    for(var i=0,length=s.length;i<length;i++){
        c = s[i];
        ec = encodeURIComponent(c);
        if(ec==c){
            ec = c.charCodeAt().toString(16);
            ec = ('00' + ec).slice(-2);
        }
        es.push(ec);
    }
    return es.join('').replace(/%/g,'').toUpperCase();
}


function publicFenYe(nowPage,page,AllPage)
{
    var currentUrl = this.location.href;
    var result=currentUrl.split("&");
    var pages='';
    if(page=="Previous")
    {
        if(nowPage!="1")
        {
            pages=fisker_encode_v2((parseInt(nowPage)-1));
            window.location.href=result[0]+"&page="+pages;
        }
    }
    else if(page=="next")
    {
        if(nowPage!=AllPage)
        {
            pages=fisker_encode_v2((parseInt(nowPage)+1));
            window.location.href=result[0]+"&page="+pages;
        }
    }
    else
    {
        if(page!=nowPage)
        {
            pages=fisker_encode_v2(page);
            window.location.href=result[0]+"&page="+pages;
        }

    }

}


