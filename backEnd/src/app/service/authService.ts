import {
  Injectable
} from '@angular/core';

@Injectable()
export class AuthService {
  login(code: string): boolean {
    console.log(code);
    if (code === 'success') {
      localStorage.setItem('success', code);
      return true;
    }
    return false;
  }
  /* 把发送的HTTP请求返回成功的信息输入到这个函数中，然后判断是否登录，如果登录就把登录成功的信息储存至
   localstorage， */

  logout(): any {
    localStorage.removeItem('success');
  } /* 退出时把储存的数据删除 */

  getInfo(): any {
    console.log(localStorage.getItem('success'));
    return localStorage.getItem('success');
  }
  /* 获取是否有登录的信息 */
  isLoggedIn(): boolean {
    console.log(this.getInfo());
    return this.getInfo() !== null;
  } /* 判断是否有储存的登录信息 */
}
/* 注册一个登录认证的服务 */
