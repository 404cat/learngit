/* 封装后台页的HTTP请求 */

import { Injectable } from '@angular/core';

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

const putHeader = new Headers();
putHeader.append('Content-Type', 'application/json');
const putpOptions = new RequestOptions({
  headers: headers
}); /* 添加请求头 */


@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService {

  getArticleList(): any {
    return this.http.get('/carrots-admin-ajax/a/article/search', options);
  } /* 获取文章列表 */

  changeStatu(value: any): any {
    console.log(value);
    return this.http.put('/carrots-admin-ajax/a/u/article/status', value, putpOptions);
  }

  constructor(public http: Http, )  {
    this.http = http; /* 把实例化的http赋值，这样在下面好调用 */
   }
}
