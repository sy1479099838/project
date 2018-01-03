/**
 * Created by Administrator on 2017/12/27 0027.
 */

layui.use(['form', 'laydate'], function(){
    var form = layui.form
        ,laydate = layui.laydate;

    //日期
    laydate.render({
        elem: '#zdate1',
        type: 'datetime'
    });
    laydate.render({
        elem: '#zdate2',
        type: 'datetime'
    });

});


/*消费记录查询弹窗*/
function Check_xiaofei(){
    $(".tanchuang").fadeIn(5);
}

/*消费记录查询关闭*/
function close_Check_xiaofei(){
    $(".tanchuang").fadeOut(0);
}

/*ip查询弹窗*/
function Check_ip(){
    $(".check_ip").fadeIn(5);
}

/*ip查询关闭*/
function close_Check_ip(){
    $(".check_ip").fadeOut(0);
}
