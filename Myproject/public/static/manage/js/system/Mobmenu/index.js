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