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

/*以下A、B、C、D为餐单下传值参数*/
function Add_menu_list(){

    var num=document.getElementsByClassName('Add_menu_list_1').length;
    //alert(num);
    if(num<5)
        {
            var menu='<div class="Add_menu_list_1" id="A'+num+'">餐单名称：<input type="text" name="WX_name" value="" onchange="check_name()">' +
            '&nbsp;&nbsp;&nbsp;启用：<input type="radio" name="qiyong" value="1" style="width:5%;" onchange="qi_yong('+num+')">' +
            '关闭：<input type="radio" name="qiyong" value="0" checked style="width:5%;" onchange="guan_bi('+num+')"></div>';
            $('.jiange').after(menu);
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
function guan_bi(num){
    $('#A'+num).remove();
}
function Add_lianjie(num ){
    //alert(11111111);
    var lianjie_1='<input type="text" name="lianjie" value="" class="lianjie_1" style="width:30%;border:1px solid black;" id="C'+num+'">';
    $('#B'+num).append(lianjie_1);
    $('#D'+num).remove();
}
function Add_sj(num){
    $('#C'+num).remove();
}
function Add_er(num){
    var erji='<button class="Add_er_1" onclick="Add_er_1('+num+')" id="D'+num+'">点击此处添加餐单</button>';
    $('#B'+num).append(erji);
    $('#C'+num).remove();
}

function Add_er_1(num){
    var num_san=document.getElementsByClassName('sanji_1').length;
    if(num_san<7){
        var  sanji='<div class="sanji_1">请输入三级餐单名称<input name="sanji" type="text" value="" class="sanji_candan"></div><br>';
        $('#D'+num).after(sanji);
    }else{
        $.showBox('三级餐单只能有7个');
    }

}