import {Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/authService';

@Injectable()
export class LoggedInguard implements CanActivate {

    constructor (private authService: AuthService,
    private router: Router,
    ) {}

    canActivate(): boolean {
        // return this.authService.isLoggedIn();
        if ( !this.authService.isLoggedIn()) {
            alert ('you need to login');
            this.router.navigateByUrl('login');
            return false;
        } else {
            return true;
        }
    } /* 创建一个类实现 canactive接口，在路由中配置这个类，当路由被激活的时候会调用这个canActive方法，
    判断登录验证的服务是不是登录，如果没有登录，重定向到登录页，并且弹出提示 */
}


