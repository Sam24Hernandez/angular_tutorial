import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr. Strange' },
      { id: 12, name: 'Iron Man' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Wolverine' },
      { id: 15, name: 'Spiderman' },
      { id: 16, name: 'Batman' },
      { id: 17, name: 'Superman' },
      { id: 18, name: 'Magneto' },
      { id: 19, name: 'Wonder Woman' },
      { id: 20, name: 'Flash' },
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
