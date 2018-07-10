import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {  BackendMainComponent } from './backend-main/backend-main.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import {HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'; /* 路由模块 */


/* 配置 angular i18n */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent, /* 根组件 */
    LoginPageComponent, /* 登录页 */
    BackendMainComponent, /* 后台主页 */
  ],
  imports: [
    BrowserModule, /* 浏览器模块 */
    HttpModule, /* http模块 */
    AppRoutingModule, /* 路由模块 */
    NgZorroAntdModule,  /** 导入 ng-zorro-antd 模块 **/
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }], /** 配置 ng-zorro-antd 国际化 **/
  bootstrap: [AppComponent]
})
export class AppModule { }
