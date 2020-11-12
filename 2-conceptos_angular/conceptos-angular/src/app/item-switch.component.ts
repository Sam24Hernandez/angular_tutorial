import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-stout-item',
  template: `Estoy un poco corta y robusta como mi {{item.name}}!`
})
export class StoutItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-best-item',
  template: `Esta es la más brillante {{item.name}} de la ciudad.`
})
export class BestItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-device-item',
  template: `¿Cuál es el teléfono {{item.name}} más delgado?`
})
export class DeviceItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-lost-item',
  template: `¿Alguien ha visto mi {{item.name}}?`
})
export class LostItemComponent {
  @Input() item: Item;
}

@Component({
  selector: 'app-unknown-item',
  template: `{{message}}`
})
export class UnknownItemComponent {
  @Input() item: Item;
  // tslint:disable-next-line: typedef
  get message() {
    return this.item && this.item.name ?
      `${this.item.name} es extraña y misteriosa.` :
      'Un misterio envuelto en una pecera.';
  }
}

export const ItemSwitchComponents =
  [ StoutItemComponent, BestItemComponent, DeviceItemComponent, LostItemComponent, UnknownItemComponent ];
