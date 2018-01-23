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
        $(".ziMo_radio"+menu).remove();
        $(".ziMenu_list_"+menu).remove();
        var text='<div class="candan_list'+menu+'">' +
            '<input type="text" name="lianjie'+menu+'" value="" class="lianjie" placeholder="请输入跳转链接：http://">' +
            '</div>';
        console.log(text);
        $(".Menu_list"+menu).append(text);
    }else{

    }
    if(num==1){
        var Obn='<button class="Obn" id="Obn'+menu+'" onclick="Addzi('+menu+')">点击添加子菜单</button>';
        $(".Mo_radio"+menu).append(Obn);
    }else{
        $("#Obn"+menu).remove();
    }
}

function Addzi(menu){
    var num=document.getElementsByClassName("ziMenu_list_"+menu).length;
    var Addzi='<div class="ziMenu_list_'+menu+'">子餐单名称：<input type="text" value="餐单名称"  name="candan'+menu+num+'" style="width:20%;text-align:center;" class="min_list">' +
        '</div>' +
        '<div class="ziMo_radio'+menu+'">' +
        '<span>跳转链接<input type="radio" name="ziradio'+menu+num+'" value="0" onchange="zidianji('+menu+num+',0)">' +
        '</span>' +
        '<span class="zi_list'+menu+num+'">点击事件<input type="radio" name="ziradio'+menu+num+'" value="1" onchange="zidianji('+menu+num+',1)">' +
        '</span>' +
        '</div>';
    if(num<5){
        $(".candan_list"+menu).fadeOut();
        $(".Menu_list"+menu).append(Addzi);
    }else{
        alert("子菜单不能超过5")
    }

}

function zidianji(menu,num){
    //alert(1111111111111);
    //$(".candan_list"+menu).fadeOut();
    $("#zilianjie"+menu).fadeOut();
    if(num==0){
        //alert("这是0");

        var zilianjie='<span><input type="text" name="zilianjie'+menu+num+'" value="" class="zilianjie"  id="zilianjie'+menu+'" placeholder="请输入跳转链接：http://"></span>';
        console.log(".zi_list"+menu);

        $(".zi_list"+menu).append(zilianjie);
        console.log("#zilianjie"+menu);
    }else{
        $("#zilianjie"+menu).remove();
    }
    if(num==1){
        //$("#zilianjie"+menu).fadeOut();
        console.log("#zilianjie"+menu);

        //alert(num);
    }
}

