
$(document).ready(function(){

    $(".PcMenu-Enable").each(function(){
        // alert($(this).children(".status").val());
        if($(this).children(".status").val()=="1")
        {
            $(this).children(".PcMenu-open").fadeIn();
            $(this).children(".PcMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()!="1")
        {
            $(this).children(".PcMenu-off").fadeIn();
            $(this).children(".PcMenu-open").fadeOut();
        }
    })

});

function OffMenua(date) {
    $.ajax({
        type: "POST",
        url: 'OffRegion',
        data:({id:date}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                // alert(date);
                $(this).children(".PcMenu-off").fadeIn();
                $(this).children(".PcMenu-open").fadeOut();
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}
function OpenMenua(date) {
    $.ajax({
        type: "POST",
        url: 'OpenRegion',
        data:({id:date}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                // alert(date);
                $(this).children(".PcMenu-open").fadeIn();
                $(this).children(".PcMenu-off").fadeOut();
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}

    function Add_fenlei_re(){
        //alert(11111111);
        $(".Add_fenlei_re").fadeIn();
    }

    function closeAdd_fenlei_re(){
        $(".Add_fenlei_re").fadeOut();
    }

    function EditFenleir(){
        //alert(0);
        $(".edit_fenlei_re").fadeIn();
}
    function closeedit_fenlei_re(){
        $(".edit_fenlei_re").fadeOut();
    }


