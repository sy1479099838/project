$(function () {
   $(".Level").click(function () {
       $(".Level").css("color","black");
       $(this).css("color","red");
       $(this).prevAll(".Level").css("color","red");
       var hiddenval=$(this).children().val();
       document.getElementById("hidden_list").value=hiddenval;
   });
});

function elease(num,num2) {
    var level=Evaluate_Content.xing.value;
    var reg=/^[1-5]$/;   /*定义验证表达式*/
    var result = reg.test(level);
    if(result==true)
    {
        var formArray = JSON.stringify($("#Evaluate_Content").serializeArray());
        $.ajax({
            url:'SaveEvaluate',
            type:'post',
            data:({
                formArray:formArray,
                num:num,
                num2:num2
            }),
            success:function (msg) {
                if(msg=="success")
                {
                    $.showBox("评论成功！");
                    self.location="/admin/personal/Personal/daipinjia.html";
                }
                else
                {
                    $.showBox("评论失败，请重试！");
                }
            },
            error:function () {

            }
        });
    }
    else
    {
        $.showBox("给我们一个好评哦！谢谢");
    }

}

function mylimit(value) {
    var l = value.length;
    if(l>100)
    {
        var text=value.substr(0,100);
        $("#pingluna").val(text);
        l=40;
    }
    $("#limitLenth").text("已输入"+l+"个字，最多100个汉字！还能输入"+(100-l)+"个字！");
}
