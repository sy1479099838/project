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
    var form = new FormData(document.getElementById("tijiao"));
    $.ajax({
        url:'caidantijiao',
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        async:false,
        success:function (msg) {
            if(msg!=="error"){
                $.showBox("提交成功");
                alert("1111111");
            }else{
                $.showBox("提交失败");
            }

        },
        error:function (msg) {
            $.showBox("提交成功");
        }
    });
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

function qiyong(menu,num)
{
    if(num==0){
        var list='<div class="wei_menu" id="ziweixinmenu_'+menu+'"><div class="ziwei_menu3">' +
            '餐单名称：<input type="text" value="" placeholder="餐单名称不能超过4个汉字，8个字符" name="candan_'+menu+'" style="width:60%;text-align:center;" > ' +
            '</div>' +
            '<div class="ziwei_menu2"> ' +
            '<span>跳转链接<input type="radio" name="dianji'+menu+'" value="0" onchange="zikaiguan(1,0)"></span> ' +
            '<span>点击事件<input type="radio" name="dianji'+menu+'" value="1" onchange="zikaiguan(1,1)"></span>' +
            '</div>' +
            '<div class="ziwei_menu4" onclick="addzi('+menu+','+num+')">添加子菜单</div></div>';
        $("#weixinmenu_"+menu).after(list);

    }
    if(num==1){
        $('#ziweixinmenu_'+menu).remove();
    }
}

function zikaiguan(menu,num){
    if(num==0){
        $('.wei_menu'+menu).remove();
        var list='<div class="wei_menu" id="zilist_'+menu+'">' +
            '<input name="lianjie'+menu+'" value="" placeholder="http://" class="lianjie_shuru">' +
            '</div><br>';
        $("#ziweixinmenu_"+menu).after(list);
    }else{
        $('#zilist_'+menu).remove();
    }
    if(num==1){
        $('.wei_menu'+menu).remove();
        $("zi_caidan"+menu).remove();
        var list='<div class="wei_menu" id="zitiaozhuan_'+menu+'">' +
            '<input name="chufa'+menu+'" value="" placeholder="添加点击事件" class="lianjie_shuru">' +
            '</div><br>';
        $("#ziweixinmenu_"+menu).after(list);
    }else{
        $('#zitiaozhuan_'+menu).remove();
    }
}

function addzi(menu,num){
    $('#zilist_'+menu).remove();
    $('#zitiaozhuan_'+menu).remove();
    var shuzi=document.getElementsByClassName('wei_menu1').length;
    var list='<div class="wei_menu'+menu+'" id="zi_caidan'+menu+shuzi+'">' +
        '<div class="ziwei_menu3">' +
        '子餐单名称：<input type="text" value="" placeholder="餐单名称不能超过4个汉字，8个字符" name="zicandan_'+menu+'" style="width:60%;text-align:center;" > ' +
        '</div>' +
        '<div class="ziwei_menu2"> ' +
        '<span>跳转链接<input type="radio" name="zidianji'+menu+'" value="0" onchange="zilist('+menu+shuzi+',0)"></span> ' +
        '<span>点击事件<input type="radio" name="zidianji'+menu+'" value="1" onchange="zilist('+menu+shuzi+',1)"></span>' +
        '</div>' +
        '</div>';
    if(shuzi<5){
        $("#ziweixinmenu_"+menu).after(list);
    }else{
        alert('只能添加5个自惨淡');
    }

}

function zilist(nemu,num){
    var shuzi=document.getElementsByClassName('wei_menu1').length;
    console.log(nemu);
    if(num==0){
        var list='<input name="lianjie'+nemu+shuzi+'" value="" placeholder="http://" class="lianjie_shuru2" id="zhebushi'+nemu+shuzi+'">';
        $('#zi_caidan'+nemu).append(list);
    }else{
        $('#zhebushi'+nemu+shuzi).remove();
    }
    if(num==1){
        var list='<input name="lianjie'+nemu+shuzi+'" value="" placeholder="触发事件" class="lianjie_shuru2" id="zheshi'+nemu+shuzi+'">';
        $('#zi_caidan'+nemu).append(list);
    }else{
        $('#zheshi'+nemu+shuzi).remove();
    }
}
