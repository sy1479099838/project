function getId(v){return document.getElementById(v);}
var x=0;
var i=0;
function jianzhichange(y){
    //document.body.style.overflow="hidden";
    getId("jianzhi"+x).style.display = "none";
    getId("jianzhi"+y).style.display = "";
    x=y;
    var lis=document.getElementById('Tao_second_2');
    var Ole=lis.getElementsByTagName('div');
    for( var i=0;i<Ole.length;i++){
        Ole[i].className="active";
        Ole[y].className="l_change";
    }
}