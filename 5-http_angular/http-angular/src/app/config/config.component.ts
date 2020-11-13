import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  providers: [ConfigService],
  styles: ['.error {color: red;}']
})
export class ConfigComponent {
  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) { }

  // tslint:disable-next-line: typedef
  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  // tslint:disable-next-line: typedef
  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = {
          ...data // dirección exitosa
        },
        error => this.error = error // dirección error
      );
  }

  // tslint:disable-next-line: typedef
  showConfig_v1() {
    this.configService.getConfig_1()
      .subscribe((data: Config) => this.config = {
        heroesUrl: data.heroesUrl,
        textfile: data.textfile
      });
  }

  // tslint:disable-next-line: typedef
  showConfig_v2() {
    this.configService.getConfig()
    // clonar el objeto de datos, usando su conocida forma Config
      .subscribe((data: Config) => this.config = {
        ...data
      });
  }

  // tslint:disable-next-line: typedef
  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp es del tipo `HttpResponse<Config>`
      .subscribe(resp => {
        // mostrar los headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`
        );

        // acceder al cuerpo directamente, cuando sea de tipo `Config`.
        this.config = { ... resp.body };
      });
  }

  // tslint:disable-next-line: typedef
  makeError() {
    this.configService.makeIntentionalError()
      // tslint:disable-next-line: deprecation
      .subscribe(null, error => this.error = error);
  }

}

