/**
 * Created by Administrator on 2017/12/27 0027.
 */

function getFormInfo(){
    var form = new FormData(document.getElementById("test"));
    $.ajax({
        url:"submit",
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        success:function(data){
            window.clearInterval(timer);
            console.log("over..");
        },
        error:function(e){
            alert("错误！！");
            window.clearInterval(timer);
        }
    });
    get();//此处为上传文件的进度条
}