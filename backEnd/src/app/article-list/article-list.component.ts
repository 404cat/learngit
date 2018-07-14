import { Component, OnInit } from '@angular/core';
import {HttpInterceptorService } from '../http-interceptor.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {

  data: any =  {};
  articleList: Array<string> = [];

  constructor(
    private httpInterceptorService: HttpInterceptorService, /* 实例化HTTP请求类 */
  ) { }

  ngOnInit() {
    this.getArticle(); /* 初始化获取信息 */
  }

  getArticle() {
    this.httpInterceptorService.getArticleList().subscribe((res: Response) => {
      this.data = res.json();
      this.articleList = this.data.data.articleList;
      console.log(this.articleList);
    }); /* 获取article数据 */
  }


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
  } /* 类型进行判断 */

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
  changedStatu(statu: number, id: number, value: any): Boolean {
    if (statu === 1) {
      statu = 2 ;
    } else  {
      statu  = 1 ;
    }
    value = `id=${id}&status=${statu}`;
    console.log(value);
    this.httpInterceptorService.changeStatu(value).subscribe((res: Response) => {
      console.log(res.json());
      this.getArticle();
    }); /* put 更改状态 */
    return false;
  }
}
