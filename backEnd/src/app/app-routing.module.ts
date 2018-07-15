import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component'; /* 导入登录页 */
import { BackendMainComponent } from './backend-main/backend-main.component'; /* 导入后台主页 */
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent}, /* 定义登录页路由 */
  { path: 'backend/main', component: BackendMainComponent,
  children:
  [
    { path: 'articleList', component: ArticleListComponent, }, /* 文章列表路由 */
    { path: 'articleEdit/:id', component: ArticleEditComponent, }, /* 文章编辑 */
    { path: '', component: ArticleListComponent }, ] /* 后台主页路由重定向 */

  }, /* 定义后台主页路由 */

  { path: '', redirectTo: '/login', pathMatch: 'full'}, /* 默认路由，应用启动时加载的 */
];
/* 添加一个路由定义，当用户点击某个链接或者输入urL时会显示哪个视图，
path 用于匹配URL 的字符串
component 当导航到这个路由时 路由器应该创建哪个组件 */

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  /* 初始化路由器，让它监听浏览器中的地址变化，使用routes来配置 */

  exports: [RouterModule], /* 添加出口让路由器的相关指令能在Appmodule中使用 */

  declarations: []
})
export class AppRoutingModule { }
