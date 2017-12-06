
$(function () {
    //轮播图
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true
    });

    //多图上传
    $('#test').diyUpload({
        url:'/admin/discuss/Discuss/upload',
        success:function( data ) {
            console.info( data );
        },
        error:function( err ) {
            console.info( err );
        }
    });
    //当选中图片后触发当前事件
    $("#IMGUpload").change(function() {
        var LIheight=$('.parentFileBox>.fileBoxUl>li').css('width');
        $(".parentFileBox>.fileBoxUl>li").css("height",LIheight);
    });

    //当点击定位后触发当前事件
    $('#NowPosition').click(function(){
        if($('#NowPosition').prop("checked"))
        {

            var map = new BMap.Map("allmap");
            var point = new BMap.Point();
            map.centerAndZoom(point,12);
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() === BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        JD=parseFloat(r.point.lng);
                        WD=parseFloat(r.point.lat);
                        var point = new BMap.Point(JD,WD);
                        map.centerAndZoom(point,12);
                        var myGeo = new BMap.Geocoder();
                        bmap=new BMap.Point(JD,WD);
                        myGeo.getLocation(bmap, function(result){
                            if (result){
                                var position=result.address;
                                $(".NowPosition").html(position);
                                $(".NowPosition").show(1000);
                            }
                        });
                    }
                    else {
                        alert('failed'+this.getStatus());
                    }
                },
                {enableHighAccuracy: true}
            );
        }
        else
        {
            $(".NowPosition").html("");
            $(".NowPosition").hide(1000);
        }
    });

});


function ThumbsUp() {
    $.showBox("点赞！");
}

function UserInformation(msg) {
    $.showBox(msg);
}


function hidePublish() {
    $(".Discuss_publish_box").hide(1000);
}

function showPublish() {
    $(".Discuss_publish_box").show(1000);
}

function PanDuan() {


    if(!$('.parentFileBox').length>0)
    {
        var FengJing=$('input:radio[name="DiscussScenic"]:checked').val();
        if(FengJing==null || FengJing=="")
        {
            $(".Discuss_publish_Scenic div label").show();
            $.showBox("请选择您去过的地方！");
        }
        else
        {
            var position=$('.NowPosition').html();
            var DiscussFeel=$(".DiscussFeel").val();
            $.ajax({
                type: "POST",
                url: "TextUpload",
                data: ({position:position,
                    DiscussFeel:DiscussFeel,
                    FengJing:FengJing
                }),
                success: function(msg){
                    if(msg==="success") {
                        $.showBox("发表成功");
                        window.location.reload();
                    }
                    else
                    {
                        $.showBox("发表失败!");
                        window.location.reload();
                    }
                }
            });
        }
    }
}
function DiscussHIde() {
    $("#SeeImg").fadeOut(200);
    $("#SeeImg").html("");
}

function DiscussSeeImg(data) {
    var arr = data.split('_');
    $.ajax({
        url:"findPhoto",
        type:"post",
        data:({num:arr[1]}),
        success:function (msg) {
            $("#SeeImg").html(msg);

            $("#SeeImg").fadeIn(200);

            var mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop:true,
                grabCursor: true,
                paginationClickable: true
            });
            var wid = -$(window).width();
            $(".swiper-wrapper").css("transform", "translate3d(" + arr[0] * wid + "px, 0px, 0px)");
            var windowHeight=$(window).height();
            var DivHeight=$(".swiper-container").height();
            $(".swiper-container").css("margin-top",(windowHeight-DivHeight)/3+"px");
            var $elements = $('.swiper-slide');
            $elements.each(function() {
                var imgHeight=$(this).height();
                imgHeight=parseInt(imgHeight);
                var num=(DivHeight-imgHeight)/2;
                $(this).css({"margin-top":num+"px"});
            });
        },
        error:function () {
            
        }
    });
}
