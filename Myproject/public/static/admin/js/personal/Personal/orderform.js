function getId(v){return document.getElementById(v);}
var x=0;
var i=0;
function clc(y,data){
    var num=data%3;
    if(num==0)
    {
        $.ajax({
            url:"orderCheck",
            data:({
                num:y
            }),
            type:"post",
            success:function (msg) {
                if(msg!="error"){
                    // document.body.style.overflow="hidden";
                    getId("Ding"+x).style.display = "none";
                    getId("Ding"+y).style.display = "";
                    x=y;
                    var lis=document.getElementById('Tao_second_2');
                    var Ole=lis.getElementsByTagName('div');
                    for( var i=0;i<Ole.length;i++){
                        Ole[i].className="active";
                        Ole[y].className="l_change";
                    }
                    $("#Ding"+y).html(msg);
                    $("#order"+y).removeAttr('onclick').attr("onclick","clc("+y+","+(data+1)+");");
                }
            },
            error:function (msg) {
            }
        })
    }
    else
    {
        // document.body.style.overflow="hidden";
        getId("Ding"+x).style.display = "none";
        getId("Ding"+y).style.display = "";
        x=y;
        var lis=document.getElementById('Tao_second_2');
        var Ole=lis.getElementsByTagName('div');
        for( var i=0;i<Ole.length;i++){
            Ole[i].className="active";
            Ole[y].className="l_change";
        }
        $("#order"+y).removeAttr('onclick').attr("onclick","clc("+y+","+(data+1)+");");
    }
}

function TiXingFa(num) {
    $.ajax({
        url:'TXFaHuo',
        type:'post',
        data:({
            num:num
        }),
        success:function (msg) {
            if(msg=="error")
            {
                alert("对不起，请重试！");
            }
            if(msg=="NO")
            {
                alert("请稍后再试！");
            }
            if(msg=="success")
            {
                alert("提醒成功！");
            }
        },
        error:function () {
            $.showBox("出错啦，请重试！");
        }
        
    });
}

function FuK(num) {
    self.location='/admin/shoppingcar/Shoppingcar/dingdanqu.html?DingId='+fisker_encode_v2(num);
}

function DelDing(num) {
    var text=confirm("确认删除该订单？");
    if(text==true)
    {
        $.ajax({
            url:"DelDing",
            type:"post",
            data:({
                Ding:num
            }),
            success:function (msg) {
                if(msg=="success")
                {
                    $.showBox("删除成功！");
                    window.location.reload();
                }
                else
                {
                    $.showBox("删除失败，请重试！");
                }
            },
            error:function (msg) {

            }
        });
    }
}

function CheckExpress() {
    alert("对不起，暂时还不支持此业务！");
}

function GoodsReceive(num) {
    var text=confirm("确认收货？");
    if(text==true)
    {
        $.ajax({
            url:"SureReceive",
            type:"post",
            data:({
                Ding:num
            }),
            success:function (msg) {
                if(msg=="success")
                {
                    $.showBox("收货成功！");
                    window.location.reload();
                }
                else
                {
                    $.showBox("收货失败，请重试！");
                }
            },
            error:function (msg) {

            }
        });
    }
}