import { Component } from '@angular/core';
import { UploaderService } from './uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  providers: [UploaderService],
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {
  message: string;

  constructor(private uploaderService: UploaderService) { }

  // tslint:disable-next-line: typedef
  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }

}
