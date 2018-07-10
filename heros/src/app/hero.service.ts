import { Injectable } from '@angular/core';
import { Hero } from './hero'; /* 导入属性 */
import { HEROES } from './mock-heros'; /* 导入模拟数据 */
import { Observable, of } from 'rxjs'; /* 相当于异步请求  可观察数据 */
import { MessageService } from './message.service'; /* 导入返回信息 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('heroservice:fetched heroes');
  //   /* 在获取到英雄数组时发送一条信息 */
  //   return of(HEROES);
  //   // return this.http.get<Hero[]>(this.heroesUrl);
  // }/* of()会返回一个Observable<> */

  /** GET heroes from the server */
getHeroes (): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl);
}


  // getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl);
  // }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id));
  }

  constructor(
    // private http: HttpClient,
    // private heroesUrl = 'api/heroes',
    private http: HttpClient,
    private messageService: MessageService ) { }

    private log(message: string) {
      this.messageService.add('HeroService: ' + message);
    }
    // private log(message: string) {
      // this.messageService.add('HeroService: ' + message);
    // }

}


