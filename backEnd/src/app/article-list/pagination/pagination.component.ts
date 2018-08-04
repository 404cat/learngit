import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import {
  HttpInterceptorService
} from '../../http-interceptor.service';
import {
  GetSearchInfoService
} from '../../service/get-search-info.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  pageIndex = 1;
  size = 10;
  total;
  number = 50;
  data;
  article;
  @Output() pagination = new EventEmitter();
  @Input() input;

  constructor(
    private httpService: HttpInterceptorService,
    private getSearchInfoService: GetSearchInfoService,
  ) {}

  ngOnInit() {
    this.getData();
    this.getSearchInfoService.getTotalChangeEmitter().subscribe( total  => {
      this.total = total;
      console.log(this.total);
    });
  }

  getData() {
    const put = `page=${this.pageIndex}&size=${this.size}`;
    this.pagination.emit(put);
    this.httpService.getSearchData().subscribe((Response) => {
      this.data = Response.json();
      this.data = this.data.data;
      this.total = this.data.total; /* 获取文章总数 */
    }); /* 获取分页查找的数据 */
  }

  onchange(event: any) {
    console.log(event);
    console.log('ceshi');
  }
}
