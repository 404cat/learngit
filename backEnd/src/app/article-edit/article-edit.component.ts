import { Component, OnInit } from '@angular/core';
import { GetSingleDataService } from '../article-list/get-single-data.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  data: any;
  constructor (
    //  public getSingleData: GetSingleDataService,
    ) { }

  ngOnInit(): any {
    // this.data = this.getSingleData.value;
    // console.log(this.data.title); /* 初始化获取的单挑数据 */
    return this.data;
  }

}
