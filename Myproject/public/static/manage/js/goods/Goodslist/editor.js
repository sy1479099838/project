/**
 * Created by Administrator on 2017/12/25 0025.
 */
UE.getEditor('newsEditor');
function createEditor(){
    enableBtn();
    UE.getEditor('editor')
}
function getContent() {
    var arr = [];
    arr.push(  UE.getEditor('newsEditor').getContent() );
    var UEvalue = arr.join( "\n" );
    $(".changeWidth").fadeIn(700);
    $(".changeWidth>.MoveBox>.moveContent").html(UEvalue);
}
function closeYulan() {
    $(".changeWidth").fadeOut(200);
}
function Xiang_Submit(){
    var arr = [];
    arr.push(  UE.getEditor('newsEditor').getContent() );
    var UEvalue = arr.join( "\n" );
    $.ajax({
        url:'Xiangqing',
        type:'post',
        data:({data:UEvalue}),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox(" 详情提交失败！");
            }
            else
            {
                $.showBox(" 详情提交成功！");
            }
        },
        error:function (msg) {
            $.showBox("错误，请重试！");
        }
    });
}

/*----------------------------------------*/
UE.getEditor('newsEditor1');
function getContent2() {
    var WinWidth= $(window).width();
    $(".MoveBox").css({'left' : ((WinWidth-320)/2)+'px','right' : ((WinWidth-320)/2)+'px'}).fadeIn(200);
    var arr = [];
    arr.push(  UE.getEditor('newsEditor1').getContent() );
    var UEvalue = arr.join( "\n" );
    $(".changeWidth").fadeIn(700);
    $(".changeWidth>.MoveBox>.moveContent").html(UEvalue);
}
function Xiang_Submit2(){
    var arr = [];
    arr.push(  UE.getEditor('newsEditor').getContent() );
    var UEvalue = arr.join( "\n" );
    $.ajax({
        url:'Xiangqing',
        type:'post',
        data:({data:UEvalue}),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox(" 详情提交失败！");
            }
            else
            {
                $.showBox(" 详情提交成功！");
            }
        },
        error:function (msg) {
            $.showBox("错误，请重试！");
        }
    });
}