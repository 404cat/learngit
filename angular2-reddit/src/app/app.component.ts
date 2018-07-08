import {
  Component
} from '@angular/core';
import {
  extend
} from 'webdriver-js-extender';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  title = 'app';

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title:${title.value} and link:${link.value}`);
    return false;
  }

}

enum Role {
  employee,
  manager,
  admin
}
console.log(Role[0], Role[2]);
/* 枚举 */

class person {
  first_name: string;
  last_name: string;
  age: number;

  greet() {
    console.log(this.first_name);
  }

  ageInYears(years: number): number {
    console.log(this.age + years);
    return this.age + years;
  }
}
const p: person = new person();
p.age = 6;
p.ageInYears(6); // 返回值12

/* 类，类中带返回值的方法，强类型语言的好处 格式语法不对都会提示，这样可以避免后期更改bug */

class Report {
  data: Array < string > ;

  constructor(data: Array < string > ) {
    this.data = data;
  }

  run() {
    this.data.forEach(function (line) {
      console.log(line);
    });
  }
}

// const r: Report = new Report(['1link', '2line']);
// r.run();

class TabbedReport extends Report {
  headers: Array < string > ;

  constructor(headers: string[], values: strinh[]) {
    super(values);
    this.headers = headers;
  }
  run() {
    console.log(this.headers);
    super.run();
  }
}

const headers: string[] = ['name'];
const data: string[] = ['alice', 'paul', 'louis'];
const t: TabbedReport = new TabbedReport(headers, data);
t.run();

/* 继承的例子 */
