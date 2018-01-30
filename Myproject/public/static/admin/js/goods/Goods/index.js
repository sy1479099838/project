function getId(v){return document.getElementById(v);}
var x=0;
var i=0;
function fenlei_change(y){
    //document.body.style.overflow="hidden";
    getId("RightFruit_"+x).style.display = "none";
    getId("RightFruit_"+y).style.display = "";
    x=y;
    var lis=document.getElementById('fenlei_biao');
    var Ole=lis.getElementsByTagName('div');
    for( var i=0;i<Ole.length;i++){
        Ole[i].className="LeftMenu";
        Ole[y].className="LeftMenu_change";
    }
}