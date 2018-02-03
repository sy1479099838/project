    tds=document.getElementsByTagName("td");
    var index;
    function  test(){
        alert(1111111);
        for(var i=0;i<tds.length;i++){
            console.log(tds[i]);
            if(tds[i]==this)
            {
                index=i;
            }
        }
        //选中的设置成红色 没选中的设置成黑色
        for(var i=0;i<=index;i++) {
            tds[i].style.color = "red";
        }
        for(var i=index+1;i<tds.length;i++){
            tds[i].style.color="black";
        }
    }

    
    $(function () {
       $(".Level").click(function () {
           $(".Level").css("color","black");
           $(this).css("color","red");
           $(this).prevAll(".Level").css("color","red");
           //console.log($(this).children().val());
           var hiddenval=$(this).children().val();
           document.getElementById("hidden_list").value=hiddenval;
       });
    });
    var imgfile=new Object();
    function choseMoreImg() {
        $("#yulan").html("");
        imgfile[0]="";
        var file = document.getElementById('abc').files;
        var fileNum=file.length;
        if(fileNum!=0)
        {
            var arr = Object.keys(imgfile);
            var oldNum = arr.length;
            for(j=oldNum;j<(fileNum+oldNum);j++)
            {
                imgfile[j]=file[j-oldNum];
            }
        }
        var arr2 = Object.keys(imgfile);
        var oldNum2 = arr2.length;
        for(i=1;i<oldNum2;i++)
        {
            var imgfiles = imgfile[i];
            var reader = new FileReader();
            reader.readAsDataURL(imgfiles);
            reader.onload = function (theFile) {
                var image = new Image();
                image.src = theFile.target.result;
                var text='<img src="'+image.src+'">';
                var result=$("#yulan").append(text);
            }
        }
    }
    /*
     * 多图上传测试
     * */
    function fabu() {

        var texta=$("#pingluna").val();
        console.log(texta);
        var xingdeng=$("#hidden_list").val();
        console.log(xingdeng);
        // console.log(formArray);
        var arr = Object.keys(imgfile);//获取照片的数量
        var oldNum = arr.length;
        if(oldNum<2)//如果没有选择照片，则返回提醒选择照片
        {
            confirm("请上传图片");
        }
        else
        {
            var formData = new FormData();
            for(i=1;i<=(oldNum+1);i++){
                formData.append("Image["+(i-1)+"]", imgfile[i]);
            }
            console.log(formData);
            $.ajax({
                url: 'fabu',
                type: "POST",
                processData: false,
                contentType: false,
                data: ({
                    formData:formData,
                    texta:texta,
                    xingdeng:xingdeng

                }),
                success: function (msg) {
                    if(msg=="success")
                    {
                        alert("添加评价成功！");
                    }
                    else
                    {

                        alert("失败，请重试！");
                    }

                    // console.log(msg);
                },
                error:function (msg) {
                    alert("失败！");
                }
            });
        }
    }


