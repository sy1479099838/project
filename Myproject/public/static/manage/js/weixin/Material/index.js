/**
 * Created by Administrator on 2018/1/5 0005.
 */
$(function () {
   $(".chakan-newsid").click(function () {
       $(".news-newsId").fadeOut(0);
       $(this).next(".news-newsId").fadeIn(200);
   })
});
function closeNewsId() {
    $(".news-newsId").fadeOut(200);
}

function DelNews(data){
    var msg="真的删除吗？";
    var hanshu="DelN(\'"+data+"\',"+0+","+0+")";
    affirm(msg,hanshu);//自定义的弹窗函数
}

function DelN(data) {
    $.ajax({
        url:"delNews",
        data:({
            id:data
        }),
        type:"post",
        success:function (msg) {
            if(msg!="error")
            {
                $.showBox("删除成功！");
                closeSure();
                $.window.location.reload();
            }
            else
            {
                $.showBox("失败，请重试！");
            }

        },
        error:function () {
            $.showBox("操作失败，请重试！");
        }

    });

}