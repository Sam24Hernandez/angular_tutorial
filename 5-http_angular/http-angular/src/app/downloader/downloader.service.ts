import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { MessageService } from '../message.service';

@Injectable()
export class DownloaderService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // tslint:disable-next-line: typedef
  getTextFile(filename: string) {
    // El Observable devuelto por get() es de tipo Observable<cadena>
    // porque se especificó una respuesta de texto.
    // No hay necesidad de pasar un parámetro de tipo <string> para obtener().
    return this.http.get(filename, { responseType: 'text' })
      .pipe(
        tap( // Log del resultado o error
          data => this.log(filename, data),
          error => this.logError(filename, error)
        )
      );
  }

  // tslint:disable-next-line: typedef
  private log(filename: string, data: string) {
    const message = `DownloaderService descargado "${filename}" y obtenido "${data}".`;
    this.messageService.add(message);
  }

  // tslint:disable-next-line: typedef
  private logError(filename: string, error: any) {
    const message = `DownloaderService fallido al descargar "${filename}"; y obtenido error "${error.message}".`;
    console.error(message);
    this.messageService.add(message);
  }
}
