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
function Xiang_Submit(num){
    var arr = [];
    arr.push(  UE.getEditor('newsEditor').getContent() );
    var UEvalue = arr.join( "\n" );
    $.ajax({
        url:'Xiangqing',
        type:'post',
        data:({
            data:UEvalue,
            goodsId:num
        }),
        success:function (msg) {
            if(msg=="error")
            {
                $.showBox(" 详情提交失败！");
                window.location.reload();
            }
            else
            {
                $.showBox(" 详情提交成功！");
                window.location.reload();
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
function Xiang_Submit2(data){
    var arr = [];
    arr.push(  UE.getEditor('newsEditor').getContent() );
    var UEvalue = arr.join( "\n" );
    $.ajax({
        url:'Xiangqing',
        type:'post',
        data:({data:UEvalue}),
        success:function (msg) {
            // setContent(msg);
            alert(msg);
        },
        error:function (msg) {
            $.showBox("错误，请重试！");
        }
    });
}

var ue = UE.getEditor('newsEditor');
function setContent(text) {
    UE.getEditor('newsEditor').setContent(text);
}

// 商品详情打开
function GoodsPK(data) {
    var Html= '<button onclick="Xiang_Submit('+data+')">提&nbsp;&nbsp;&nbsp;交</button>';
    $.ajax({
        url:"GoodsDetails",
        type:"post",
        data:({
            id:data
        }),
        success:function (msg) {
            setContent(msg);
            $(".X-Submit2").append(Html);
            $(".GoodsPK-Menu-Box").fadeIn(700);
        },
        error:function (msg) {

        }
    });

}

// 商品参数打开
function GoodsCS(data) {
    var Html= '<button onclick="Xiang_Submit2('+data+')">提&nbsp;&nbsp;&nbsp;交</button>';
    $.ajax({
        url:"GoodsCS",
        type:"post",
        data:({
            id:data
        }),
        success:function (msg) {
            setContent(msg);
            $(".X-Submit2").append(Html);
            $(".GoodsParameter-Menu-Box").fadeIn(700);
        },
        error:function (msg) {

        }
    });

}