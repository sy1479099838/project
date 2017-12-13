function Editicon(data) {
    alert(data);
}
$(document).ready(function(){

    $(".Mobmenu-Enable").each(function(){
        if($(this).children(".status").val()==="open")
        {
            $(this).children(".Mobmenu-open").fadeIn();
            $(this).children(".Mobmenu-off").fadeOut();
        }
        else if($(this).children(".status").val()==="off")
        {
            $(this).children(".Mobmenu-off").fadeIn();
            $(this).children(".Mobmenu-open").fadeOut();
        }
    })
});

function AddClass() {
    $(".AddClass-Box").fadeIn(200);
}
function closeAddClass() {
    $(".AddClass-Box").fadeOut(0);
}

$(function () {
    $(".ClassSelect_1").change(function () {
        $(".ClassSelect_2").fadeOut(0);
        var num=$(this).val();
        $("#ClassSelect"+num).fadeIn(700);
    });
});

function AddClassSubmit() {
    alert("add");
}
