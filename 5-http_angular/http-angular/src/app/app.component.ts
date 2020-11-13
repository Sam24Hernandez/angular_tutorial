import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeroes = true;
  showConfig = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;

  // tslint:disable-next-line: typedef
  toggleHeroes() { this.showHeroes = !this.showHeroes; }
  // tslint:disable-next-line: typedef
  toggleConfig() { this.showConfig = !this.showConfig; }
  // tslint:disable-next-line: typedef
  toggleDownloader() { this.showDownloader = !this.showDownloader; }
  // tslint:disable-next-line: typedef
  toggleUploader() { this.showUploader = !this.showUploader; }
  // tslint:disable-next-line: typedef
  toggleSearch() { this.showSearch = !this.showSearch; }
}
