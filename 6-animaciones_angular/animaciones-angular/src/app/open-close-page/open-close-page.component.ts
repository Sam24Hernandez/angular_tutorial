import { Component } from '@angular/core';

@Component({
  selector: 'app-open-close-page',
  template: `
    <section>
      <h2>Abrir Cerrar Componente</h2>
      <input type="checkbox" [checked]="logging" (click)="toggleLogging()"/> Eventos de animación de registro de la consola

      <app-open-close [logging]="logging"></app-open-close>
    </section>
  `
})
export class OpenClosePageComponent {
  logging = false;

  toggleLogging() {
    this.logging = !this.logging;
  }
}
