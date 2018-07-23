import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpInterceptorService
} from '../http-interceptor.service';

@Component({
  selector: 'app-backend-main',
  templateUrl: './backend-main.component.html',
  styleUrls: ['./backend-main.component.scss']
})
export class BackendMainComponent implements OnInit {
  page;
  size;

  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  }; /* 折叠菜单只能显示一个 */

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  constructor(
    private httpservice: HttpInterceptorService,
  ) {}

  ngOnInit() {
    this.getArticle();
  }
  getArticle() {
    this.httpservice.getSearchData().subscribe((Response) => {
      console.log(Response.json());
      this.size = Response.json();
      this.size = this.size.data.size;
      console.log(this.size);
    });
  }
}
