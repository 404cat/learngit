var killer = document.getElementById("killerNum");
var killerNumber = "";
var police = document.getElementById("policeNum");
var policeNumber = "";
var sharpShoot = document.getElementById("sharpShooterNum");
var sharpShootNumber = "";
var doctor = document.getElementById("doctorNum");
var doctorNumber = "";
var roturier = document.getElementById("roturierNum");
var roturierNumber = "";
/* 获取span标签和为需要添加的人数定义一个变量来储存 */

var impotContent = 0; /* 定义变量保存input数值 */

var popupMenu = document.getElementById("popup");

window.onload = initialization(); /* 载入页面后的样式 */

function playChangeNum() {
    clearNumber(); /* 初始化人数 */
    getInput(); /* 获取输入值 */
    judgeNumber(); /* 判断输入值后分配人数 */
    initialization(); /* 为span添加人数 */
} /* input输入值后调用该函数 */

function deal() {
    if (impotContent < 5 || impotContent > 20) {
        popupMenu.style.display = "flex";
    }
} /* 输入人数不正确弹出提示窗 */

function closePopup() {
    popupMenu.style.display = "none";
}/* 点击确定、点击取消后隐藏弹窗 */

function clearNumber() {
    killerNumber = "";
    policeNumber = "";
    sharpShootNumber = "";
    doctorNumber = "";
    roturierNumber = "";
} /* 初始化人数 */

function getInput() {
    inputStyle = document.getElementById("inputText");
    inputStyle.maxLength = 2; /* 限制输入长度 */
    inputStyle.onkeyup = function () {
        this.value = this.value.replace(/\D/g, '');
    } /* 限制只能输入数字 */
    impotContent = document.getElementById("inputText").value;
    impotContent = ~~impotContent; /* 输入的数值会变成string类型，~~转换成number类型 */
    console.log(typeof impotContent);
    return impotContent;
} /* 获取input内容 */

function initialization() {
    killer.innerHTML = "杀手 " + killerNumber + " 人";
    police.innerHTML = "警察 " + policeNumber + "人";
    sharpShoot.innerHTML = "狙击手 " + sharpShootNumber + " 人";
    doctor.innerHTML = "医生 " + doctorNumber + " 人";
    roturier.innerHTML = "村民 " + roturierNumber + " 人";
} /* 输入人数 */


function judgeNumber() {
    if (impotContent > 4 && impotContent < 21) {
        sharpShootNumber = "1";
        doctorNumber = "1";
    }

    switch (impotContent) {
        case 5:
            killerNumber = "1";
            policeNumber = "1";
            roturierNumber = "1";
            break;
        case 6:
            killerNumber = "1";
            policeNumber = "1";
            roturierNumber = "2";
            break;
        case 7:
            killerNumber = "1";
            policeNumber = "1";
            roturierNumber = "3";
            break;
        case 8:
            killerNumber = "1";
            policeNumber = "1";
            roturierNumber = "4";
            break;
        case 9:
            killerNumber = "2";
            policeNumber = "1";
            roturierNumber = "4";
            break;
        case 10:
            killerNumber = "2";
            policeNumber = "1";
            roturierNumber = "5";
            break;
        case 11:
            killerNumber = "2";
            policeNumber = "1";
            roturierNumber = "6";
            break;
        case 12:
            killerNumber = "3";
            policeNumber = "2";
            roturierNumber = "5";
            break;
        case 13:
            killerNumber = "3";
            policeNumber = "2";
            roturierNumber = "6";
            break;
        case 14:
            killerNumber = "3";
            policeNumber = "2";
            roturierNumber = "7";
            break;
        case 15:
            killerNumber = "4";
            policeNumber = "3";
            roturierNumber = "6";
            break;
        case 16:
            killerNumber = "4";
            policeNumber = "3";
            roturierNumber = "7";
            break;
        case 17:
            killerNumber = "5";
            policeNumber = "4";
            roturierNumber = "6";
            break;
        case 18:
            killerNumber = "5";
            policeNumber = "4";
            roturierNumber = "7";
            break;
        case 19:
            killerNumber = "5";
            policeNumber = "4";
            roturierNumber = "8";
            break;
        case 20:
            killerNumber = "5";
            policeNumber = "4";
            roturierNumber = "9";
            break;
    } /*  */
} /* 输入的人数判断、分配人数 */