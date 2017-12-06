$(document).ready(function(){

    $(".Region-Enable").each(function(){
        if($(this).children(".status").val()==="open")
        {
            $(this).children(".Region-open").fadeIn();
            $(this).children(".Region-off").fadeOut();
        }
        else if($(this).children(".status").val()==="off")
        {
            $(this).children(".Region-off").fadeIn();
            $(this).children(".Region-open").fadeOut();
        }
    })
});

$(function () {
    $(".Region-Choice").change(function () {
        var num=$(".Region-Choice").val();
        $.ajax({
            type: "POST",
            url: 'Choice',
            data:({num:num}),
            success: function(msg){
                    $.showBox("操作成功!");
                    $(".Region").html("");
                    $(".Region-index-Box>.Region").html(msg);
                $(".Region-Enable").each(function(){
                    if($(this).children(".status").val()==="open")
                    {
                        $(this).children(".Region-open").fadeIn();
                        $(this).children(".Region-off").fadeOut();
                    }
                    else if($(this).children(".status").val()==="off")
                    {
                        $(this).children(".Region-off").fadeIn();
                        $(this).children(".Region-open").fadeOut();
                    }
                })
            },
            error:function (err){
                $.showBox("失败，请重试！");
            }
        });
        document.getElementById("select").setAttribute("size","5");
    });




    $(".RegionSelect_1").change(function () {
        $(".RegionSelect_2").fadeOut(0);
        var num=$(this).val();
        $("#RegionSelect"+num).fadeIn(700);
    });

    // $("#EditRegionSelect_1").change(function () {
    //     alert(123456);
    //     $(".EditRegionSelect_2").fadeOut(0);
    //     var num=$(this).val();
    //     alert(num);
    //     $("#EditRegionSelect"+num).fadeIn(700);
    // })
});
// function Choice(date) {
//     alert(123456);
//     $.ajax({
//         type: "POST",
//         url: '{:url("index")}',
//         data:({num:date}),
//         success: function(msg){
//             if(msg==="success")
//             {
//             }
//         },
//         error:function (err){
//             $.showBox("失败，请重试！");
//         }
//     });
// }


function OffRegion(date) {
    $.ajax({
        type: "POST",
        url: 'OffRegion',
        data:({id:date}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                // alert(date);
                $("#RegionSwitch_off"+date).fadeOut(0);
                $("#RegionSwitch_open"+date).fadeIn(1000);
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}
function OpenRegion(date) {
    $.ajax({
        type: "POST",
        url: 'OpenRegion',
        data:({id:date}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                // alert(date);
                $("#RegionSwitch_open"+date).fadeOut(0);
                $("#RegionSwitch_off"+date).fadeIn(1000);
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}
function AddRegion() {
    $(".AddRegion-Box").fadeIn(200);
}

function closeAdd() {
    $(".AddRegion-Box").fadeOut(200);
}

function closeEdit() {
    $(".EditRegion-Box").fadeOut(200);
}


function AddRegionSubmit() {
   var id_1=$(".RegionSelect_1").val();
   var RegionName=$('input:text[name="RegionName"]').val();
   // alert(RegionName);
   var pid="";
   var cid="";
   var level="";
   var enable=$('input:radio[name="RegionEnable"]:checked').val();
   if(RegionName=="")
   {
       $.showBox("区域名称不能为空！");
       $('input:text[name="RegionName"]').next("label").fadeIn(0).html("不能为空！").css("color","red");
       $('input:text[name="RegionName"]').focus();
   }else
   {
       $('input:text[name="RegionName"]').next("label").fadeOut(0);
       if(id_1=="0" && $(".RegionSelect_2").length>0)
       {
            pid="0";
            cid="0";
            level="1";
       }
       else if(id_1!="0" && $(".RegionSelect_2").length>0)
       {
           var id_2=$("#RegionSelect"+id_1).val();
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
       else if(id_1!="0" && $(".RegionSelect_2").length<=0)
       {
           pid=id_1;
           cid=id_1;
           level="2";
       }
       $.ajax({
           type: "POST",
           url: "Add",
           data: ({RegionName:RegionName,
               pid:pid,
               cid:cid,
               level:level,
               enable:enable
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

function EditRegion(data) {
    $.ajax({
        type: "POST",
        url: "edit",
        data: ({num:data
        }),
        success: function(msg){
            $(".EditRegion-Box>.EditRegion-head>.EditRegion-content").html(msg);
            $(".EditRegion-Box").fadeIn(700);
        },
        error:function (err){
            $.showBox("修改失败！");
        }
    });
}

