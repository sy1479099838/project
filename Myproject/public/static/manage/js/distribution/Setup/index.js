function panNum(num) {
    var text=parseInt(num);
    if(!(text>=0))
    {
        $(".DayNum").val("");
    }
}

function panPrice(float) {
    var pattern = /^(?:[1-9][0-9]*(?:\.[0-9]+)?|0\.(?!0+$)[0-9]+)$/;
    var type=pattern.test(float);
    if(type==false)
    {
        $(".Price").val("");
    }
}

$(function () {
   $(".ShowPriceBox").click(function () {
       var num=$(this).val();
       if(num=="1")
       {
           $(this).parent("p").nextAll(".Price").fadeIn(100);
       }
       else
       {
           $(this).parent("p").nextAll(".Price").fadeOut(100);
       }
   });
});

function Save() {
    var num=1;
    var arr = {};
    $(".distribution_Setup").each(function(){
        arr[num-1] = fisker_encode_v2(JSON.stringify($("#distribution"+num).serializeArray()));
        num++;
    });
    arr=JSON.stringify(arr);
    $.ajax({
        url:'SaveInfo',
        type:'post',
        data:({
            data:arr
        }),
        success:function (msg) {
            $.showBox(msg);
        },
        error:function () {
            
        }
    });
}