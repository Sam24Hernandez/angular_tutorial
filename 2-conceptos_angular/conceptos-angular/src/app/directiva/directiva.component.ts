import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  canSave = true;
  isSpecial = true;
  isUnchanged = true;

  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Sam'
  };

  item: Item; // definido para demostrar la precedencia del contexto de la plantilla
  items: Item[];

  currentItem: Item;

  // trackBy cuenta de cambio
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  currentClasses: {};

  currentStyles: {};

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }

  // tslint:disable-next-line: typedef
  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  // tslint:disable-next-line: typedef
  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial
    };
  }

  // tslint:disable-next-line: typedef
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
  }

  // tslint:disable-next-line: typedef
  isActiveToggle() {
    this.isActive = !this.isActive;
  }

  // tslint:disable-next-line: typedef
  giveNullCustomerValue() {
    this.nullCustomer = 'Ivana';
  }

  // tslint:disable-next-line: typedef
  resetItems() {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  // tslint:disable-next-line: typedef
  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  // tslint:disable-next-line: typedef
  changeIds() {

    this.items.forEach(i => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  // tslint:disable-next-line: typedef
  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }

  trackByItems(index: number, item: Item): number { return item.id; }

  trackById(index: number, item: any): number { return item.id; }

}
