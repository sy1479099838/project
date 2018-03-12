$(function () {
   $(".reduceNum").click(function () {
       var num=parseInt($(this).next("input").val());
       if(num>0){
           num=num-1;
           $(this).next("input").val(num);
           window.onload=CalculatingPrice();
       }
   });
   $(".addNum").click(function () {
       var num = parseInt($(this).prev("input").val());
       num = num + 1;
       $(this).prev("input").val(num);
       window.onload=CalculatingPrice();
   });
   $(".check_one").click(function () {
       window.onload=CalculatingPrice();
   });

   $(".check_all").click(function () {
       var type=$(this).get(0).checked;
       if(type==true){
           checkAll("true");
           window.onload=CalculatingPrice();
       }else{
           checkAll("false");
           $(".heji").text("￥"+0);
       }
   });
});
function CalculatingPrice() {
    var i=0;
    var AllPrice=0;
    $(".check_one").each(function(){
        var num=$("body").find(".BoughtFruit_num").eq(i).val();
        i++;
        var type=$(this).get(0).checked;
        if(type==true){
            var price=$(this).val();
            var Price=parseInt(num)*parseFloat(price);
            AllPrice=AllPrice+Price;
        }
    });
    $(".heji").text("￥"+AllPrice);
}
function checkAll(z) {
    var el = document.getElementsByClassName('check_one');
    var len = el.length;
    for(var i=0; i<len; i++){
        if(z=="true"){
            el[i].checked = true;
        }else{
            el[i].checked = false;
        }
    }
}
function Settlement() {
    var i=0;
    var List={};
    var j=0;
    $(".check_one").each(function(){
        var num=$("body").find(".BoughtFruit_num").eq(i).val();
        var packNum=$("body").find(".package").eq(i).val();
        i++;
        var type=$(this).get(0).checked;
        if(type==true){
            var tao={};
            tao["num"]=num;
            tao["packNum"]=packNum;
            List[j]=tao;
            j++;
        }
    });
    List=fisker_encode_v2(JSON.stringify(List));
    self.location='/admin/shoppingcar/Shoppingcar/dingdanqu.html?info='+List+"&taocan=shoppingCar";
}