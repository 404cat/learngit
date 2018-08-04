import {
  Injectable,
  EventEmitter,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSearchInfoService {
  totalchange: EventEmitter<any> = new EventEmitter();

  total;

  constructor() {}

  // getTotals(total: any) {
    // this.total = total;
  // }

  emitTotalChangeEvent(number) {
    this.totalchange.emit(number);
  }

  getTotalChangeEmitter() {
    return this.totalchange;
  }

  // getTotal() {
  //   return this.total;
  // }

}
