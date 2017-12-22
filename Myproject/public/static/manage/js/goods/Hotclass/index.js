
$(document).ready(function(){

    $(".HotClass-Enable").each(function(){
        // alert($(this).children(".status").val());
        if($(this).children(".status").val()=="1")
        {
            $(this).children(".HotClass-open").fadeIn();
            $(this).children(".HotClass-off").fadeOut();
        }
        else if($(this).children(".status").val()!="1")
        {
            $(this).children(".HotClass-off").fadeIn();
            $(this).children(".HotClass-open").fadeOut();
        }
    })

});

function OffHotClass(date) {
    $.ajax({
        type: "POST",
        url: 'SwitchClass',
        data:({
            id:date,
            switch:1
        }),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                $("#HotClassClose"+date).fadeOut(0);
                $("#HotClassopen"+date).fadeIn(400);

            }
        },
        error:function (err){
            $.showBox("失败，请重试！");
        }
    });
}
function OpenHotClass(date) {
    $.ajax({
        type: "POST",
        url: 'SwitchClass',
        data:({
            id:date,
            switch:0
        }),
        success: function(msg){
            if(msg==="success")
            {
                $.showBox("操作成功！");
                $("#HotClassopen"+date).fadeOut(0);
                $("#HotClassClose"+date).fadeIn(400);

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

    function EditFenleir(id){
        $.ajax({
            url:"EditHotClass",
            type:"post",
            data:({
                num:id
            }),
            success:function (msg) {
                if(msg=="error")
                {
                    $.showBox("失败！");
                }
                else
                {
                    $(".edit_fenlei_re").html(msg);
                    $(".edit_fenlei_re").fadeIn();
                }
            },
            error:function (msg) {
                $.showBox("出错啦，请重试！");
            }
        });

    }
    function closeedit_fenlei_re(){
        $(".edit_fenlei_re").fadeOut();
    }

/*添加分类图标预览*/
function previewFile () {
    var imgfile = document.getElementById("u_img").files[0];
    var prew=document.getElementById("img_1");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload= function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            if (this.width==40 && this.height==40) {
                prew.src=image.src;
            } else {
                imgfile.src = "";
                document.getElementById("u_img").value="";
                $.showBox("请上传40*40的图标");
            }
        };
    };


}
/*查看商品详情*/
   function check_fenlei(num){
        //
       $("#CH"+num).fadeIn();

   }
function close_check_fenlei(num){
    //
    $("#CH"+num).fadeOut();
}


/*热门商品分类添加*/
function Add_fenlei_re_submit() {
    var Name = $("input[name='fenlei_min']").val();
    var Muban = $("input[name='ClassMuBan']:checked").val();
    var Kaiguan = $("input[name='kaiguan']:checked").val();
    var Xu = $("input[name='fenlei_xu']").val();
    if (Name == "") {
        $.showBox('请输入分类名称');
    } else if (Muban == "") {
        $.showBox("请输入所用模板");
    } else if (Kaiguan == "") {
        $.showBox("请明确是否启用");
    } else if (Xu == "") {
        $.showBox("请填写排列序列");
    }
    else {
        var fd = new FormData();
        fd.append("upload", 1);
        fd.append("upfile", $("#u_img").get(0).files[0]);
        $.ajax({
            url: "UplodeImg",
            type: "POST",
            processData: false,
            contentType: false,
            data: fd,
            success: function (msg) {
                if (msg == "error") {
                    $.showBox("照片上传失败！");
                }
                else {

                    $.ajax({
                        type: 'post',
                        url: 'AddHotClass',
                        data: ({
                            Name:Name,
                            Muban:Muban,
                            Kaiguan:Kaiguan,
                            Xu:Xu,
                            img:msg
                        }),
                        success: function (data) {
                            if (data == "success") {
                                $.showBox("热门商品分类添加成功！");
                                window.location.reload();
                            }
                            else if (data == "error") {
                                $.showBox("热门商品分类添加失败！");
                                window.location.reload();
                            }
                        }
                    });
                }
            }
        });
    }
}
/*编辑分类图标预览*/
function previewFile_1 () {
    var imgfile = document.getElementById("u_img_1").files[0];
    var prew=document.getElementById("img_2");
    var reader = new FileReader();
    reader.readAsDataURL(imgfile);
    reader.onload= function (theFile) {
        var image = new Image();
        image.src = theFile.target.result;
        image.onload = function() {
            if (this.width==40 && this.height==40) {
                prew.src=image.src;
            } else {
                imgfile.src = "";
                document.getElementById("u_img").value="";
                $.showBox("请上传40*40的图标");
            }
        };
    };


}

/*热门商品分类编辑*/
function Add_fenlei_re_Edit(){

    var fd = new FormData();
    fd.append("upload", 1);
    fd.append("upfile", $("#u_img_1").get(0).files[0]);
    var pan_photo=fd.append("upfile", $("#u_img_1").get(0).files[0]);
    if(pan_photo!=''){
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
                    var  Name=$("input[name='edit_fenlei_min']").val();
                    var  Muban=$("input[name='edit_moban']").val();
                    var  Kaiguan=$("input[name='Editkaiguan']").val();
                    var  Xu=$("input[name='edit_xu']").val();
                    var  Head=msg;


                    if(Name=="")
                    {
                        $.showBox('请输入分类名称');
                    }else if(Muban=="")
                    {
                        $.showBox("请输入所用模板");
                    }else if(Kaiguan=="")
                    {
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
    }else{
        var  Name=$("input[name='edit_fenlei_min']").val();
        var  Muban=$("input[name='edit_moban']").val();
        var  Kaiguan=$("input[name='Editkaiguan']").val();
        var  Xu=$("input[name='edit_xu']").val();

        if(Name=="")
        {
            $.showBox('请输入分类名称');
        }else if(Muban=="")
        {
            $.showBox("请输入所用模板");
        }else if(Kaiguan=="")
        {
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
                    Xu:Xu
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


