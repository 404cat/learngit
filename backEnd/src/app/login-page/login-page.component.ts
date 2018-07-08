import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  // submit(name: HTMLInputElement, password: HTMLInputElement): boolean {
  //   console.log(`名字为：${name.value}，密码为：${password.value}`);
  //   return false;
  // }


  constructor() {
  }
  ngOnInit() {}

}
