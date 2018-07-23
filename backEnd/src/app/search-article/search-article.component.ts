import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import {HttpInterceptorService } from '../http-interceptor.service';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.scss']
})
export class SearchArticleComponent implements OnInit {
  dateFormat = 'yyyy/MM/dd';
  data;
  dateone;
  datetwo;
  dateValue;
  statu;
  type;
  @Output() getSearch = new EventEmitter();

  optionList = [{
      label: '首页banner',
      value: '首页banner',
      num: 0
    },
    {
      label: '找职位banner',
      value: '找职位banner',
      num: 1
    },
    {
      label: '找精英banner',
      value: '找精英banner',
      num: 2
    },
    {
      label: '行业大图',
      value: '行业大图',
      num: 3
    }
  ];

  optionListTwo = [{
    label: '上线',
    value: '上线',
    num: 2
  }, {
    label: '草稿',
    value: '草稿',
    num: 1
  }];
  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;


  constructor(
    private httpService: HttpInterceptorService,
    private articleListComponent: ArticleListComponent
  ) {}

  ngOnInit() {}

  log(value: {
    label: string,
    value: string,
    num: string
  }): void {
    console.log(value.value);
    this.type = value.num;
  } /* 获取type 码 */

  getIndustry(value: {
    label: string,
    value: string,
    num: string
  }): void {
    console.log(value.num);
    this.statu = value.num;
  } /* 获取状态 码 */

  dateToMs(): any {
    const [x , y ] = this.dateValue;
    this.dateone = new Date(x).getTime(); /* 开始时间 */
    this.datetwo = new Date(y).getTime(); /* 结束时间 */
    // let searchData = {
    //   startAt: this.dateone,
    //   endAt: this.datetwo,
    //   type: this.type,
    //   status: this.statu,
    // };
    const searchData = `startAt=${this.dateone}&endAt=${this.datetwo}&type=${this.type}&status=${this.statu}`;
    /* 日期转换成时间戳 */
    console.log(searchData);
    this.httpService.getArticleList(searchData).subscribe((res: Response) => {
      console.log(res.json());
      this.data = res.json();
      this.data =  this.data.data.articleList;
      this.getSearch.emit(this.data); /* 向父级发送搜索到的数据 */
    });
    // this.articleListComponent.getArticle();
  }
}
