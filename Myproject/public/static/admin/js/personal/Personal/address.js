function guan_li(){
    $(".icon-edit").fadeIn();
    $(".icon-trash").fadeIn();
    $(".Add_button").fadeOut();
    $(".Add_button2").fadeIn();
}
function guan_li_close(){
    $(".icon-edit").fadeOut();
    $(".icon-trash").fadeOut();
    $(".Add_button2").fadeOut();
    $(".Add_button").fadeIn();
}
function Add_ress(){
    $(".Address_hidden").fadeIn();
}
function Add_ress_close(){
    $(".Address_hidden").fadeOut();
}
function address_qu(){
    //alert(11);
    var num=document.getElementsByClassName('address_list').length;
    //console.log(num);
    if(num<3){
        var text='<div class="address_list" id="address_list'+num+'">' +
            '<input type="radio" value="" name="address">' +
            '<div class="address_list_1">' +
            '<span>XXX省XXx市XXX县XXX区XXXX栋XXX号</span>' +
            '<p>名字名字名字</p>' +
            '</div>' +
            '<div class="address_list_2">18794586325</div>' +
            '<i class="icon-edit" style="display:none;" id="ed'+num+'" onclick="edit_address()"></i>' +
            '<em class="icon-trash" style="display:none;" id="de'+num+'" onclick="del_address()"></em>' +
            '</div>';
        var mename=$("input[name='mename']").val();
        var sex=$("input[name='sex']").val();
        var phnumber=$("input[name='phnumber']").val();
        var address=$("input[name='addressname']").val();
        $(".jiange").append(text);
        var list=document.getElementById('address_list'+num);
        var Osp=list.getElementsByTagName('span')[0];
        var Op=list.getElementsByTagName('p')[0];
        var Od=list.getElementsByTagName('div');
        console.log("#address_list"+num);

        Osp.innerHTML=address;
        Op.innerHTML=mename;
        Od[1].innerHTML=phnumber;
        //self.location='/admin/personal/Personal/address';
        console.log(Od);
    }else{
        alert("最多只能添加3个地址");
    }

}

function edit_address(){
    //alert(111111111);
    $(".Address_hidden_1").fadeIn();
}
function close_edit_address(){
    //alert(111111111);
    $(".Address_hidden_1").fadeOut();
}
