/* 封装后台页的HTTP请求 */

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

const putHeader = new Headers();
putHeader.append('Content-Type', 'application/json');
const putpOptions = new RequestOptions({
  headers: headers
}); /* 添加请求头 */


@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService {

  getArticleList(value: any): any {
    // return this.http.get('/carrots-admin-ajax/a/article/search', options);
    return this.http.get('/carrots-admin-ajax/a/article/search?' + value, options);
  } /* 按条件获取文章列表 , 也是list的初始化请求 */

  getSearchData() {
    return this.http.get('/carrots-admin-ajax/a/article/search', options);
  } /* 分页组件查找和 */

  changeStatu(value: any): any {
    console.log(value);
    return this.http.put('/carrots-admin-ajax/a/u/article/status', value, putpOptions);
  } /* 上下线请求 */

  getArticleEdit(value: any): any {
    return this.http.get('/carrots-admin-ajax/a/article/' + value, options);
  } /* 获取编辑文章的单条数据 */

  putEditAticle(id: any, data: any): any {
    return this.http.put('/carrots-admin-ajax/a/u/article/' + id, data, putpOptions); /* 文章编辑的请求 */
  }

  addArticle(value: any): any {
    return this.http.post('/carrots-admin-ajax/a/u/article', value, putpOptions);
  }

  deleteArticle(value: any): any {
    return this.http.delete('/carrots-admin-ajax/a/u/article/' + value, );
  }
  constructor(public http: Http, ) {
    this.http = http; /* 把实例化的http赋值，这样在下面好调用 */
  }
}
