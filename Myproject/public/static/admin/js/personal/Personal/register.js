function saveInfor() {
    alert(234786);
}

function Sure() {
    $(".Wring").fadeOut(100);
    $(".Agree").fadeIn(100);
}

function Cancel() {
    self.location="/admin/personal/Personal/index.html";
}

$(function () {
   $("#Agree").click(function () {
       var type=$(this).get(0).checked;
       if(type==true)
       {
            $("#Next").attr("onclick","NextStep()");
       }
       else
       {
           $("#Next").attr("onclick","");
       }
   });
});

function NextStep() {
    $(".contract").fadeOut(0);
    $(".information").fadeIn(200);
}