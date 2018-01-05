/**
 * Created by Administrator on 2018/1/5 0005.
 */
window.onload=function(){

    //低版本的IE浏览器不支持getElementByClassName方法，考虑兼容性,重写方法。
    if (!document.getElementByClassName) {
        document.getElementByClassName =function(cls){
            var ret = [];
            var clsElments = document.getElementsByTagName('*');
            for (var i = 0, len = clsElments.length; i < len; i++) {
                //考虑一个标签有多个class的情况,这里用正则表达式会好一点
                if (clsElments[i].className == cls
                    || (clsElments[i].className.indexOf(cls + " ") >= 0)
                    || (clsElments[i].className.indexOf(" " + cls + " ") >= 0)
                    || (clsElments[i].className.indexOf(" " + cls) >= 0))
                {
                    ret.push(clsElments[i]);
                }
            }
            return ret;
        }

    }


    //购物车开始

    var list=document.getElementById('BoughtFruitBox');
    var Ol=list.getElementsByTagName('li');
    //console.log(Ol);
    var Ospan=document.getElementByClassName('BoughtFruit_text');
    //console.log(Ospan);
    //var Price=document.getElementByClassName('price');
    //console.log(Price);
    var Xprice=document.getElementsByTagName('em');
    var checkInput = document.getElementByClassName('check');
    var checkAllInput=document.getElementByClassName('check_all');
    var checkInput = document.getElementByClassName('check');

    for(var i=0;i<Ol.length;i++){
        fn1(Ol[i]);//重复调用
    }

    //通过传参将Ol传入函数中
    function fn1(Ol){
        var Oe=Ol.getElementsByTagName('em')[0];
        var OBn=Ol.getElementsByTagName('button');
        var OStronf=Ol.getElementsByTagName('strong')[0];
        var Onum=Ol.getElementsByTagName('input');
        var Ob=Ol.getElementsByTagName('b')[0];
        var Ospan=Ol.getElementsByTagName('span');
        //console.log(Ob);
        var n1=Number(Onum[1].value);
        var n2=parseInt(Ob.innerHTML);
        console.log(n2);
        //此处计算购物车中默认数量的商品的小计
        Xprice();
        //++
        OBn[1].onclick=function(){
            //alert(111111);
            n1++;
            Onum[1].value=n1;
            Xprice();
        };
        //--
        OBn[0].onclick=function(){
            //alert(111111);
            n1--;
            if(n1<0){
                n1=0;
            }
            Onum[1].value=n1;
            Xprice();
            deleteGoods();
        };
       /* //删除
        Ospan[2].onclick=function(){
            var conf = confirm("确定删除这个商品？");
            if (conf) {
                //alert(1111111111);
                this.parentNode.remove();
            }
        };*/
        //手动输入
        Onum[1].onchange=function(){
            //alert(111111);
            n1=Onum[1].value;
            Xprice();
            deleteGoods();

        };

        //计算小计
        function Xprice(){
            Oe.innerHTML=n1*n2+'元';
        };
        //商品数量减到0时删除
        function deleteGoods(){
            if(n1==0){
                alert(11111);
                Onum[0].parentNode.remove();
            }
        };

    }


    //复选框绑定单击事件
    for (var i = 0, len = checkInput.length; i < len; i++){
        checkInput[i].onclick =function (){
            //alert(1111111111);
            //判断全选按钮，变更
            if (this.className == "check_all check") {
                for (var j = 0; j < len; j++){
                    checkInput[j].checked = this.checked;
                }
            }
            if (this.checked == false) {
                for (var k = 0,len2 = checkAllInput.length; k < len2; k++){
                    checkAllInput[k].checked = false;
                }
            }
            getTotle(Ol);
        }
    }

    //计算合计
    function getTotle(Ol){
        var heji=document.getElementByClassName('heji');
        var priceNum = 0;//价格
        for (var i = 0,len = Ol.length; i < len; i++) {
            if (Ol[i].getElementsByTagName("input")[0].checked) {
                //Ol[i].className ="on";
                priceNum += parseFloat(Xprice[i].innerHTML);

                console.log(priceNum);
            }
            else{
                //Ol[i].className = "";
            }
        }
        $(".heji").html(priceNum);
    }


}