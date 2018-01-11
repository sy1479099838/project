

function Huifu(Names){
    //alert(111111111);
    for(i=1;i<4;i++){
        var tempname="mune_x"+i;
        var NewsHot="x"+i;	// “X”是ID名称，与上面的传值的|数值匹配
        if (Names==tempname){
            Nnews=document.getElementById(NewsHot)
            Nnews.style.display='';
        }else{
            Nnews=document.getElementById(NewsHot)
            Nnews.style.display='none';
        }
    }

}

function AddReply(){

}