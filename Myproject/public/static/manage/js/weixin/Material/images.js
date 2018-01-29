function checka(num){
    $("#tu"+num).fadeIn();
}
function closechecka(num){
    $("#tu"+num).fadeOut();
}
function Del(num){
    $.ajax({
        url:"zheshige",
        type:"post",
        data:({
            num:num
        }),
        success:function(msg){
        if(msg!="error"){
            $.showBox("删除成功！");
        }else{
            $.showBox("删除失败！");
        }
    },
        error:function(msg){
            $.showBox("删除失败！");
        }

    })
}
function addtupain(){
    $(".addtupian").fadeIn();
}
function closeadd(){
    $(".addtupian").fadeOut();
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

function tutijiao(){
    //var ss=file;
    var form = new FormData(document.getElementById("tijiaoli"));
        $.ajax({
        url:'tutijiao',
        type:"post",
        data:({
            form:form
        }),
        processData:false,
        contentType:false,
        async:false,
        success:function (msg) {
            if(msg!=="error"){
                $.showBox("提交成功");
                alert("1111111");
            }else{
                $.showBox("提交失败");
            }

        },
        error:function (msg) {
            $.showBox("提交失败");
        }
    })
}