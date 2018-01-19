/**
 * Created by Administrator on 2018/1/17 0017.
 */
function AddCarousel() {
    $(".Carousel").fadeOut();
    $(".addCarousel").fadeIn(200);
}

function sureOrder(data) {
    var value=parseInt($("#order"+data).val());
    var oldNum=$("#order"+data).attr("name");
    if(value<=0)
    {
        $.showBox("排序不能为负数哦！");
    }
    else
    {
        var string="确认修改排序？";
        var hashu="saveOrder("+value+","+data+")";
        affirm(string,hashu);
        $("#closeSure").attr("onclick","closeOrder(\""+data+"\",\""+oldNum+"\")");
    }
}

function closeOrder(data,oldNum) {
    $("#order"+data).val(oldNum);
    $(".Sure-Box").fadeOut(100);
    $(".Sure-Box>.sure-button").html("");
}
function saveOrder(order,id) {
    $.ajax({
        url:"saveOrder",
        type:"post",
        data:({
            order:order,
            id:id
        }),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("修改成功！");
                $(".Sure-Box").fadeOut(100);
                $("#order"+id).attr("name",order);
                $(".Sure-Box>.sure-button").html("");
            }
            else
            {
                $.showBox("修改失败！");
                var oldNum=$("#order"+id).attr("name");
                $("#order"+id).val(oldNum);
                $(".Sure-Box").fadeOut(100);
                $(".Sure-Box>.sure-button").html("");
            }
        },
        error:function (msg) {
            $.showBox("对不起，修改失败！");
            var oldNum=$("#order"+id).attr("name");
            $("#order"+id).val(oldNum);
            $(".Sure-Box").fadeOut(100);
            $(".Sure-Box>.sure-button").html("");
        }
    });
}
function closeAddCarousel() {
    $(".addCarousel").fadeOut();
    $(".Carousel").fadeIn(200);
}

function F_Open_dialog()
{
    document.getElementById("btn_file").click();

}
function chosefile() {
    var imgfile = document.getElementById("btn_file").files[0];
    var prew=document.getElementById("CarouselImg");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload= function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            var width=this.width;
            var height=this.height;
            if(width==640 && height==320)
            {
                prew.src=image.src;
            }
            else
            {
                $.showBox("请上传640*320照片！");
            }

        }
    }
}

function EditOpen_dialog()
{
    document.getElementById("Editbtn_file").click();

}

function Editchosefile() {
    var imgfile = document.getElementById("Editbtn_file").files[0];
    var prew=document.getElementById("EditCarouselImg");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload= function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            var width=this.width;
            var height=this.height;
            if(width==640 && height==320)
            {
                prew.src=image.src;
            }
            else
            {
                $.showBox("请上传640*320照片！");
            }

        }
    }
}



function saveFrom() {

    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#btn_file").get(0).files[0]);
    $.ajax({
        url:"saveImg",
        type:"post",
        data:fd,
        processData:false,
        contentType:false,
        async:false,
        success:function(msg){
            if(msg!="error")
            {
                var form = new FormData(document.getElementById("addCarousel"));
                $.ajax({
                    url:"saveFrom/img/"+msg,
                    type:"post",
                    data:form,
                    processData:false,
                    contentType:false,
                    async:false,
                    success:function(msg){
                        if(msg=="success")
                        {
                            $.showBox("成功!");
                            window.location.reload();
                        }
                        else if(msg=="orderNULL")
                        {
                            alert("排序不能为空");
                        }
                        else if(msg=="hrefNULL")
                        {
                            alert("请填写正确的连接！");
                        }
                        else if(msg=="NameNULL")
                        {
                            alert("名称不能为空！");
                        }
                    },
                    error:function(e){
                        alert("错误！！");
                    }
                });
            }
        },
        error:function(e){
            alert("错误！！");
        }
    });

}

function EditCarousel(data) {
    $.ajax({
        url:"EditCarousel",
        type:"post",
        data:({
            id:data
        }),
        success:function (msg) {
            if(msg!="error")
            {
                $(".EditCarousel").html(msg);
                $(".Carousel").fadeOut();
                $(".EditCarousel").fadeIn(500);
            }

        },
        error:function (msg) {
            $.showBox("请重试");
        }
    });

}

function closeEditCarousel() {
    $(".EditCarousel").fadeOut();
    $(".Carousel").fadeIn(500);
}

function sureDel(data)
{
    var string="确认删除该数据？";
    var hashu="DelCarousel("+data+")";
    affirm(string,hashu);
}

function DelCarousel(data) {

    $.ajax({
        url:"delImg",
        type:"post",
        data:({
            id:data
        }),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("删除成功！");
                window.location.reload();
            }
            else
            {
                $.showBox("删除失败！");
                window.location.reload();
            }
        },
        error:function () {
            $.showBox("删除失败！");
            window.location.reload();
        }
        
    });
}


$(document).ready(function(){

    $(".Carousel-Enable").each(function(){
        if($(this).children(".status").val()==="1")
        {
            $(this).children(".Carousel-open").fadeIn();
            $(this).children(".Carousel-off").fadeOut();
        }
        else if($(this).children(".status").val()==="0")
        {
            $(this).children(".Carousel-off").fadeIn();
            $(this).children(".Carousel-open").fadeOut();
        }
    })
});

function OpenCarousel(id,zhuangtai) {
    $.ajax({
        url:"changeZ",
        type:"post",
        data:({
            id:id,
            zhuangtai:zhuangtai
        }),
        success:function (msg) {
            if(msg=="success")
            {
                if(zhuangtai==0)
                {
                    $("#CarouselSwitch_off"+id).fadeOut(0);
                    $("#CarouselSwitch_open"+id).fadeIn(500);
                }
                else
                {
                    $("#CarouselSwitch_open"+id).fadeOut(0);
                    $("#CarouselSwitch_off"+id).fadeIn(500);
                }
            }
            else
            {
                $.showBox("出错啦!");
            }
        },
        error:function (msg) {
            $.showBox("出错啦！");
        }
    });
}


function saveEditFrom(data) {
    var imgfile = document.getElementById("Editbtn_file").files[0];
    if(typeof(imgfile) == "undefined")
    {
        var image="none";
        var form = new FormData(document.getElementById("EditCarousel"));
        $.ajax({
            url:"EditFromSave/img/"+image+"/id/"+data,
            type:"post",
            data:form,
            processData:false,
            contentType:false,
            async:false,
            success:function(msg){
                if(msg=="success")
                {
                    $.showBox("成功!");
                    window.location.reload();
                }
                else if(msg=="orderNULL")
                {
                    alert("排序不能为空");
                }
                else if(msg=="hrefNULL")
                {
                    alert("请填写正确的连接！");
                }
                else if(msg=="NameNULL")
                {
                    alert("名称不能为空！");
                }
                else
                {
                    $.showBox("至少要修改一项哦！");
                }
            },
            error:function(e){
                alert("错误！！");
            }
        });
    }
    else
    {
        var fd = new FormData();
        fd.append("upload", 1);
        fd.append("upfile", $("#Editbtn_file").get(0).files[0]);
        $.ajax({
            url:"saveImg",
            type:"post",
            data:fd,
            processData:false,
            contentType:false,
            async:false,
            success:function(msg){
                if(msg!="error")
                {
                    var form = new FormData(document.getElementById("EditCarousel"));
                    $.ajax({
                        url:"EditFromSave/img/"+msg+"/id/"+data,
                        type:"post",
                        data:form,
                        processData:false,
                        contentType:false,
                        async:false,
                        success:function(msg){
                            if(msg=="success")
                            {
                                $.showBox("成功!");
                                window.location.reload();
                            }
                            else if(msg=="orderNULL")
                            {
                                alert("排序不能为空");
                            }
                            else if(msg=="hrefNULL")
                            {
                                alert("请填写正确的连接！");
                            }
                            else if(msg=="NameNULL")
                            {
                                alert("名称不能为空！");
                            }
                            else
                            {
                                $.showBox("至少要修改一项哦！");
                            }
                        },
                        error:function(e){
                            alert("错误！！");
                        }
                    });
                }
            },
            error:function(e){
                alert("错误！！");
            }
        });
    }

}


