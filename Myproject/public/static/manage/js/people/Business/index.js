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
    var file  = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
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
                alert(msg);
            }
        }
    });



    // var  name=$("input[name='name']").val();
    // var  Zhanghao=$("input[name='zhanghao']").val();
    // var  Pwd=$("input[name='pwd']").val();
    // var  Gsname=$("input[name='gsname']").val();
    // var  Address=$("input[name='address']").val();
    // var  Head=$("input[name='head']").val();
    // $.ajax({
    //     type:'post',
    //     url:'AddBusiness',
    //     data:({
    //         Name:name,
    //         Zhanghao:Zhanghao,
    //         Pwd:Pwd,
    //         Gsname:Gsname,
    //         Address:Address,
    //         Head:Head
    //     }),
    //     success:function(data){
    //         alert('商家添加成功');
    //     }
    //
    //
    // });
}

/*商家权限关闭*/
function closeBuinesspower() {
    $(".Buiness-power-BigBox").fadeOut();
}
/*商家权限添加*/
function AddBuinsesspower() {
    $(".Buiness-power-BigBox").fadeIn();
}

/*商家密码重置*/
function BuPwd() {
    $(".Buiness-pwd-Res-Box").fadeIn();
}
/*商家密码关闭*/
function BuncelResPwd() {
    $(".Buiness-pwd-Res-Box").fadeOut();
}