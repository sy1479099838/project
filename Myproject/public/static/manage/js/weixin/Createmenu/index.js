function addbutton(data) {
    alert(data);
}

function Kbianji(){
        //alert(1111111111111111111);
        $(".menulist_bianji").hide();
        //console.log($(".menulist_bianji"));
        $(".menulist_baocun").show();
        var list=document.getElementById("list");
        var Oinp=list.getElementsByTagName("input");
        Oinp.disabled=false;
}
function Baocun(){
    $(".menulist_baocun").hide();
    //console.log($(".menulist_bianji"));
    $(".menulist_bianji").show();
    var list=document.getElementById("list");
    var Oinp=list.getElementsByTagName("input");
    Oinp.disabled=true;
}


function Add_menu(){
    //alert(111111);
    $(".GZ_menu").fadeIn();
}
function closeGZ_menu(){
    //alert(111111);
    $(".GZ_menu").fadeOut();
}

/*以下A、B、C、D为餐单下传值参数*/
function Add_menu_list(){

    var num=document.getElementsByClassName('Add_menu_list_1').length;
    //alert(num);
    if(num<5)
        {
            var menu='<div class="Add_menu_list_1" id="A'+num+'">餐单名称：<input type="text" name="WX_name" value="" onchange="check_name()">' +
            '&nbsp;&nbsp;&nbsp;启用：<input type="radio" name="qiyong" value="1" style="width:5%;" onchange="qi_yong('+num+')">' +
            '关闭：<input type="radio" name="qiyong" value="0" checked style="width:5%;" onchange="guan_bi('+num+')"></div>';
            $('#jiange').after(menu);
        }else{
        $.showBox('最多只能有5个二级餐单');
    }

}
function Add_menu_list2(){

    var num=document.getElementsByClassName('Add_menu_list_2').length;
    //alert(num);
    if(num<5)
    {
        var menu='<div class="Add_menu_list_2" id="A1'+num+'">餐单名称：<input type="text" name="WX_name" value="" onchange="check_name()">' +
            '&nbsp;&nbsp;&nbsp;启用：<input type="radio" name="qiyong" value="1" style="width:5%;" onchange="qi_yong2('+num+')">' +
            '关闭：<input type="radio" name="qiyong" value="0" checked style="width:5%;" onchange="guan_bi2('+num+')"></div>';
        $('#jiange2').after(menu);
    }else{
        $.showBox('最多只能有5个二级餐单');
    }

}
function Add_menu_list3(){

    var num=document.getElementsByClassName('Add_menu_list_3').length;
    //alert(num);
    if(num<5)
    {
        var menu='<div class="Add_menu_list_3" id="A2'+num+'">餐单名称：<input type="text" name="WX_name" value="" onchange="check_name()">' +
            '&nbsp;&nbsp;&nbsp;启用：<input type="radio" name="qiyong" value="1" style="width:5%;" onchange="qi_yong3('+num+')">' +
            '关闭：<input type="radio" name="qiyong" value="0" checked style="width:5%;" onchange="guan_bi3('+num+')"></div>';
        $('#jiange3').after(menu);
    }else{
        $.showBox('最多只能有5个二级餐单');
    }

}
function check_name(){
    //alert(111);
    var _reg = /^\S{1,8}$/;
    var WX_name=$("input[name='WX_name']").val();
    if(WX_name==''){
        $.showBox('请输入正确餐单名称');
    }else if(!_reg.test(WX_name)){
        $.showBox('请输入正确餐单名称');
    }
}

function qi_yong(num){
    //alert(111111111);
        var ermenu='<div class="er_Menu" id="B'+num+'">跳转链接：<input type="radio" name="tiaozhan" value="0" style="width:2%;" onchange="Add_lianjie('+num+')" class="lianjie">'+
            '点击事件:<input type="radio" name="tiaozhan" value="1" style="width:2%;" onclick="Add_sj('+num+')" class="tianjie_e"></div>'
        ;
        $('#A'+num).append(ermenu);


}
function qi_yong2(num){
    //alert(111111111);
    var ermenu='<div class="er_Menu" id="B2'+num+'">跳转链接：<input type="radio" name="tiaozhan" value="0" style="width:2%;" onchange="Add_lianjie2('+num+')" class="lianjie">'+
        '点击事件:<input type="radio" name="tiaozhan" value="1" style="width:2%;" onclick="Add_sj('+num+')" class="tianjie_e"></div>'
    ;
    $('#A1'+num).append(ermenu);


}
function qi_yong3(num){
    //alert(111111111);
    var ermenu='<div class="er_Menu" id="B3'+num+'">跳转链接：<input type="radio" name="tiaozhan" value="0" style="width:2%;" onchange="Add_lianjie3('+num+')" class="lianjie">'+
        '点击事件:<input type="radio" name="tiaozhan" value="1" style="width:2%;" onclick="Add_sj('+num+')" class="tianjie_e"></div>'
    ;
    $('#A2'+num).append(ermenu);


}
function guan_bi(num){
    $('#A'+num).remove();
}
function guan_bi2(num){
    $('#A1'+num).remove();
}
function guan_bi3(num){
    $('#A2'+num).remove();
}
function Add_lianjie(num ){
    //alert(11111111);
    var lianjie_1='<input type="text" name="lianjie" value="" class="lianjie_1" style="width:30%;border:1px solid black;" id="C'+num+'">';
    $('#B'+num).append(lianjie_1);
    $('#D'+num).remove();
}
function Add_lianjie2(num ){
    //alert(11111111);
    var lianjie_1='<input type="text" name="lianjie" value="" class="lianjie_1" style="width:30%;border:1px solid black;" id="C'+num+'">';
    $('#B2'+num).append(lianjie_1);
    $('#D2'+num).remove();
}
function Add_lianjie3(num ){
    //alert(11111111);
    var lianjie_1='<input type="text" name="lianjie" value="" class="lianjie_1" style="width:30%;border:1px solid black;" id="C'+num+'">';
    $('#B3'+num).append(lianjie_1);
    $('#D3'+num).remove();
}
function Add_sj(num){
    $('#C'+num).remove();
}


