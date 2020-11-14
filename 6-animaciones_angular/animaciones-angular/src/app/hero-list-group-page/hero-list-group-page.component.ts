import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero-list-group-page',
  template: `
    <section>
      <h2>Grupo de la Lista de Héroes</h2>

      <app-hero-list-groups [heroes]="heroes" (remove)="onRemove($event)"></app-hero-list-groups>
    </section>
  `
})
export class HeroListGroupPageComponent {
  heroes = HEROES.slice();

  onRemove(id: number) {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

}