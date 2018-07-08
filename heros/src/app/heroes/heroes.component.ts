import {
  Component,
  OnInit
} from '@angular/core';

import {
  Hero
} from '../hero'; /* 以import的方式导入创建的类 */

// import {
//   HEROES
// } from '../mock-heros';/* 模拟数据，注入服务后就不需要这个导入了 */

import {
  HeroService
} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'windstorm'; /* 首先声明的是字符串 */
  /* —————————————————————————— */


  /* hero: Hero = {
    id: 1,
    name: 'windstorm'
  };  */
  /* hero: Hero 这种写法是枚举??，目的是为了拿到Hero里面所有的属性???
  但是好像是赋值的写法     */
  // heroes = Hero[];
  /* ——————————————————- */
  /* HEROES来自 mock-heros.ts文件当中，已经使用import导入进来了，
  这里主要是模仿数据，
  ，这个语句放在下面的函数下就会报错 */

  heroes: Hero[];

  // selectedHero: Hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  /* 点击事件调用的函数没有返回值 */
  /* 配置了路由后这个函数就没有用了 */


  constructor(private heroService: HeroService) {

  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    /* 未配置 Observable 之前 */
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
    /* heroes => 这个是参数，胖箭头函数的特性 */
  }

  ngOnInit() {
    this.getHeroes();
  }

}
