function addbutton(data) {
    alert(data);
}

function Add_menu(){
    //alert(111111);
    $(".GZ_menu").fadeIn();
}
function closeGZ_menu(){
    //alert(111111);
    $(".GZ_menu").fadeOut();
}
function Add_menu_list(){
    var num=document.getElementsByClassName('Add_menu_list_1').length;
    //alert(num);
    var menu='<div class="Add_menu_list_1">餐单名称：<input type="text" name="WX_name" value="" onchange="check_name()">' +
        '&nbsp;&nbsp;&nbsp;启用：<input type="radio" name="qiyong" value="1" style="width:5%;" onclick="qi_yong('+num+')">' +
        '关闭：<input type="radio" name="qiyong" value="0" checked style="width:5%;" onclick="guan_bi('+num+')">' +
        '<button class="del">删除</button><div id="A'+num+'"></div></div>';
    $('.jiange').after(menu);
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
    var kaiguan=true;
    if(kaiguan){
        var ermenu='<div class="er_Menu">跳转链接：<input type="radio" name="tiaozhan" value="0" style="width:2%;" onclick="Add_lianjie()" class="lianjie">'+
            '添加二级餐单:<input type="radio" name="tiaozhan" value="1" style="width:2%;" onclick="Add_er()" class="tianjie_e"></div>'
        ;
        $('#A'+num).append(ermenu);
        kaiguan=false;
    }

}
function guan_bi(){
    $(".er_Menu").remove();
}
function Add_lianjie(){
    //alert(11111111);
    var lianjie_1='<input type="text" name="lianjie" value="" class="lianjie_1" style="width:30%;">';
    $('.lianjie').append(lianjie_1);
    $('.tianjie_e').remove();
}

function Add_er(){
    var erji='<button class="Add_er_1" onclick="Add_er_1">添加二级餐单</button>';
    $('.tianjie_e').append(erji);
    $('.lianjie_1').remove();
}