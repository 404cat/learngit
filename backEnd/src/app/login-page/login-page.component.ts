import {
  Component,
  OnInit
} from '@angular/core';

import {
  LogiPageService
} from '../logi-page.service'; /* 导入HTTP请求服务 */

import {
  Router
} from '@angular/router'; /* 导入路由模块 */

import {
  AuthService
} from '../service/authService';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  data: any = {};
  newname;
  newpwd;

  constructor(
    private loginpage: LogiPageService, /* 把获取HTTP的函数实例化给变量loginpage */
    private router: Router,
    private authService: AuthService,
  ) {}

  submit(): boolean {

    const postData = `name=${this.newname}&pwd=${this.newpwd}`; /* 获取输入的值 */

    this.loginpage.getData(postData).subscribe((res: Response) => {
      this.data = res.json();
      if (this.data.message === 'success') {
        console.log(this.data.message);
        this.authService.login(this.data.message);
        this.router.navigateByUrl('backend/main');
      }
    });

    return false;
  } /* 为button绑定事件 */
  ngOnInit() {}
}






/* 这里返回布尔值是因为click时间呗冒泡到父级。浏览器会尝试导航这个空白链接，所以浏览器
就刷新了。价格return false 只有当前元素会被冒泡，不会再向上冒泡了 */


/* 通过在构造函数中实例的http属性来发送请求，调用this.http.post并传入URI（
因为是跨域请求，所以只要发送URI就好了），然后请求会返回一个Observable对象，然后可以使用subscribe订阅变化，
这是一种异步变成的回调函数，当http.post返回一个流时，会发出一个Response对象，所以在这个回调函数的参数中把对象实例给
一个res变量，在这个函数中用json方法提取并解析成一个 Object，然后赋值给this.data 。这里需要除以的是data一定要先声明
包括下面的用来判断进行跳转路由的 message（这是返回的数据中的一个属性），如果不提前声明字段的话就会报错！） */
// console.log(`名字为：${name.value}，密码为：${password.value}`);
