import {
  Component,
  OnInit
} from '@angular/core';
import {
  FileUploader
} from 'ng2-file-upload';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  fileName: any;
  previewImg: any;
  previeShow;

  public uploader: FileUploader = new FileUploader({
    url: '/carrots-admin-ajax/a/u/img/task',
    method: 'POST',
    autoUpload: false,
  }); /* 第三方插件初始化 */

  selectedFileOnchanged(event: any) {
    console.log(event.target.value);
  }


  uploadFile() {

    this.uploader.onProgressItem = (progress: any) => {
      console.log(progress);
      return {
        progress
      };
    }; /* 获取上传进度 */

    this.uploader.queue[0].upload(); /* 上传 */

    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      if (status === 200) {
        const tempRes = JSON.parse(response);
        console.log(tempRes); /* 如果请求成果返回的数据 */
      } else {
        alert('');
      }
    };
    console.log(this.uploader.queue[0]);
  } /* 上传文件 */

  selectedFileOnChanged(files: HTMLInputElement, event: any) {
    // 这里是文件选择完成后的操作处理
    const reader = new FileReader();
    const file = files.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewImg = reader.result;
      this.previeShow = true;
      console.log(this.previewImg);
    };
    // console.log(this.fileName);
    this.fileName = event.target.files[0]; /* 获取上传的文件 */
    return this.fileName; /* 返回上传的文件，在HTML中获取文件名和大小 */
  } /*  */

  clear() {
    this.uploader.clearQueue();
    return this.fileName = null;
  }
  /* 删除上传 */

  constructor() {}

  ngOnInit() {}
}
