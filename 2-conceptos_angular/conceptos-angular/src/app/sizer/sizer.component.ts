import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent {

  @Input() size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  // tslint:disable-next-line: typedef
  dec() { this.resize(-1); }
  // tslint:disable-next-line: typedef
  inc() { this.resize(+1); }

  // tslint:disable-next-line: typedef
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
