function check_pinlun(num){
    //alert(1111111111);
    $('#Pin'+num).fadeIn();

}
function close_check_pinlun(num){
    $('#Pin'+num).fadeOut();
}
function huifu(num){
    //alert(22222);
    $('#Huifu'+num).fadeIn();
}
function close_huifu(num){
    //alert(22222);
    $('#Huifu'+num).fadeOut();
}
function tijiao(num){
    var huifu=$("#wenben"+num).val();
    console.log(huifu);
    $.ajax({
        url:"huifude",
        type:"post",
        data:({
            huifu:huifu
        }),
        success:function(msg){
            if(msg!="error"){
                alert("回复成功");
            }else{
                alert("提交数据失败");
            }
        },
        error:function(msg){

        }


    })
}