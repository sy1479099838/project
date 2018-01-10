$(function(){
    var lis=document.getElementById('Tao_second_2');
    var Ole=lis.getElementsByTagName('div');
    var num=0;
    var Oldli=null;
    Oldli=Ole[num];
    //console.log(Ole);
    //Ole[num].className='oldclass';
    for(var i=0;i<Ole.length;i++){
        Ole[i].onclick=function(){
            //console.log(Ole[i]);
            Oldli.className="active";
            Oldli=this;
            this.className="l_change";
            console.log(Oldli);


        };


    }
});