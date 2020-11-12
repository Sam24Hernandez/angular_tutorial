import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  birthday = new Date(2001, 6, 3); // Jul 3, 2001

  constructor() { }

  ngOnInit(): void {
  }

}
