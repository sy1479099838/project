window.onload=function(){
    var demoLeft2RightSpeed=20;//速度数值越大速度越慢
    demoLeft2Right_left.innerHTML=demoLeft2Right_right.innerHTML;
    function demoLeft2RightMarquee(){
        if(demoLeft2Right.scrollLeft<=0)
            demoLeft2Right.scrollLeft+=demoLeft2Right_left.offsetWidth;
        else{
            demoLeft2Right.scrollLeft--;
        }
    }
    var demoLeft2RightMyMar=setInterval(demoLeft2RightMarquee,demoLeft2RightSpeed);
    demoLeft2Right.onmouseover=function() {clearInterval(demoLeft2RightMyMar)};
    demoLeft2Right.onmouseout=function() {demoLeft2RightMyMar=setInterval(demoLeft2RightMarquee,demoLeft2RightSpeed)}
};
