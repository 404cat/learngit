import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss']
})
export class CitySelectComponent implements OnInit {


  selectedProvince = '请选择省份';
  selectedCity = '请选择城市';
  selectedDistrict = '请选择地区';
  provinceData = ['Zhejiang', 'Jiangsu'];
  cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }
  constructor() {}

  ngOnInit() {}

}
