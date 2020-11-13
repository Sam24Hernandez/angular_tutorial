import { Component, OnInit } from '@angular/core';

import { Hero, HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  editHero: Hero; // el héroe que se está editando actualmente

  constructor(private heroesService: HeroesService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    this.editHero = undefined;
    name = name.trim();
    if (!name) {
      return;
    }

    // El servidor generará la identificación de este nuevo héroe.
    const newHero: Hero = { name } as Hero;
    this.heroesService.addHero(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero.id).subscribe();
  }

  // tslint:disable-next-line: typedef
  edit(hero: Hero) {
    this.editHero = hero;
  }

  // tslint:disable-next-line: typedef
  search(searchTerm: string) {
    this.editHero = undefined;
    if (searchTerm) {
      this.heroesService.searchHeroes(searchTerm)
        .subscribe(heroes => (this.heroes = heroes));
    }
  }

  // tslint:disable-next-line: typedef
  update() {
    if (this.editHero) {
      this.heroesService
        .updateHero(this.editHero)
        .subscribe(hero => {
        // sustituir el héroe en la lista de héroes con la actualización del servidor
        const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
        if (ix > -1) {
          this.heroes[ix] = hero;
        }
      });
      this.editHero = undefined;
    }
  }

}
