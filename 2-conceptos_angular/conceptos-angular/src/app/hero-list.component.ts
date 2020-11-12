import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  template: `
    <h2>Heroes desde el archivo JSON</h2>

    <div *ngFor="let hero of ('assets/heroes.json' | fetch)">
      {{hero.name}}
    </div>

    <p>Heroes como JSON:
      {{'assets/heroes.json' | fetch | json}}
    </p>
  `
})
export class HeroListComponent { }
