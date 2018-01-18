function GetRTime(){
    var EndTime= new Date('2018/2/18 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime();
    var d=0;
    var h=0;
    var m=0;
    var s=0;
    if(t>=0){
        d=Math.floor(t/1000/60/60/24);
        h=Math.floor(t/1000/60/60%24);
        m=Math.floor(t/1000/60%60);
        s=Math.floor(t/1000%60);
    }

     //document.getElementById("timer").innerHTML = "剩:"+d+"天" + h+"小时" + m+"分"+s+"秒";
    $(".timer").html("剩:"+d+"天" + h+"小时" + m+"分"+s+"秒");
}
setInterval(GetRTime,100);

function checkTuan(){
    $(".Tuan_chuang").fadeIn();
}
function Tuan_tiao(){
    self.location='/admin/home/home/index';
}
function Tuan_buy(){
    $(".Tao_can_list").fadeIn();
}
function Tuan_buyclose(){
    $(".Tao_can_list").fadeOut();
}
function Tuan_kai(){
    $(".Tao_queren").fadeIn();
}
function Tuan_kaiclose(){
    $(".Tao_queren").fadeOut();
}
$(function (){
    var list=document.getElementById('third_2');
    var Obu=list.getElementsByTagName('button');
    var Num=list.getElementsByTagName('input')[0];
    var n1=Number(Num.value);
    console.log(n1);
    Obu[0].onclick=function(){
        //alert(1111);
        n1--;
        if(n1<1){
            n1=1;
        }
        //console.log(n1);
        document.getElementById("ccid").value=n1;
    };
    Obu[1].onclick=function(){
        //alert(111);
        n1++;
        //console.log(n1);
        document.getElementById("ccid").value=n1;
    };
});
$(function (){
    var list=document.getElementById('queren_third_2');
    var Obu=list.getElementsByTagName('button');
    var Num=list.getElementsByTagName('input')[0];
    var n1=Number(Num.value);
    console.log(n1);
    Obu[0].onclick=function(){
        //alert(1111);
        n1--;
        if(n1<1){
            n1=1;
        }
        //console.log(n1);
        document.getElementById("queren1").value=n1;
    };
    Obu[1].onclick=function(){
        //alert(111);
        n1++;
        //console.log(n1);
        document.getElementById("queren1").value=n1;
    };
});
function Change_price(data){
    $.ajax({
        url:"",
        type:"post",
        data:({
            id:data
        }),
        success:function (msg) {
            if(msg!="error")
            {
                $(".active").css("background","#00F7DE");
                $(".Package"+data).css("background","orange");
                $("input:hidden[name=pacageId]").val(data);

                var obj = JSON.parse(msg);
                // console.log(obj);
                $("#GoodPrice").html("￥"+obj.price);
                $("#GoodPrice1").html("￥"+obj.price);
            }
            else
            {
                $.showBox("请重新选择");
            }
        },
        error:function (msg) {
            $.showBox("请重新选择");
        }
    });

}
function Tao_Qu(){
    var packgeId=$("input:hidden[name=pacageId]").val();
    var num=$("#queren1").val();
    self.location='/admin/shoppingcar/Shoppingcar/dingdanqu.html?taocan='+packgeId+'&num='+num;
}
function Add_gouwu(){
    //alert(1111111110);
    var packgeId=$("input:hidden[name=pacageId1]").val();
    var packgeNum=$("input:text[name=taocan]").val();
    $.ajax({
        url:"",
        type:"post",
        data:({
            packgeId:packgeId,
            packgeNum:packgeNum
        }),
        success:function(msg){
            if(msg!="error"){
                $.showBox("添加成功");
            }else{
                $.showBox("添加失败");
            }
        },
        error:function(msg){
            $.showBox("添加失败");
        }
    })
}