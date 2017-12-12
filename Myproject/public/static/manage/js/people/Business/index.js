$(function () {
   $(".BigImagesButton").click(function () {
       var image=$(this).next("input").val();
       var img= $(".SeeBigImages").children("img").attr("src", image);
       var html = '';
       $('#myDiv').html(html);
       var newImg = new Image();

       newImg.onload = function(){
           var BoxWidth=parseInt($(".SeeBigImages").width());
           var width = newImg.width;
           if(width>=BoxWidth)
           {
               $(".SeeBigImages").children("img").css("margin-left","100%");
               $(".SeeBigImages").fadeIn(100);
           }
           else
           {
               $(".SeeBigImages").children("img").css("margin-left",((BoxWidth-width)/2)+"px");
               $(".SeeBigImages").fadeIn(100);
           }

       };
       newImg.src = img.attr("src");

   });
    /*当手机号码失去焦点时正则     备注绑定时间需要包在一个$(function(){})中*/
    $('input:text[name="phonenumber"]').focusout(function () {
        /*alert(1212121);*/
        var Phonenumber=$(this).val();
         var Phonecheck=/^1[3|4|5|7|8][0-9]\d{8}$/;
         if(!Phonecheck.test(Phonenumber))
         {
         $.showBox("请按照正确格式填写手机号码！");
         }
    });

    /*当座机号码失去焦点时正则*/
    $('input:text[name="zuonumber"]').focusout(function () {
        var Zuonumber=$(this).val();
        var Zuocheck=/[0-9-()（）]{7,18}/;
        if(!Zuocheck.test(Zuonumber))
        {
            $.showBox("请按照正确格式填写座机号码！");
        }
    });
});

function closeImage() {
    $(".SeeBigImages").fadeOut(0);
}
function closeAddbuinsess() {
    $(".Business-AddMenu-Box").fadeOut(1000);
}

function Addbuinsess() {
    $(".Business-AddMenu-Box").fadeIn(700);
}



function previewFile () {
    var preview = document.getElementById('img1');
    var imgfile=preview.getElementsByTagName('img')[0];
    var file  = document.querySelector('input[type=file]').files[0];
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








function AddBusinessSubmit(){
    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#img2").get(0).files[0]);
    $.ajax({
        url: "UplodeImg",
        type: "POST",
        processData: false,
        contentType: false,
        data: fd,
        success: function(msg) {
            if(msg=="error")
            {
                $.showBox("照片上传失败！");
            }
            else
            {
                var  name=$("input[name='name']").val();
                var  Zhanghao=$("input[name='zhanghao']").val();
                var  Pwd=$("input[name='pwd']").val();
                var  Gsname=$("input[name='gsname']").val();
                var  Address=$("input[name='address']").val();
                var  Phonenumber=$("input[name='phonenumber']").val();
                var  Zuonumber=$("input[name='zuonumber']").val();
                var  Date=$("input[name='date']").val();
                var  Head=msg;

                var AccountRet = /^[A-Za-z0-9]{4,18}$/;
                var PwdRet = /^[A-Z]{2}[A-Za-z0-9]{4,16}$/;

                if(Zhanghao=="" || !AccountRet.test(Zhanghao)){
                    $.showBox('请输入正确账号');
                }else if(Pwd=="" || !PwdRet.test(Pwd))
                {
                    $.showBox('请输入合适格式密码');
                }else if(name=="")
                {
                    $.showBox('请输入商家名称');
                }else if(Gsname=="")
                {
                    $.showBox('请输入公司名称');
                }else if(Address=="")
                {
                    $.showBox("请输入地址");
                }else if(Head==""){
                    $.showBox("请上传头像");
                }else if(Date=="")
                {
                    $.showBox ("填写注册日期");
                }
                else{

                    $.ajax({
                        type:'post',
                        url:'AddBusiness',
                        data:({
                            Name:name,
                            Zhanghao:Zhanghao,
                            Pwd:Pwd,
                            Gsname:Gsname,
                            Address:Address,
                            Head:Head,
                            Date:Date,
                            Phonenumber:Phonenumber,
                            Zuonumber:Zuonumber
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

/*
* 编辑商家
* */
function EditBusinessSubmit(data) {
    var  name=$("input[name='Editname']").val();
    var  Gsname=$("input[name='Editgsname']").val();
    var  Address=$("input[name='Editaddress']").val();
    var  Phonenumber=$("input[name='Editphonenumber']").val();
    var  Zuonumber=$("input[name='Editzuonumber']").val();
    var  Date=$("input[name='Editdate2']").val();
    var MPhoneRet = /^1[3|4|5|7|8][0-9]\d{8}$/;
    var GphoneRet = /[0-9-()（）]{7,18}/;

    if(name=="")
    {
        $.showBox('请输入商家名称');
    }else if(Gsname=="")
    {
        $.showBox('请输入公司名称');
    }else if(Address=="")
    {
        $.showBox("请输入地址");
    }else if(Date=="")
    {
        $.showBox ("填写到期时间");
    }
    else if(Phonenumber=="" || !MPhoneRet.test(Phonenumber))
    {
        $.showBox ("手机格式错误！");
    }
    else if(Zuonumber=="" || !GphoneRet.test(Zuonumber))
    {
        $.showBox ("座机格式错误！");
    }
    else {
        $.ajax({
            url: 'SaveEdit',
            type: 'post',
            data: ({
                Name:name,
                Gsname:Gsname,
                Address:Address,
                Date:Date,
                Phonenumber:Phonenumber,
                Zuonumber:Zuonumber,
                num:data
            }),
            success: function (msg) {
                if(msg=="success")
                {
                    $.showBox ("编辑成功！");
                    window.location.reload();
                }
                else if(msg=="error")
                {
                    $.showBox ("编辑失败！");
                    window.location.reload();
                }
                else
                {
                    $.showBox (msg);
                }
            },
            error: function () {
                $.showBox("出错啦！");
            }
        });
    }
}




/*商家权限关闭*/
function closeBuinesspower() {
    $(".Business-power-Box").fadeOut();
}
/*商家权限添加*/
function AddBuinsesspower(data) {
    $.ajax({
        url:'power',
        type:'post',
        data:({data:data}),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox("对不起，您没有权利！");
            }
            else
            {
                $(".Business-power-Box").html(msg);
                $(".Business-power-Box").fadeIn();
            }
        },
        error:function (msg) {
            $.showBox("错误，请重试！");
        }
    });
}

/*
* 保存商家权限
* */
function SaveBusinessPower(data) {
    var text = $("input:checkbox[name='Businesspower']:checked").map(function(index,elem) {
        return $(elem).val();
    }).get().join(',');
    $.ajax({
        url:"SavePower",
        type:"get",
        data:({text:text,
               data:data}),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("编辑成功！");
                $(".Business-power-Box").fadeOut();
                $(".Business-power-Box").html("");
            }
            else
            {
                $.showBox("请选择！");
            }
        },
        error:function (msg) {
            $.showBox("请重试！");
            $(".Business-power-Box").fadeOut();
            $(".Business-power-Box").html("");
        }
    });
}


/*商家密码重置*/
function BuPwd() {
    $(".Business-pwd-Res-Box").fadeIn();
}
/*商家密码关闭*/
function CloseBuPwd() {
    $(".Business-pwd-Res-Box").fadeOut();
}

/*商家编辑*/
function EditBusiness(data) {

    $.ajax({
        url:'EditBusiness',
        type:'post',
        data:({data:data}),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox("请重试！");
            }
            else
            {
                $(".Business-EditMenu-Box").html(msg);
                $(".Business-EditMenu-Box").fadeIn();
            }
        },
        error:function (msg) {
            $.showBox("错误，请重试！");
        }
    });
}
/*商家编辑关闭*/
function closeEditbuiness() {
    $(".Business-EditMenu-Box").fadeOut();
}
/*
* 商家所有权限编辑
* */
function businessAllPower() {
    $.ajax({
        url:"AllPower",
        type:"post",
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox("对不起，您没有权利！");
            }
            else
            {
                $(".Business-power-Box").html(msg);
                $(".Business-power-Box").fadeIn();
            }

        },
        error:function (msg) {
            $.showBox("请重试！");
        }
    });
}

function BusinessAllpower() {
    var text = $("input:checkbox[name='BusinessAllpower']:checked").map(function(index,elem) {
        return $(elem).val();
    }).get().join(',');
    $.ajax({
        url:"SaveAllPower",
        type:"get",
        data:({text:text}),
        success:function (msg) {
            if(msg=="success")
            {
                $.showBox("编辑成功！");
                $(".Business-power-Box").fadeOut();
                $(".Business-power-Box").html("");
            }
            else if(msg=="nopower")
            {
                $.showBox("对不起，您没有权限！");
                $(".Business-power-Box").fadeOut();
                $(".Business-power-Box").html("");
            }
            else
            {
                $.showBox("请选择！");
            }
        },
        error:function (msg) {
            $.showBox("请重试！");
            $(".Business-power-Box").fadeOut();
            $(".Business-power-Box").html("");
        }
    });
}

function BusinessKeywordSearch() {
    var text=$('input:text[name="BusinessKeywordSearch"]').val();
    $.ajax({
        url:"BusinessKeywordSearch",
        type:"post",
        data:({key:text}),
        success:function (msg) {
            $(".BusinessList-table").html(msg);
        },
        error:function (msg) {

        }
    });
}

