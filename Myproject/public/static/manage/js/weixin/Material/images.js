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

function xmTanUploadImg(obj) {

    var fl=obj.files.length;
    for(var i=0;i<fl;i++){
        var file=obj.files[i];
        var reader = new FileReader();

        //读取文件过程方法

        reader.onloadstart = function (e) {
            console.log("开始读取....");
        }
        reader.onprogress = function (e) {
            console.log("正在读取中....");
        }
        reader.onabort = function (e) {
            console.log("中断读取....");
        }
        reader.onerror = function (e) {
            console.log("读取异常....");
        }
        reader.onload = function (e) {
            console.log("成功读取....");

            var imgstr='<img style="width:100px;height:100px;" src="'+e.target.result+'"/>';
            var oimgbox=document.getElementById("imgboxid");
            var ndiv=document.createElement("div");

            ndiv.innerHTML=imgstr;
            ndiv.className="img-div";
            oimgbox.appendChild(ndiv);

        }

        reader.readAsDataURL(file);
        console.log(file);
//alert(1);
    }

}

function tutijiao(){
    var ss=file;
    var form = new FormData(document.getElementById("tijiaoli"));
        $.ajax({
        url:'tutijiao',
        type:"post",
        data:({
            form:form,
            ss:ss
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