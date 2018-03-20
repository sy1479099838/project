$(function () {
    box.onclick = function(){
        var Width=window.innerWidth;
        var Height=window.innerHeight;
        var Awidth=300;
        var Aheight=300;
        var top=(Height-Aheight)/2;
        var left=(Width-Awidth)/2;
        myWindow=window.open("test.html",'_blank','height='+Aheight+',width='+Awidth+',top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no,status=no,z-look=yes');
        var CantClick=$(".CantClick");
        CantClick.attr("onclick","test12334()");
        CantClick.fadeIn(0);
        var loop = setInterval(function() {
            if(myWindow .closed) {
                clearInterval(loop);
                var CantClick=$(".CantClick");
                CantClick.attr("onclick","adsdfgg()");
                CantClick.fadeOut(0);
            }
        }, 1000);
    };
});

function test12334() {
    if(myWindow != null)
    {
        myWindow.focus();
    }
}
