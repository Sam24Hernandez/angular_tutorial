import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService){ }

  getHeroes(): Observable<Hero[]> {
    // TODO: enviar el mensaje _despues_ de buscar a los heroes
    this.messageService.add('HeroService: buscando heroes');
    return of(HEROES);
  }

  // tslint:disable-next-line: typedef
  getHero(id: number | string) {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
