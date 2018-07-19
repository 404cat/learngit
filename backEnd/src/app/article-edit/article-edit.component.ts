import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  HttpInterceptorService
} from '../http-interceptor.service';
import {
  FormsModule
} from '@angular/forms';

let statu;

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})


export class ArticleEditComponent implements OnInit {

  id: string;
  data: any;
  title: string;
  content: string;
  interLink: string;
  type: number;
  // statu: string;
  selectedValue;
  selectedValueTwo;
  industryVisible; /* 控制行业显现的Boolean */
  putData: any;

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
    this.industryVisible = false; /* select change事件把行业显现的Boolean初始 */
    console.log(value.value);
    statu = value.num;
    if (value.value === '行业大图') {
      this.industryVisible = true;
    }
  }

  constructor(
    public _activeRouter: ActivatedRoute,
    public httpservice: HttpInterceptorService,
  ) {}

  ngOnInit(): any {
    this.id = this._activeRouter.snapshot.params['id']; /* 获取点进来的id号码 */
    console.log(this.id);
    this.httpservice.getArticleEdit(this.id).subscribe((res: Response) => {
      this.data = res.json();
      this.data = this.data.data.article; /* 获取该条id的信息 */
      console.log(this.data);
      this.title = this.data.title; /* 初始化title */
      this.content = this.data.content; /* 初始化说明 */
      this.interLink = this.data.url; /* 初始化跳转链接 */
      this.selectedValue = this.optionList[+this.data.type]; /* 初始化类型 */
      if (+this.data.type === 3) {
        this.industryVisible = true;
      }
      this.selectedValueTwo = this.optionListTwo[+this.data.industry]; /* 初始化行业 */
    });
  }

  onSubmit(): any {
    this.putData = `title=${this.title}&status=${statu}&img=${'s'}`;
    console.log(this.putData);
  }

}
