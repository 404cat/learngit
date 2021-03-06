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
  // FormBuilder,
  // FormGroup
} from '@angular/forms';
import {
  AfterViewInit,
  ViewChild
} from '@angular/core';
import {
  UploadFileComponent
} from './upload-file/upload-file.component';
import {
  flatten
} from '../../../node_modules/@angular/router/src/utils/collection';
import {
  Location
} from '@angular/common';

// let statu;
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
  type;
  statu: any;
  industry: any;
  selectedValue;
  selectedValueTwo;
  industryVisible; /* 控制行业显现的Boolean */
  putData: any;
  createAt;
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
  } /* 获取行业 码 */

  constructor(
    public _activeRouter: ActivatedRoute,
    public httpservice: HttpInterceptorService,
    private location: Location
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
      this.statu = this.data.status; /* 角色状态 草稿还是上线 */
      this.imgUrl = this.data.img; /* 图片地址 */
      this.type = this.data.type; /*  */
      this.industry = this.data.industry; /* 行业 */
      this.createAt = this.data.createAt;
      this.selectedValue = this.optionList[+this.data.type]; /* 初始化类型 */
      if (+this.data.type === 3) {
        this.industryVisible = true;
      }
      this.selectedValueTwo = this.optionListTwo[+this.data.industry]; /* 初始化行业 */
    });
  }

  onSubmit(): any {
    this.putData = `title=${this.title}&status=${this.statu}&
    img=${this.imgUrl} &content=${this.content}&url=${this.interLink}&industry=${this.industry}&
    createAt=${this.createAt}&type=${this.type}`; /* 发送数据 */
    console.log(this.putData);
    this.httpservice.putEditAticle(this.id, this.putData).subscribe((res: Response) => {
      console.log(res.json());
    });
  } /* button按钮的点击方法 */
  geturl(event: any) {
    this.imgUrl = event;
    console.log(this.imgUrl);
  }  /* 监听获取子路由传的imgurl */

  upLine(): boolean {
    this.statu = 2;
    console.log(this.statu);
    this.onSubmit();
    alert('编辑成功');
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
