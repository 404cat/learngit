// 封装登录页的HTTP请求

import {
  Injectable
} from '@angular/core';

import {
  Http,
  Response,
  Headers,
  RequestOptions,
  URLSearchParams
} from '@angular/http'; /* 导入http需要使用到的模块 */

const headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
const options = new RequestOptions({
  headers: headers
}); /* 添加请求头 */

@Injectable({
  providedIn: 'root'
})

export class LogiPageService {

  getData(value: string): any {
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // const options = new RequestOptions({
    //   headers: headers
    // }); /* 添加请求头 */

    return this.http.post(
      '/carrots-admin-ajax/a/login', value, options
    );
  }
  /* 登录页    返回获取到的数据 函数 */



  constructor(public http: Http, ) {
    this.http = http; /* 把实例化的http赋值，这样在下面好调用 */
  }
}
