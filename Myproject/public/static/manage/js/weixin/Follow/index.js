function UserFenYe(nowPage,page,AllPage)
{
    var currentUrl = this.location.href;
    var result=currentUrl.split("&");

    if(page=="Previous")
    {
        if(nowPage!="1")
        {
            window.location.href=result[0]+"&page="+(parseInt(nowPage)-1);
        }
    }
    else if(page=="next")
    {
        if(nowPage!=AllPage)
        {
            window.location.href=result[0]+"&page="+(parseInt(nowPage)+1);
        }
    }
    else
    {
        if(page!=nowPage)
        {
            window.location.href=result[0]+"&page="+page;
        }

    }

}
function beizhubianji(){
    $(".obutton").hide();
    $(".obutton2").show();
    $(".bei_inp").show();
}
function beizhubaocun(){
    var beizhu=$("input[name='beizhubaina']").val();
    $.ajax({
        url:"beizhua",
        type:"post",
        data:({
            beizhu:beizhu
             }),
        success:function (msg) {
            if(msg!=="error"){
                $.showBox("修改成功");
                alert("1111111");
                $(".obutton2").hide();
                $(".obutton").show();
                $(".bei_inp").hide();
            }else{
                $.showBox("修改失败");
            }
        },
        error:function (msg) {
            $.showBox("修改失败");
        }
    });
}