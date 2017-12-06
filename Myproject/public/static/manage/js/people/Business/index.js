$(function () {
   $(".BigImagesButton").click(function () {
       var image=$(this).next("input").val();
       var img= $(".SeeBigImages").children("img").attr("src", image);
       var html = '';
       $('#myDiv').html(html);
       var newImg = new Image();

       newImg.onload = function(){
           var BoxWidth=parseInt($(".SeeBigImages").width());
           var width = newImg.width;
           if(width>=BoxWidth)
           {
               $(".SeeBigImages").children("img").css("margin-left","100%");
               $(".SeeBigImages").fadeIn(100);
           }
           else
           {
               $(".SeeBigImages").children("img").css("margin-left",((BoxWidth-width)/2)+"px");
               $(".SeeBigImages").fadeIn(100);
           }

       };
       newImg.src = img.attr("src");

   }); 
});

function closeImage() {
    $(".SeeBigImages").fadeOut(0);
}