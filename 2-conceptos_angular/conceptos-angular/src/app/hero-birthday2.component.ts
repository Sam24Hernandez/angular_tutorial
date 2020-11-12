import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
    <p>El nacimiento de Sam es {{ birthday | date:format }}</p>
    <button (click)="toggleFormat()">Cambio de Formato</button>
  `
})
export class HeroBirthday2Component  {
  birthday = new Date(2001, 6, 3);

  toggle = true; // empieza en true == shorDate

  // tslint:disable-next-line: typedef
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  // tslint:disable-next-line: typedef
  toggleFormat() { this.toggle = !this.toggle; }
}
