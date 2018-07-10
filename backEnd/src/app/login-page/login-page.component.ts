import {
  Component,
  OnInit
} from '@angular/core';

import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams
} from '@angular/http'; /* 导入http需要使用到的模块 */

import {
  Router
} from '@angular/router'; /* 导入路由模块 */


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})


export class LoginPageComponent implements OnInit {

  data = {
    message: '',
  }; /* 一定要先声明message字段才可以进行操作 */


  constructor(public http: Http,
    private router: Router,
  ) {
    this.http = http; /* 把实例化的http赋值，这样在下面好调用 */
  }

  submit(name: HTMLInputElement, password: HTMLInputElement): boolean {

    // console.log(postData);
    const postData = `name=${name.value}&pwd=${password.value}`; /* 获取输入的值 */

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({
      headers: headers
    }); /* 添加请求头 */

    this.http.post(
      '/carrots-admin-ajax/a/login', postData, options
    ).subscribe((res: Response) => {
      console.log(res.ok);
      this.data = res.json();
      console.log(this.data);
      if (this.data.message === 'success') {
        // console.log(this.data);
        this.router.navigateByUrl('backend/main');
      }
    });
    /* 通过在构造函数中实例的http属性来发送请求，调用this.http.post并传入URI（
因为是跨域请求，所以只要发送URI就好了），然后请求会返回一个Observable对象，然后可以使用subscribe订阅变化，
这是一种异步变成的回调函数，当http.post返回一个流时，会发出一个Response对象，所以在这个回调函数的参数中把对象实例给
一个res变量，在这个函数中用json方法提取并解析成一个 Object，然后赋值给this.data 。这里需要除以的是data一定要先声明
包括下面的用来判断进行跳转路由的 message（这是返回的数据中的一个属性），如果不提前声明字段的话就会报错！） */
    // console.log(`名字为：${name.value}，密码为：${password.value}`);

    return false;
    /* 这里返回布尔值是因为click时间呗冒泡到父级。浏览器会尝试导航这个空白链接，所以浏览器
       就刷新了。价格return false 只有当前元素会被冒泡，不会再向上冒泡了 */
  } /* 为button绑定事件 */

  ngOnInit() {}

}
