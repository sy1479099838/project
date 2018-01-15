function getId(v){return document.getElementById(v);}
var x=0;
var i=0;
function clc(y,data){
    var num=data%3;
    if(num==0)
    {
        alert("可以传值");
        $.ajax({
            url:"check_all",
            data:({
                y:y
            }),
            type:"post",
            success:function (msg) {
                if(msg=="sucess"){
                    document.body.style.overflow="hidden";
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

            },
            error:function (msg) {
                //alert("请刷新页面");
            }
        })
    }
    else
    {
        //alert("对不起，暂时不能传值");
        document.body.style.overflow="hidden";
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