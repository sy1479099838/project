function addbutton(data) {
    alert(data);
}

function Kbianji(){
        //alert(1111111111111111111);
        $(".menulist_bianji").hide();
        $(".menulist_baocun").show();
        var minlist=document.getElementsByClassName("min_list");
        for(i=0;i<minlist.length;i++){
            minlist[i].disabled="";
        }
}
function Baocun(){
    //alert(222222222222);
    $(".menulist_baocun").hide();
    $(".menulist_bianji").show();
    var minlist=document.getElementsByClassName("min_list");
    for(i=0;i<minlist.length;i++){
        minlist[i].disabled="disabled";
    }
}


function Add_menu(){
    //alert(111111);
    $(".GZ_menu").fadeIn();
}
function closeGZ_menu(){
    //alert(111111);
    $(".GZ_menu").fadeOut();
}

function dianji(menu,num){
    //alert(1111111111111);
    $(".candan_list"+menu).fadeOut();
    if(num==0){
        //alert("这是0");
        var text='<div class="candan_list'+menu+'">' +
            '<input type="text" name="lianjie'+menu+'" value="" class="lianjie" placeholder="请输入跳转链接：http://">' +
            '</div><br>';
        console.log(text);
        $(".Menu_list"+menu).append(text);
    }
    if(num==1){
        var Obn='<button class="Obn" id="Obn'+menu+'" onclick="Addzi('+menu+')">点击添加子菜单</button>';
        $(".Mo_radio"+menu).append(Obn);
    }
}

function Addzi(menu){
    var num=document.getElementsByClassName("Menu_list_"+menu).length;
    var Addzi='<div class="Menu_list_'+menu+'">子餐单名称：<input type="text" value="餐单名称"  name="candan'+menu+num+'" style="width:20%;text-align:center;" class="min_list">' +
        '</div>' +
        '<div class="Mo_radio1">' +
        '<span>跳转链接<input type="radio" name="ziradio'+menu+num+'" value="0" onchange="zidianji('+menu+num+',0)">' +
        '</span>' +
        '<span>点击事件<input type="radio" name="ziradio'+menu+num+'" value="1" onchange="zidianji('+menu+num+',1)" class="zi_list'+menu+num+'">' +
        '</span>' +
        '</div><br>';
    if(num<6){
        $(".Menu_list"+menu).append(Addzi);
    }else{
        alert("子菜单不能超过5")
    }

}

function zidianji(menu,num){
    //alert(1111111111111);
    $(".candan_list"+menu).fadeOut();
    if(num==0){
        //alert("这是0");
        var text='<input type="text" name="zilianjie'+menu+'" value="" class="lianjie" placeholder="请输入跳转链接：http://"><br>';
        console.log(text);
        $(".zi_list"+menu+num).append(text);
    }
    if(num==1){
        alert(11111111111);
    }
}

