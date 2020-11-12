import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `<p>El nacimiento de Sam es {{birthday | date}}</p>`
})
export class HeroBirthdayComponent {
  birthday = new Date(2001, 6, 3);
}
