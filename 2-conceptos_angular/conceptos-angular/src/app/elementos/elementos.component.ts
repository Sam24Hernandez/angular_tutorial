import { Component } from '@angular/core';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent {
  actionName = 'Ve a por ello';
  isSpecial = true;
  canSave = true;
  classExpression = 'especial transparencia';
  styleExpression = 'color: red';
  color = 'blue';
}
