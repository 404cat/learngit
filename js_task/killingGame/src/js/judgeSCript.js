$(function () {
    var log = console.log;
    var num = 0; /*  */
    // var init = true; /* 内容区导航栏状态初始为true */

    var collapse = $('.dayNum'),
        /* 折叠 */
        getBox = $('.box'),
        /* 包含导引的块 */
        getkiller = $('.killer'),
        getPolice = $('.police'),
        getSharp = $('.sharpShoot'),
        getDoctor = $('.doctor'),
        getGhost = $('.ghostSay'),
        getPlayer = $('.playerSay'),
        getVote = $('.allVote');
    /* 以上获取的是每个导引栏的节点 */

    function previous() {
        window.location.href = "judgeDiary.html";
    } /* 返回法官日记 */

    function deliver(state) {
        sessionStorage.setItem("deliverStep", JSON.stringify(state));
    } /* 传递状态至下一个页面 */

    collapse.eq(num).click(function () {
        getBox.eq(num).toggle();
    }) /* 点击每一天后下面的内容折叠 */

    var identityInfoArray = JSON.parse(sessionStorage.getItem("identity")); /* 获取身份数组，这个是在第一个页面生成的 */
    var getState = JSON.parse(sessionStorage.getItem('deliverStep')) /* 获取点击下一页储存的当前状态（步骤） */
    
    var clickedIndex = JSON.parse(sessionStorage.getItem('clickedIndex')); /* 获取被操作的身份角标 */
    var identityNum = clickedIndex + 1; /* 被点击后的身份号码 */

    switch (getState) {
        case "kill":
            $('.sunBox').append('<p>' + identityNum + '号被杀手杀死了，真实身份是' + identityInfoArray[clickedIndex] + '</p>');
            break;
        case "police":
        $('.sunBox').append('<p>' + identityNum + '号被警察查看身份，真实身份是' + identityInfoArray[clickedIndex] + '</p>');
            break;
    } /* 用getstate来判断是从那个操作页面返回的，再进行相应的添加节点 */


    getkiller.eq(num).click(function () {
        if (fsm.can("kill")) {
            deliver("kill");
            nextPage();
        }
        fsm.kill();
    }) /* 点击杀手杀人执行的操作 */

    getPolice.eq(num).click(function () {
        if (fsm.can("police")) {
            deliver("police");
            nextPage();
        }
        fsm.police();
    }) /* 点击警察验人执行的操作 */

    getSharp.eq(num).click(function () {
        if (fsm.can("sharp")) {
            deliver("sharp");
            nextPage();
        }
        fsm.sharp();
    }) /* 点击狙击执行的操作 */

    getDoctor.eq(num).click(function () {
        if (fsm.can("doctor")) {
            deliver("doctor");
            nextPage();
        }
        fsm.doctor();
    }) /* 点击医生执行的操作 */

    getGhost.eq(num).click(function () {
        if (fsm.can("ghost")) {
            alert('请亡灵发表遗言');
            step = JSON.parse(sessionStorage.getItem('step'));
            step += 1;
            sessionStorage.setItem("step", JSON.stringify(step));
            changeClicked();
        }
        fsm.ghost();
    }) /* 点击亡灵发表遗言 */

    getPlayer.eq(num).click(function () {
        if (fsm.can("player")) {
            alert('请玩家依次发言');
            step = JSON.parse(sessionStorage.getItem('step'));
            step += 1;
            sessionStorage.setItem("step", JSON.stringify(step));
            changeClicked();
        }
        fsm.player();
    }) /* 点击玩家依次发言 */

    getVote.eq(num).click(function () {
        if (fsm.can("vote")) {
            deliver("vote");
            nextPage();
        }
        fsm.vote();
    }) /* 点击头票 */




    /* 创建一个状态机 */
    var fsm = new StateMachine({
        init: "none",
        transitions: [{
                name: 'kill',
                from: 'none',
                to: 'killStep'
            }, /* 杀手杀人 */
            {
                name: 'police',
                from: 'killStep',
                to: 'policeStep'
            }, /* 警察验人 */
            {
                name: 'sharp',
                from: 'policeStep',
                to: 'sharpStep'
            }, /* 狙击狙人 */
            {
                name: 'doctor',
                from: 'sharpStep',
                to: 'doctorStep'
            }, /* 医生救人 */
            {
                name: 'ghost',
                from: 'doctorStep',
                to: 'ghostSay'
            }, /* 亡灵发表遗言 */
            {
                name: 'player',
                from: 'ghostSay',
                to: 'playerSay'
            }, /* 玩家依次发言 */
            {
                name: 'vote',
                from: 'playerSay',
                to: 'allVote'
            }, /* 全民投票 */
        ],
        methods: {
            /* 如果状态转换不能正常转换就会触发下面的错误处理机制 */
            onInvalidTransition: function (transition, from, to) {
                switch (from) {
                    case "none":
                        alert("请点击杀手杀人");
                        break;
                    case "killStep":
                        alert("请点击警察验人");
                        break;
                    case "policeStep":
                        alert("请点击狙击手狙人");
                        break;
                    case "sharpStep":
                        alert("请点击医生救人");
                        break;
                    case "doctorStep":
                        alert("请点击亡灵发表遗言");
                        break;
                    case "ghostSay":
                        alert("请点击玩家依次发言");
                        break;
                    case "playerSay":
                        alert("请点击全民投票");
                        break;
                    default:
                        alert("操作错误，退出游戏吧");
                }
            },
        }
    })


    var step; /* 这个变量是为了判断运行到第几步了 */


    function nextPage() {
        step = JSON.parse(sessionStorage.getItem('step'));
        if (step == undefined) {
            step = 1;
        } else {
            step += 1;
        }
        sessionStorage.setItem("step", JSON.stringify(step));
        window.location.href = "operationPage.html";
    } /* 每执行下一页，代表已经进行了一个步骤了，通过step来进行判断操作 */

    function changeClicked() {
        var loop = [getkiller, getPolice, getSharp, getDoctor, getGhost, getPlayer, getVote];
        step = JSON.parse(sessionStorage.getItem('step'));
        console.log(step);
        switch (step) {
            case 1:
                fsm.kill();
                break;
            case 2:
                fsm.kill();
                fsm.police();
                break;
            case 3:
                fsm.kill();
                fsm.police();
                fsm.sharp();
                break;
            case 4:
                fsm.kill();
                fsm.police();
                fsm.sharp();
                fsm.doctor();
                break;
            case 5:
                fsm.kill();
                fsm.police();
                fsm.sharp();
                fsm.doctor();
                fsm.ghost();
                break;
            case 6:
                fsm.kill();
                fsm.police();
                fsm.sharp();
                fsm.doctor();
                fsm.ghost();
                fsm.player();
                break;
            case 7:
                fsm.kill();
                fsm.police();
                fsm.sharp();
                fsm.doctor();
                fsm.ghost();
                fsm.player();
                fsm.vote();
                break;
        }
        for (var i = 0; i < step; i++) {
            loop[i].eq(num).css("backgroundColor", "#888");
            loop[i].eq(num).find("i").css("borderRightColor", "#888"); /* 点击后背景颜色会改变 */
        }
    } /* 从杀人页面返回来的时候状态和颜色会改变 */
    changeClicked();

}) /* jQuery文档就绪事件结束 */












// var obj = {
//     a: fsm.kill(),
//     b: fsm.police()
// }

// var a = fsm.kill();
// var b = fsm.police();
// var stateMethod = [a, b]
// stateMethod[0];

// var stateMethod = [fsm.kill(), fsm.police(), fsm.sharp(), fsm.doctor(), fsm.ghost(), fsm.player(), fsm.vote()]
// stateMethod[0];
/* —————————————————————————— */
// var a;
// var gettext = $('#text');
// log(sessionStorage.getItem("a"));
// a = JSON.parse(sessionStorage.getItem('a'));
// if (a != null) {
//     gettext.html("测试文字" + a);
// }





// log(fsm.state);
// fsm.kill();
// log(fsm.state);
// fsm.police();
// log(fsm.state);
// fsm.sharp();
// log(fsm.state);
// fsm.doctor();
// log(fsm.state);
// fsm.ghost();
// log(fsm.state);
// fsm.player();
// log(fsm.state);
// fsm.vote();
// log(fsm.state);