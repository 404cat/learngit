import {
  Component,
  OnInit,
  Input,
  OnDestroy
} from '@angular/core';
import {
  HttpInterceptorService
} from '../http-interceptor.service';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {

  data: any = {};
  articleList: Array < string > = [];
  id: any;
  page;
  size;
  singleData: any;
  putData;
  total;

  changeType(value: any) {
    switch (value) {
      case 0:
        return value = '首页banner';
      case 1:
        return value = '找职位banner';
      case 2:
        return value = '找精英banner';
      case 3:
        return value = '行业大图';
    }
  } /* 通过插值表达式调用该方法把类型传递进来在进行判断返回相应文字 */

  changeStatusWord(value: any) {
    switch (value) {
      case 1:
        return value = '草稿';
      case 2:
        return value = '上线';
    }
  } /* 状态进行判断 */

  changeStatus(value: any) {
    switch (value) {
      case 1:
        return value = '上线';
      case 2:
        return value = '下线';
    }
  }
  /* 改变上下线操作字样 */

  constructor(
    private httpInterceptorService: HttpInterceptorService, /* 实例化HTTP请求类 */
  ) {  }


  ngOnInit() {
    this.getArticle(); /* 初始化获取文章信息信息 */
  }

  getpagination(event: any) {
    this.putData = event;
    console.log(this.putData);
    this.getArticle();
  } /* 获取分页的请求信息，监听分页组件的点击事件， 并发送请求 */

  getArticle() {
    this.httpInterceptorService.getArticleList(this.putData).subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
      this.articleList = this.data.data.articleList;
    }); /* 获取article数据, 在oninit中调用 */
  } /* 获取文章的HTTP请求 */

  changedStatu(statu: number, id: number, value: any): Boolean {
    if (statu === 1) {
      statu = 2;
    } else {
      statu = 1;
    } /* 状态进行判断，如果是1，需要改变成2 */
    value = `id=${id}&status=${statu}`; /* 把通过点击事件把该行id和状态作为参数请求 */
    console.log(value);
    this.httpInterceptorService.changeStatu(value).subscribe((res: Response) => {
      console.log(res.json());
      this.getArticle();
    }); /* put 更改状态，通过回调函数调用获取文章数据的函数，这样就能实现实时刷新了 */
    return false;
  } /* 点击上下线功能 */
  getSearch(event: any) {
    this.articleList = event;
  }
}
