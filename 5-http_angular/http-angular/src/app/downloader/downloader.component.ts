import { Component } from '@angular/core';
import { DownloaderService } from './downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  providers: [DownloaderService],
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent {
  contents: string;

  constructor(private downloaderService: DownloaderService) { }

  // tslint:disable-next-line: typedef
  clear() {
    this.contents = undefined;
  }

  // tslint:disable-next-line: typedef
  download() {
    this.downloaderService.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }

}
