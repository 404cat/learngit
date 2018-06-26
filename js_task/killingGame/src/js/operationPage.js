$(function () {
    var log = console.log;

    // var getConfirm = $('#confirm'); /* 获取确定按钮节点 */
    var identityInfoArray; /* 身份数组 */
    var newArray = [];
    var identity;
    var number;
    var state;
    var a; /* 点击的格子角标 */
    var clickedIndex = new Array(0); /* 储存被点击的角标 */
    var killedIndex = new Array(0);
    var policeIndex = new Array(0);
    var sharpIndex = new Array(0);
    var doctorIndex = new Array(0);
    var voteIndex = new Array(0);

    var deliverStep = JSON.parse(sessionStorage.getItem("deliverStep"));
    log("传输的步骤为" + deliverStep);

    $('.killIcon').hide();
    $('.doctorIcon').hide();
    $('.sharpIcon').hide();
    $('.policeIcon').hide();
    /* 图标全部默认隐藏 */


    function saveClikedIndex() {
        assignment(); /* 身份数组 */
        if (deliverStep != "kill") {
            clickedIndex = JSON.parse(sessionStorage.getItem("clickedIndex"));
            log(typeof clickedIndex);
        }
        log(clickedIndex);
        clickedIndex.push(a);
        sessionStorage.setItem("clickedIndex", JSON.stringify(clickedIndex));

        if (deliverStep == 'kill') {
            if (killedIndex.length != 0) {
                killedIndex = JSON.parse(sessionStorage.getItem('killedIndex'));
            }
            killedIndex.push(a);
            sessionStorage.setItem('killedIndex', JSON.stringify(killedIndex));
        }

        if (deliverStep == 'police') {
            if (policeIndex != 0) {
                policeIndex = JSON.parse(sessionStorage.getItem('policeIndex'))
            }
            policeIndex.push(a);
            sessionStorage.setItem('policeIndex', JSON.stringify(policeIndex));
        }

        if (deliverStep == 'sharp') {
            if (sharpIndex != 0) {
                sharpIndex = JSON.parse(sessionStorage.getItem('sharpIndex'));
            }
            sharpIndex.push(a);
            sessionStorage.setItem('sharpIndex', JSON.stringify(sharpShoot));
        }

        if (deliverStep == 'doctor') {
            if (doctorIndex != 0) {
                doctorIndex = JSON.parse(sessionStorage.getItem('doctorIndex'));
            }
            doctorIndex.push(a);
            sessionStorage.setItem('doctorIndex', JSON.stringify(doctorIndex));
        }

        if (deliverStep == 'vote') {
            if (voteIndex != 0) {
                voteIndex = JSON.parse(sessionStorage.getItem('voteIndex'));
            }
            voteIndex.push(a);
            sessionStorage.setItem('voteIndex', JSON.stringify(voteIndex));
        } /* 把从操作页面操作过的角标储存到数组中，到法官台本页面通过遍历数组增加节点 */
    }

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
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个杀死');
                } else if (newArray[a].identity == '杀手') {
                    alert('不能杀死本职业'); /* 如果身份是杀手就弹窗 */
                } else {
                    log(typeof clickedIndex);
                    saveClikedIndex(); /* 被点击的角标存入数组中 */
                    newArray[a].state = false;
                    history.go(-1);
                }
            }) /* 点击确定后执行的函数 , 如果没有点击，弹窗；如果杀死的是一个身份，弹窗；最后如果点击了就返回 */
            break;
        case "police":
            $('.title').text('警察查人');
            $('.introduce1').text('警察请睁眼，警察请选择要查看身份的对象');
            $('.introduce2').text('点击下方玩家头像，对被查看的玩家进行标记');
            $("#main").on('click', ".box", function () {
                $('.policeIcon').hide(); /* 图标初始全部隐藏 */
                $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
                $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */
                $('.policeIcon').eq($(this).index()).show(); /* 点击后图标出来 */
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个');
                } else if (newArray[a].identity == '警察') {
                    alert('不能查看自己的身份'); /* 如果身份是杀手就弹窗 */
                } else {
                    saveClikedIndex();
                    history.go(-1);
                }
            }) /* 点击确定后执行的函数 , 如果没有点击，弹窗；如果杀死的是一个身份，弹窗；最后如果点击了就返回 */
            break;
        case "sharp":
            $('.title').text('狙击狙人');
            $('.introduce1').text('狙击手请睁眼，请选择要狙杀的对象');
            $('.introduce2').text('点击下方玩家头像，对被狙杀的玩家进行标记');
            $("#main").on('click', ".box", function () {
                $('.sharpIcon').hide(); /* 图标初始全部隐藏 */
                $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
                $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */
                $('.sharpIcon').eq($(this).index()).show(); /* 点击后图标出来 */
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个');
                } else if (newArray[a].identity == '狙击手') {
                    alert('不能狙杀同一个身份'); /* 如果身份是杀手就弹窗 */
                } else {
                    saveClikedIndex();
                    newArray[a].state = false;
                    history.go(-1);
                }
            }) /* 点击确定后执行的函数 , 如果没有点击，弹窗；如果杀死的是一个身份，弹窗；最后如果点击了就返回 */
            break;
        case "doctor":
            $('.title').text('医生救人');
            $('.introduce1').text('医生请睁眼，请选择要医治的对象');
            $('.introduce2').text('点击下方玩家头像，对被医治的玩家进行标记');
            $("#main").on('click', ".box", function () {
                $('.doctor').hide(); /* 图标初始全部隐藏 */
                $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
                $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */
                $('.doctor').eq($(this).index()).show(); /* 点击后图标出来 */
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个');
                } else {
                    saveClikedIndex();
                    newArray[a].state = true;
                    history.go(-1);
                }
            }) /* 点击确定后执行的函数 , 如果没有点击，弹窗；如果杀死的是一个身份，弹窗；最后如果点击了就返回 */
            break;
        case "vote":
            $('.title').text('全民投票');
            $('.introduce1').text('发言讨论结束，大家请投票');
            $('.introduce2').text('点击得票数最多的人的头像');
            $("#main").on('click', ".box", function () {
                $('.doctor').hide(); /* 图标初始全部隐藏 */
                $('.box').find('.identity').css('background', '#fdedc5'); /* 点击前初始颜色 */
                $(this).find(".identity").css('background', "#333"); /* 点击后改变颜色 */
                $('.doctor').eq($(this).index()).show(); /* 点击后图标出来 */
                a = $(this).index(); /* 获取点击的格子角标 */
            }) /* 点击事件 */
            $('#confirm').click(function () {
                if (a == undefined) {
                    alert('必须选择一个');
                } else {
                    saveClikedIndex();
                    newArray[a].state = false;
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