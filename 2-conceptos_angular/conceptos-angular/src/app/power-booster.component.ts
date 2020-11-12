import { Component } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: `
    <h2>Potenciador</h2>
    <p>Super potenciador: {{ 2 | exponentialStrength: 10 }}</p>
  `
})
export class PowerBoosterComponent { }
