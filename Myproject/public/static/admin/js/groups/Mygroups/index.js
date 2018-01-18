function getId(v){return document.getElementById(v);}
var x=0;
var i=0;
function clc(y,data){
    var num=data%3;
    if(num==0)
    {
        $.ajax({
            url:"",
            data:({
                num:y
            }),
            type:"post",
            success:function (msg) {
                if(msg!="error"){
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
                    //$("#Ding"+y).html(msg);
                    $("#order"+y).removeAttr('onclick').attr("onclick","clc("+y+","+(data+1)+");");
                }
            },
            error:function (msg) {
            }
        })
    }
    else
    {
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