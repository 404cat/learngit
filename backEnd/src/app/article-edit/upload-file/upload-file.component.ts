import {
  Component,
  OnInit
} from '@angular/core';
import {
  FileUploader
} from 'ng2-file-upload';

import {
  ActivatedRoute
} from '@angular/router';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  fileName: any;
  previewImg: any;
  previeShow;
  data: any;

  public uploader: FileUploader = new FileUploader({
    url: '/carrots-admin-ajax/a/u/img/task',
    method: 'POST',
    autoUpload: false,
  }); /* 上传文件第三方插件初始化 */


  uploadFile() {
    // this.uploader.onProgressItem = (progress: any) => {
    //   console.log(progress);
    //   return {
    //     progress
    //   };
    // }; /* 获取上传进度 */

    this.uploader.queue[0].upload(); /* 上传 */
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      if (status === 200) {
        const tempRes = JSON.parse(response);
        console.log(tempRes.data.url); /* 如果请求成果返回的数据 */
      } else {
        alert('');
      }
    };
    console.log(this.uploader.queue[0]);
  } /* 上传文件 */

  selectedFileOnChanged(files: HTMLInputElement, event: any) {
    // 这里是文件选择完成后的操作处理
    this.previeShow = true; /* 布尔值让图片显示出来 */

    const reader = new FileReader();
    const file = files.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.previewImg = reader.result;
      console.log(this.previewImg);
    }; /* 利用fileready让图片显示出来 */
    this.fileName = event.target.files[0]; /* 获取上传的文件 */
    // return this.fileName; /* 返回上传的文件，在HTML中获取文件名和大小 */
  } /*  */

  clear() {
    this.uploader.clearQueue();
    return this.fileName = null;
  }
  /* 删除上传 */

  constructor(public _activeRouter: ActivatedRoute) {}

  ngOnInit() {
    this._activeRouter.queryParams.subscribe(params => {
      this.data = params; /* 获取利用路由传进来的单挑数据 */
    });
  }
}
