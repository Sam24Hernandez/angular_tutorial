import { Component } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculator',
  template: `
    <h2>Calculador de Aumento de Potencia</h2>
    <div>Potencia normal: <input [(ngModel)]="power"></div>
    <div>Factor potencia: <input [(ngModel)]="factor"></div>
    <p>
    El poder del superhéroe: {{power | exponentialStrength: factor}}
    </p>
  `
})
export class PowerBoostCalculatorComponent {
  power = 5;
  factor = 1;
}
