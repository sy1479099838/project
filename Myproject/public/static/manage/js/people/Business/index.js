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
    //alert(12456);
    var preview = document.getElementById('img1');
    var file  = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    };
    //alert(preview.src);
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
        url: "AddBusiness",
        type: "POST",
        processData: false,
        contentType: false,
        data: fd,
        success: function(d) {
            // $(".Index_subImg").show();
            // var href = $(".Index_subImg")[0].src;
            // $(".Index_subImg").attr('src',href+"/uploads/"+d);
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