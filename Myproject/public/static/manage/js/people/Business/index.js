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
                            Date:Date
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
*
*
* */
/*商家权限关闭*/
function closeBuinesspower() {
    $(".Business-power-Box").fadeOut();
}
/*商家权限添加*/
function AddBuinsesspower() {
    //alert(1111111111);
    $(".Business-power-Box").fadeIn();
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
function EditBuiness() {
    $(".Business-EditMenu-Box").fadeIn();
}
/*商家编辑关闭*/
function closeEditbuiness() {
    $(".Business-EditMenu-Box").fadeOut();
}



