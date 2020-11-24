import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: [
  ]
})
export class SliderComponent implements OnInit {

  @Input() name: string;
  @Input() size: string;

  constructor() { }

  ngOnInit(): void {
  }

}
