import {
  BrowserModule,
} from '@angular/platform-browser';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  AppComponent
} from './app.component';
import {
  LoginPageComponent
} from './login-page/login-page.component';
import {
  BackendMainComponent
} from './backend-main/backend-main.component';
import {
  NgZorroAntdModule,
  NZ_I18N,
  zh_CN
} from 'ng-zorro-antd';
import {
  HttpModule
} from '@angular/http';
import {
  AppRoutingModule
} from './app-routing.module'; /* 路由模块 */
import {
  CitySelectComponent
} from './city-select/city-select.component';
import {
  ArticleListComponent
} from './article-list/article-list.component';
import {
  ArticleEditComponent
} from './article-edit/article-edit.component';

/** 配置 angular i18n **/
import {
  registerLocaleData
} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { UploadFileComponent } from './article-edit/upload-file/upload-file.component';
import { PaginationComponent } from './article-list/pagination/pagination.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SearchArticleComponent } from './search-article/search-article.component';

import {LoggedInguard} from './guard/loggedIn.guard';
import {AuthService} from './service/authService';



@NgModule({
  declarations: [
    AppComponent, /* 根组件 */
    LoginPageComponent, /* 登录页 */
    BackendMainComponent, /* 后主页 */
    CitySelectComponent, /* 省�, �区联动模块 */
    ArticleListComponent, /* article列表 */
    UploadFileComponent,
    NewArticleComponent,
    SearchArticleComponent,
    ArticleEditComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule, /* 浏览器模块 */
    FormsModule,
    HttpModule, /* http模块 */
    HttpClientModule,
    AppRoutingModule, /* 路由模块 */
    NgZorroAntdModule, /** 导入 ng-zorro-antd 模块 **/
    BrowserAnimationsModule,
    CommonModule,
    FileUploadModule,
  ],
  providers: [{
    provide: NZ_I18N,
    useValue: zh_CN,
  },
  AuthService,
  LoggedInguard
],
  /** 配置 ng-zorro-antd 国际化 **/
  bootstrap: [AppComponent]
})
export class AppModule {}
