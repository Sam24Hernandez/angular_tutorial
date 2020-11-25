import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styles: [
  ]
})
export class CrearArticuloComponent implements OnInit {

  articles: Article[];

  constructor() { }

  ngOnInit(): void {
  }

}
