$(function () {
    var log = console.log;

    // var getConfirm = $('#confirm'); /* 获取确定按钮节点 */
    var identityInfoArray; /* 身份数组 */
    var newArray = [];
    var identity;
    var number;
    var state;
    var deliverStep;

    deliverStep = JSON.parse(sessionStorage.getItem("deliverStep"));
    log("传输的步骤为" + deliverStep);

    $('.killIcon').hide();
    $('.doctorIcon').hide();
    $('.sharpIcon').hide();
    $('.policeIcon').hide();
    /* 图标全部默认隐藏 */
    var a; /* 点击的格子角标 */
    // var clickedIndex 
    switch (deliverStep) {
        case "kill":
            $('.title').text('杀手杀人');
            $('.introduce1').text('杀手请睁眼，杀手请选择要杀的对象');
            $('.introduce2').text('点击下方玩家头像，对被杀的玩家进行标记');
            $("#main").on('click', ".box", function () {
                $('.killIcon').hide(); /* 图标初始全部隐藏 */
                $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
                $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */
                $('.killIcon').eq($(this).index()).show(); /* 点击后图标出来 */
                // sessionStorage.setItem('clickedIndex', JSON.stringify($(this).index()));
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个杀死');
                } else if (newArray[a].identity == '杀手') {
                    alert('不能杀死本职业'); /* 如果身份是杀手就弹窗 */
                } else {
                    history.go(-1);
                }
            }) /* 点击确定后执行的函数 , 如果没有点击，弹窗；如果杀死的是一个身份，弹窗；最后如果点击了就返回 */
            break;
        case "police":
            $('.title').text('警察查人');
            $('.introduce1').text('警察请睁眼，警察请选择要查看身份的对象');
            $('.introduce2').text('点击下方玩家头像，对被杀的玩家进行标记');
            $("#main").on('click', ".box", function () {
                $('.policeIcon').hide(); /* 图标初始全部隐藏 */
                $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
                $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */
                $('.policeIcon').eq($(this).index()).show(); /* 点击后图标出来 */
                sessionStorage.setItem('clickedIndex', JSON.stringify($(this).index()));
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个');
                } else if (newArray[a].identity == '警察') {
                    alert('不能查看自己的身份'); /* 如果身份是杀手就弹窗 */
                } else {
                    history.go(-1);
                }
            }) /* 点击确定后执行的函数 , 如果没有点击，弹窗；如果杀死的是一个身份，弹窗；最后如果点击了就返回 */
            break;
    } /* 通过上一个页面传输的deliverStep来判断是从那个点击按钮跳转的页面 */

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
    } /* 把号码牌和身份信息、状态储存至数组 */
    log(newArray);

    function initial() {
        assignment();
        for (var i = 0; i < newArray.length; i++) {
            $("#main").append($('.box').eq(i).clone(true)); /* 为什么克隆的节点不会被选取到？ */
            $(".identity").eq(i).text(newArray[i].identity); /* 为格子添加身份信息 */
            $(".identityNum").eq(i).text(newArray[i].number + "号"); /* 添加号码 */
            // console.log("传入对象后的数组号码：" + newArray[i].number);
            // console.log("传入对象后的数组身份：" + newArray[i].identity);
            // console.log("状态" + newArray[i].state);
        }
        $("#main").children(":last-child").remove(); /* 第二种删除方法 */

    } /* 载入页面复制格子、给格子内容赋值 */
    initial();

}) /* jQuery文档就绪事件结束 */







// console.log("array.length=" + identityInfoArray.length);

// $("#main").on('click', ".box", function () {
//     $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
//     $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */

//     sessionStorage.setItem('clickedIndex', JSON.stringify($(this).index()));
//     console.log("点击到的index为：" + $(this).index());
//     log("点击的格子状态为" + newArray[$(this).index()].state);
// }) /* 点击事件 */

/* 测试 */


// $("#main").on('click', '.box', function () {
//     $(this).css({
//         'background': 'green'
//     });
//     $(this).parent().append($('.box').clone());
//     console.log("hhee");
//     console.log($(this).index());
// })/* on方法和bind方法 */

/*  */

// $('.box').bind('click', function () {
//     $(this).css({
//         'background': 'green'
//     });
//     $(this).parent().append(
//         "<li>I don't  know how call me comeing. If you click my body , i cant do anything.</li>");
//     console.log("hhee");
//     console.log($(this).index());
// })



/* assignment 赋值 */
// function previous() {
//     resetsession();
//     window.location.href = "lookIdentity.html";
// } /* 在法官查看页返回上一页后跳转至查看身份一号页面，要把接收到的号码和数组角标号码清除 */

// function resetsession() {
//     sessionStorage.removeItem("cardNum");
//     sessionStorage.removeItem("identityindex");
//     cardNum = JSON.stringify(cardNum);
//     sessionStorage.setItem("cardNum", cardNum); /* 重新给cardNum一个状态 */
// }
// /* __________ */