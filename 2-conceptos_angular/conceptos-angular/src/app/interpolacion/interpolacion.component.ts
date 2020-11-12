import { Component, OnInit } from '@angular/core';

import { CUSTOMERS } from '../customers';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent implements OnInit {

  customers = CUSTOMERS;

  currentCustomer = 'Sam';
  title = 'Productos Destacados';
  itemImageUrl = '../assets/potted_plant.png';

  recommended = 'Igual te gustará:';
  itemImageUrl2 = '../assets/lamp.png';

  constructor() { }

  getVal(): number { return 2; }

  ngOnInit(): void {
  }

}
