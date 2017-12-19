
$(document).ready(function(){

    $(".PcMenu-Enable").each(function(){
        // alert($(this).children(".status").val());
        if($(this).children(".status").val()=="1")
        {
            $(this).children(".PcMenu-open").fadeIn();
            $(this).children(".PcMenu-off").fadeOut();
        }
        else if($(this).children(".status").val()!="1")
        {
            $(this).children(".PcMenu-off").fadeIn();
            $(this).children(".PcMenu-open").fadeOut();
        }
    })

});

function OffMenua(date) {
    $.ajax({
        type: "POST",
        url: 'OffRegion',
        data:({id:date}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                // alert(date);
                $(this).children(".PcMenu-off").fadeIn();
                $(this).children(".PcMenu-open").fadeOut();
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}
function OpenMenua(date) {
    $.ajax({
        type: "POST",
        url: 'OpenRegion',
        data:({id:date}),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                // alert(date);
                $(this).children(".PcMenu-open").fadeIn();
                $(this).children(".PcMenu-off").fadeOut();
            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}

    function Add_fenlei_re(){
        //alert(11111111);
        $(".Add_fenlei_re").fadeIn();
    }

    function closeAdd_fenlei_re(){
        $(".Add_fenlei_re").fadeOut();
    }

    function EditFenleir(){
        //alert(0);
        $(".edit_fenlei_re").fadeIn();
}
    function closeedit_fenlei_re(){
        $(".edit_fenlei_re").fadeOut();
    }

/*分类图标预览*/
function previewFile () {
    var imgfile = document.getElementById("u_img").files[0];
    var prew=document.getElementById("img_1");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload= function (theFile) {
        //alert(0);
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            //alert("图片的宽度为"+this.width+",长度为"+this.height);
            if (this.width==40 && this.height==40) {
                prew.src=image.src;
            } else {
                imgfile.src = "";
                $.showBox("请上传40*40的图标");
            }

        };
        //alert(imgfile.src);
    };


}
/*热门商品分类添加*/
function Add_fenlei_re_submit(){

}


/*热门商品分类编辑*/
function Add_fenlei_re_Edit(){
    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#img3").get(0).files[0]);
    $.ajax({
        url: "UplodeImg",
        type: "POST",
        processData: false,
        contentType: false,
        data: fd,
        success: function(msg) {
            if(msg=="error")
            {
                $.showBox("照片上传失败！");
            }
            else
            {
                var  Name=$("input[name='fenlei_min']").val();
                var  Muban=$("input[name='fenlei_mu']").val();
                var  Kaiguan=$("input[name='kaiguan']").val();
                var  Xu=$("input[name='fenlei_xu']").val();
                var  Head=msg;


                if(Name=="")
                {
                    $.showBox('请输入分类名称');
                }else if(Muban=="")
                {
                    $.showBox("请输入所用模板");
                }else if(Kaiguan==""){
                    $.showBox("请明确是否启用");
                }else if(Xu=="")
                {
                    $.showBox ("请填写排列序列");
                }
                else{

                    $.ajax({
                        type:'post',
                        url:'AddBusiness',
                        data:({
                            Name:name,
                            Muban:Muban,
                            Kaiguan:Kaiguan,
                            Xu:Xu,
                            Head:Head
                        }),
                        success:function(data){
                            if(data=="success")
                            {
                                $.showBox("热门商品分类添加成功！");
                                window.location.reload();
                            }
                            else if(data=="error")
                            {
                                $.showBox("热门商品分类添加失败！");
                                window.location.reload();
                            }
                            else
                            {
                                $.showBox(data);
                            }
                        }


                    });
                }


            }
        }
    });
}


