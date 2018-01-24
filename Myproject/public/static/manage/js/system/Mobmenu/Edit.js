$(document).ready(function(){
    var val=$(".EditClassSelect_1").val();
    if(val!=0)
    {
        $("#EditClassSelect"+val).fadeIn();
    }
});


$(function () {
    $(".EditClassSelect_1").change(function () {
        $(".EditClassSelect_2").fadeOut(0);
        $(".EditClassSelect_2").val("0");
        var num=$(this).val();
        if(num=="0")
        {
            $(".mubanChoice").fadeIn(0);
        }
        else
        {
            $(".mubanChoice").fadeOut(0);
        }
        $("#EditClassSelect"+num).fadeIn(700);
    });
});