import { Injectable } from '@angular/core';
import { ArticleListComponent } from './article-list.component';


@Injectable({
  providedIn: 'root'
})
export class GetSingleDataService {

  value: any;

  constructor() { }

  GetSingleData ( value: any ) {
    this.value = value;
    console.log(value);
  }
}
