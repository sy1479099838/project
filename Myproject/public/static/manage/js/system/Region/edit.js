
$(document).ready(function(){

   var num=$(".EditRegionSelect_1").val();
    $("#EditRegionSelect"+num).fadeIn(700);
});

$(function () {
    $(".EditRegionSelect_1").change(function () {
        $(".EditRegionSelect_2").fadeOut(0);
        var num=$(this).val();
        $("#EditRegionSelect"+num).fadeIn(700);
    })
});
function EditRegionSubmit(date) {
   var id_1=$(".EditRegionSelect_1").val();
   var RegionName=$('input:text[name="EditRegionName"]').val();
   var pid="";
   var cid="";
   var level="";
   var enable=$('input:radio[name="EditRegionEnable"]:checked').val();
   if(RegionName=="")
   {
       $.showBox("区域名称不能为空！");
       $('input:text[name="EditRegionName"]').next("label").fadeIn(0).html("不能为空！").css("color","red");
       $('input:text[name="EditRegionName"]').focus();
   }else
   {
       $('input:text[name="EditRegionName"]').next("label").fadeOut(0);
       if(id_1=="0" && $(".EditRegionSelect_2").length>0)
       {
            pid="0";
            cid="0";
            level="1";
       }
       else if(id_1!="0" && $(".EditRegionSelect_2").length>0)
       {
           var id_2=$("#EditRegionSelect"+id_1).val();
           // alert(typeof(id_2));
           if(id_2=="0"||typeof(id_2) == "undefined")
           {
               pid=id_1;
               cid=id_1;
               level="2";
           }
            else
           {
               pid=id_2;
               cid=id_1+","+id_2;
               level="3";
           }
       }
       else if(id_1!="0" && $(".EditRegionSelect_2").length<=0)
       {
           pid=id_1;
           cid=id_1;
           level="2";
       }
       $.ajax({
           type: "POST",
           url: "EditRegion",
           data: ({RegionName:RegionName,
               pid:pid,
               cid:cid,
               level:level,
               enable:enable,
               id:date
           }),
           success: function(msg){
               if(msg=="success")
               {
                   $.showBox("添加成功！");
                   window.location.reload();
               }
               else if(msg=="error")
               {
                   $.showBox("添加失败！");
               }
               else
               {
                   $.showBox("请选择区域！");
               }

           },
           error:function (err){
               $.showBox("添加失败！");
           }
       });
   }
}

