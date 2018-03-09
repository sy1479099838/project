$(function () {
   $(".Level").click(function () {
       $(".Level").css("color","black");
       $(this).css("color","red");
       $(this).prevAll(".Level").css("color","red");
       var hiddenval=$(this).children().val();
       document.getElementById("hidden_list").value=hiddenval;
   });
});

function elease(num) {
    alert(num);
}


