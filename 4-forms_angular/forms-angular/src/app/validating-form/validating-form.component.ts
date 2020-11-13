import { Component } from '@angular/core';

@Component({
  selector: 'app-validating-form',
  templateUrl: './validating-form.component.html',
  styleUrls: ['./validating-form.component.css']
})
export class ValidatingFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
}

