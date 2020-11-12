import { Component, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'comp-with-host-binding',
  template: 'Soy un componente',
})
export class CompWithHostBindingComponent {
    @HostBinding('class.especial')
    isSpecial = false;

    @HostBinding('style.color')
    color = 'green';

    @HostBinding('style.width')
    width = '200px';
}
