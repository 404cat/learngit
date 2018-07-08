log = console.log;
/* jquery  写法 */
$(function () {
    $('#name-word').attr({
        placeholder: "请输入用户名",
        maxlength: '12'
    }); /* 输入框默认文本和输入长度 */

    $('#password-word').attr({
        placeholder: "请输入密码",
        maxlength: '12'
    }) /* 输入框默认文本和输入长度 */


    $('#login-button').on('click ', function () {
        $.post(
            '/carrots-admin-ajax/a/login',
            'name=' + $('#name-word').val() + '&' + 'pwd=' + $('#password-word').val(),
            function (data) {
                var data = JSON.parse(data);
                log(data);
                log(data.message);
                if (data.message == 'success') {
                    $('.inputMessage').text('登录成功');
                } else {
                    $('.inputMessage').text(data.message);
                }
            }
        )
        // $('.inputMessage').load(
        //     '/carrots-admin-ajax/a/login',
        //     'name=' + $('#name-word').val() + '&' + 'pwd' + $('#password-word').val(),
        //     function (responseText) {
        //         log(responseText);
        //         // var text = JSON.parse(responseText);
        //         // $('.inputMessage').text(text);
        //     }
        // ) /* 获取远程的HTML代码 */
    })

    // $('#login-button').on('keyup', function (e) {
    //     var keycode = e.which;
    //     if (keycode == 13) {
    //         log(';ss');
    //         $('#login-button').on('click ');
    //     }
    // })



})



/* js原生的POST发送方法 */


window.onload = function () {

    document.getElementById('login-button').onclick = function () {
        var name = document.getElementById('name-word').value;
        log(name);
        var password = document.getElementById('password-word').value;
        log(typeof password);

        // var data = new FormData();
        // data.append("name", name);
        // data.append("pwd", password);/* 通过formData的方式来进行POST数据传输 */

        // var data = `name=${name}&pwd=${password}`;
        // log(data);
        /* 模板字符串 */

        var data = "name=" + name + "&pwd=" + password;
        log(data);
        /* 把每个变量通过&连接来进行传输 */

        /* 创建实例 */
        function createXHR() {
            // code for IE7+, Firefox, Chrome, Opera, Safari 
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
            // code for IE6, IE5 
            else {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        var xhr = createXHR();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    log(xhr.responseText);
                    var text = JSON.parse(xhr.responseText);
                    log(text);
                    if (text.message == "success") {
                        document.getElementsByClassName('inputMessage')[0].innerHTML = "登录成功";
                    } else {
                        document.getElementsByClassName('inputMessage')[0].innerHTML = text.message;
                    }
                } else {
                    alert('错误：' + xhr.status);
                }
            }
        }
        xhr.open("POST", "/carrots-admin-ajax/a/login", true);
        // xhr.send(data);
        /* 通过formData的方式来进行POST数据传输 */

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
        /* 通过模拟HTTP请求协议 */


    }
}