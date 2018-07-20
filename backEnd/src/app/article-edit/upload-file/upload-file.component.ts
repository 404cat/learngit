import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import {
  FileUploader
} from 'ng2-file-upload';

import {
  ActivatedRoute
} from '@angular/router';
import {
  HttpInterceptorService
} from '../../http-interceptor.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  fileName: any;
  previewImg: any; /* 上传的图片录几个 */
  previeShow; /* 让图片显示的判断 */
  initPreviewShow; /* 图片初始值 */
  id: any;
  data: any;
  imgUrl;

  public uploader: FileUploader = new FileUploader({
    url: '/carrots-admin-ajax/a/u/img/task',
    method: 'POST',
    autoUpload: false,
  }); /* 上传文件第三方插件初始化 */

  @Output() getImgUrl = new EventEmitter ();

  uploadFile() {
    this.uploader.queue[0].upload(); /* 上传 */
    this.uploader.queue[0].onSuccess =  (response, status, headers) => {
      if (status === 200) {
        const tempRes = JSON.parse(response);
        console.log(tempRes.data.url); /* 如果请求成果返回的数据 */
        this.imgUrl = tempRes.data.url;
        this.getImgUrl.emit(this.imgUrl);
      } else {
        alert('');
      }
    };
    console.log(this.uploader.queue[0]);
  } /* 上传文件 */

  selectedFileOnChanged(files: HTMLInputElement, event: any) {
    this.previeShow = true; /* 布尔值让图片显示出来 */
    const reader = new FileReader();
    const file = files.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.previewImg = reader.result;
      console.log(this.previewImg);
    }; /* 利用fileready让图片显示出来 */
    this.fileName = event.target.files[0]; /* 获取上传的文件 */
  } /*  */
  // 这里是文件选择完成后的操作处理

  clear() {
    this.uploader.clearQueue();
    return this.fileName = null;
  }
  /* 删除上传 */

  constructor(public _activeRouter: ActivatedRoute,
    public httpservice: HttpInterceptorService,
  ) {}

  ngOnInit() {
    this.id = this._activeRouter.snapshot.params['id']; /* 获取点进来的id号码 */
    console.log(this.id);
    this.httpservice.getArticleEdit(this.id).subscribe((res: Response) => {
      this.data = res.json();
      this.data = this.data.data.article; /* 获取该条id的信息 */
      console.log(this.data);
      this.initPreviewShow = true; /* 初始值如果有行业就让他显示出来，在这个Boolean为true的情况下 */
    });
  }
}
