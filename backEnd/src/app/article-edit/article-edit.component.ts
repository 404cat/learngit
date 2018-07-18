import {
  Component,
  OnInit
} from '@angular/core';
import {
  GetSingleDataService
} from '../article-list/get-single-data.service'; /* 获取单条数据的服务 */
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  data: any;
  title: string;
  content: string;
  interLink: string;
  type: number;
  selectedValue;
  text;
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
    label: '移动互联网',
    value: '移动互联网',
    num: 0
  }, {
    label: '电子商务',
    value: '电子商务',
    num: 1
  }, {
    label: '企业服务',
    value: '企业服务',
    num: 2
  }, {
    label: 'O2O',
    value: 'O2O',
    num: 3
  }, {
    label: '教育',
    value: '教育',
    num: 4
  }, {
    label: '金融',
    value: '金融',
    num: 5
  }, {
    label: '游戏',
    value: '游6',
    num: 6
  }, ];
  compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;

  log(value: {
    label: string,
    value: string,
    num: string
  }): void {
    this.text = false;
    console.log(value.value);
    if (value.value === '行业大图') {
      this.text = true;
    }
    console.log(value);
    console.log(value.num);
  }

  constructor(
    public _activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): any {
    this._activeRouter.queryParams.subscribe(params => {
      this.data = params;
      console.log(this.data);
      this.title = this.data.title;
      this.content = this.data.content;
      this.interLink = this.data.url;

      this.type = this.data.type - 0;
      this.selectedValue = this.optionList[this.type];
      /* input表单的内容初始化 */
    });
  }

}
