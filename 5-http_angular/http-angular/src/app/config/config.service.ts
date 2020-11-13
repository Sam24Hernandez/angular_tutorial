import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getConfig() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        retry(3), // reintentar una petición fallida hasta 3 veces
        catchError(this.handleError) // ...y luego manejar el error...
      );
  }

  // tslint:disable-next-line: typedef
  getConfig_1() {
    return this.http.get(this.configUrl);
  }

  // tslint:disable-next-line: typedef
  getConfig_2() {
    return this.http.get<Config>(this.configUrl);
  }

  // tslint:disable-next-line: typedef
  getConfig_3() {
    return this.http.get<Config>(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' }
    );
  }

  // tslint:disable-next-line: typedef
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Se produjo un error del lado del cliente o de la red. Manéjelo en consecuencia.
      console.error('Un error ha ocurrido: ', error.error.message);
    } else {
      // El backend devolvió un código de respuesta sin éxito.
      // El cuerpo de respuesta puede contener pistas de lo que salió mal.
      console.error(`El backend devolvió un código ${error.status}, ` + `el cuerpo era: ${error.error}`);
    }
    return throwError('Algo malo ha sucedido; por favor intentalo más tarde.');;
  }

  // tslint:disable-next-line: typedef
  makeIntentionalError() {
    return this.http.get('una/url/falsa')
      .pipe(
          catchError(this.handleError)
      );
  }
}
