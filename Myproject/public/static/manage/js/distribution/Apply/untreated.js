$(function () {
    box.onclick = function(){
        // var WinWidth="";
        var winWidth = window.innerWidth;
        alert(winWidth);
        var myWindow=window.open("test.html",'newwindow','height=500,width=400,top=300,left=600,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no,status=no,z-look=yes');

    };
});
