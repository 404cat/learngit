import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /* 路由需要这两个类来配置，所以需要导入 */

import { HeroesComponent } from './heroes/heroes.component'; /* 导入英雄列表 */
import { DashboardComponent } from './dashboard/dashboard.component'; /* 导入仪盘表 */
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; /* 导入英雄详情 */

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent},
];

@NgModule({
  exports: [RouterModule],

  imports: [ RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
