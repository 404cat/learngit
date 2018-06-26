$(function () {
    var log = console.log;


    var newArray = [];
    var daynum = JSON.parse(sessionStorage.getItem('dayNum'));

    $('.confirm').on('click', function () {
        history.go(-1);
    }) /* 点击返回上一页 */


    function getIdentity() {
        identityInfoArray = JSON.parse(sessionStorage.getItem("identity"));
        console.log(identityInfoArray);
    } /* 获取身份数组 */

    function assignment() {
        getIdentity(); /* 获取身份数组 */
        for (var i = 0; i < identityInfoArray.length; i++) {
            newArray.push({
                number: i + 1,
                identity: identityInfoArray[i],
                state: true
            }); /* 添加号码、身份信息、状态 */
        }
    }
    assignment(); /* 把号码牌和身份信息、状态储存至数组 */

    for (var i = 0; i < newArray.length; i++) {
        $("#main").append($('.box').eq(i).clone(true)); /* 克隆添加节点 */
        $(".identity").eq(i).text(newArray[i].identity); /* 为格子添加身份信息 */
        $(".identityNum").eq(i).text(newArray[i].number + "号"); /* 添加号码 */
    }
    $("#main").children(":last-child").remove(); /* 删除多余的格子 */

    if (daynum != null & daynum > 0) {
        newArray = JSON.parse(sessionStorage.getItem('newArray'));
        log(newArray);
        for (var j = 0; j < daynum; j++) {
            for (var m = 0; m < newArray.length; m++) {
                if (newArray[m].state == false) {
                    $('.box').eq(m).find('.identity').css('background', '#333'); /* 被杀死的变颜色 */
                }
            }
        }
    } /* 初始化，如果天数大于0，代表进行到了第二天以上，把身份状态为杀死的格子变色； 如何让状态为死亡的格子只在增加天数的时候生成？？ */



})