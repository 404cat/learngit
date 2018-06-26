$(function () {
    var log = console.log;
    var newArray = [];
    var daynum = 0; /* 天数变量 */
    var days = ['第一天', '第二天', '第三天', '第四天', '第五天', '第六天', '第七天', '第八天', '第九天', '第十天'];

    var daynum = JSON.parse(sessionStorage.getItem('dayNum')); /* 获取天数 */
    var killedIndex = JSON.parse(sessionStorage.getItem('killedIndex')); /* 被杀手杀死的 */
    var policeIndex = JSON.parse(sessionStorage.getItem('policeIndex')); /* 警察查看 */
    var sharpIndex = JSON.parse(sessionStorage.getItem('sharpIndex')); /* 狙击手狙击 */
    var doctorIndex = JSON.parse(sessionStorage.getItem('doctorIndex')); /* 医生 */
    var voteIndex = JSON.parse(sessionStorage.getItem('voteIndex')); /* 投票 */

    newArray = JSON.parse(sessionStorage.getItem('newArray')); /* 获取身份信息数组 */
    daynum = JSON.parse(sessionStorage.getItem('dayNum'));

    log(newArray);
    log(daynum); /* 如果daynum = 0, 就代表是第一天 */

    identityInfoArray = JSON.parse(sessionStorage.getItem("identity"));
    log(identityInfoArray);

    if (daynum > 0) {
        for (var j = 0; j < daynum; j++) {
            $('main').append($('.contentBox').eq(j).clone()); /* 如果天数增加，克隆节点 */
        } /* daynum 大于零 克隆节点 */
    }

    var killnum = 0; /* 记录杀手人数 */
    var k = 0; /* 记录好人数量 */
    if (newArray != null) {
        for (var s = 0; s < newArray.length; s++) {
            if (newArray[s].identity == '杀手' && newArray[s].state == true) {
                killnum += 1;
            } else {
                if (newArray[s].state == true) {
                    k += 1;
                }
            }
        }
        if (killnum >= k) {
            $('.win-word').text('杀手胜利');
        } else if (killnum == 0) {
            $('.win-word').text('好人胜利');
        } else {
            $('.win-word').text('没有胜负');
        }
    } /* 判断哪方胜利 */

    var k = 0,
        p = 0,
        c = 0,
        s = 0,
        d = 0;

    if (newArray != null) {
        for (var e = 0; e < newArray.length; e++) {
            if (newArray[e].identity == '杀手' && newArray[e].state == true) {
                k += 1;
            }
            if (newArray[e].identity == '警察' && newArray[e].state == true) {
                p += 1;
            }
            if (newArray[e].identity == '村民' && newArray[e].state == true) {
                c += 1;
            }
            if (newArray[e].identity == '狙击手' && newArray[e].state == true) {
                s += 1;
            }
            if (newArray[e].identity == '医生' && newArray[e].state == true) {
                d += 1;
            }
        }
    }

    $('.kill').text(k);
    $('.police').text(p);
    $('.civilian').text(c);
    $('.sharp').text(s);
    $('.doctor').text(d);
    /* 判断添加剩余人数 */


    for (var i = 0; i <= daynum; i++) {
        $('.days').eq(i).text(days[i] + ":"); /* 生成天数 */

        if (killedIndex != undefined) {
            if (killedIndex[i] != undefined) {
                $('.night').eq(i).append('<p>' + (killedIndex[i] + 1) + '号被杀手杀死了，真实身份是' + identityInfoArray[killedIndex[i]] + '</p>');
            }
        }
        if (policeIndex != undefined) {
            if (policeIndex[i] != undefined) {
                $('.night').eq(i).append('<p>' + (policeIndex[i] + 1) + '号被警察查看身份，真实身份是' + identityInfoArray[policeIndex[i]] + '</p>');
            }
        }
        if (sharpIndex != undefined) {
            if (sharpIndex[i] != undefined) {
                $('.night').eq(i).append('<p>' + (sharpIndex[i] + 1) + '号被狙击手狙杀，真实身份是' + identityInfoArray[sharpIndex[i]] + '</p>');
            }
        }
        if (doctorIndex != undefined) {
            if (doctorIndex[i] != undefined) {
                $('.night').eq(i).append('<p>' + (doctorIndex[i] + 1) + '号被医生治疗，真实身份是' + identityInfoArray[doctorIndex[i]] + '</p>');
            }
        }
        if (voteIndex != undefined) {
            if (voteIndex[i] != undefined) {
                $('.day').eq(i).append('<p>' + (voteIndex[i] + 1) + '号被投死了，真实身份是' + identityInfoArray[voteIndex[i]] + '</p>');
            }
        }
    }
    /* 动态添加P标签文本 */

    $('.game-agian').on('click', function () {
        sessionStorage.clear();
        window.location.href = "playerRatio.html";
    }) /* 点击再来一局按钮 */


})