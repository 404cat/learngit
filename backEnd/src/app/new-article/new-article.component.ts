import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  HttpInterceptorService
} from '../http-interceptor.service';
import {
  FormsModule,
} from '@angular/forms';
import {
  AfterViewInit,
  ViewChild
} from '@angular/core';
import {
  UploadFileComponent
} from '../article-edit/upload-file/upload-file.component';
import {
  Location
} from '@angular/common';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})


export class NewArticleComponent implements OnInit {

  id: string;
  data: any;
  title: string;
  content: string;
  interLink: string;
  type;
  statu: any;
  industry: any;
  selectedValue;
  selectedValueTwo;
  industryVisible; /* 控制行业显现的Boolean */
  putData: any;
  createAt;
  sucesscode;
  @Input() imgUrl;


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
    this.type = value.num;
    if (value.value === '行业大图') {
      this.industryVisible = true;
    }
  } /* 获取type 码 */

  getIndustry(value: {
    label: string,
    value: string,
    num: string
  }): void {
    console.log(value.num);
    this.industry = value.num;
  } /*  ngModelChange 获取行业 码 */

  constructor(
    public httpservice: HttpInterceptorService,
    private location: Location /* 路由返回 */
  ) {}

  ngOnInit(): any {
  }

  onSubmit(): any {
    console.log(typeof this.type);
    if (this.industry !== undefined) {
      this.putData = `title=${this.title}&type=${this.type}&status=${this.statu}&
      img=${this.imgUrl} &content=${this.content}&url=${this.interLink}&industry=${this.industry}`; /* 发送数据 */
    } else {
      this.putData = `title=${this.title}&type=${this.type}&status=${this.statu}&
      img=${this.imgUrl} &content=${this.content}&url=${this.interLink}`; /* 发送数据 */
    }
    console.log(this.putData);

    this.httpservice.addArticle(this.putData).subscribe((res: Response) => {
      console.log(res.json());
      this.sucesscode = res.json();
      this.sucesscode = this.sucesscode.code;
      if (this.sucesscode === 0 ) {
        alert ('成功');
      } else {
        alert('失败');
      }

    });
  } /* button按钮的点击方法 发送HTTP请求 */

  geturl(event: any) {
    this.imgUrl = event;
    console.log(this.imgUrl);
  }  /* 监听获取子路由传的imgurl */
  upLine(): boolean {
    this.statu = 2;
    console.log(this.statu);
    this.onSubmit();
    this.location.back();
    return false;
  } /* 上线 */
  downLine(): boolean {
    this.statu = 1;
    this.onSubmit();
    this.location.back();
    return false;
  } /* 草稿 */
  goBack(): void {
    this.location.back();
  } /* 返回上一级 */

}
