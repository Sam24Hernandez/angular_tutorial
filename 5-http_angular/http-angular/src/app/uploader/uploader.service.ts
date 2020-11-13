import { Injectable } from '@angular/core';
import {
  HttpClient, HttpEvent, HttpEventType,
  HttpRequest, HttpErrorResponse
} from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private http: HttpClient, private messenger: MessageService) { }

  // Si sube varios archivos, cambie a:
  // upload(files: FileList) {
  // const formData = new FormData();
  // files.forEach(f => formData.append(f.name, f));
  // new HttpRequest('POST', '/upload/file', formData, {reportProgress: true});
  // ...
  // }

  // tslint:disable-next-line: typedef
  upload(file: File) {
    if (!file) { return of<string>(); }

    // PODRÍA HABER ESCRITO:
    // return this.http.post('/upload/file', file, {
    // reportProgress: true,
    // observe: 'events'
    // }).pipe(

    // Crear el objeto de solicitud que POST el archivo a un punto final de carga.
    // La opción `reportProgress` le dice a HttpClient que escuche y devuelva
    // Eventos de progreso de XHR.
    const req = new HttpRequest('POST', '/upload/file', file, {
      reportProgress: true
    });

    // La API "HttpClient.request" produce un flujo de eventos en bruto
    // que incluye el inicio (enviado), el progreso y los eventos de respuesta.
    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap(message => this.showProgress(message)),
      last(), // devolver el último mensaje (completado) a la persona que llama
      catchError(this.handleError(file))
    );
  }

  /** Devuelve un mensaje distinto para los eventos de envío, carga de progreso y respuesta */
  // tslint:disable-next-line: typedef
  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }

  /**
   * Devuelve una función que maneja los fallos de subida de Http.
   * @param file - Objeto de archivo para el archivo que se está subiendo
   *
   * Cuando no hay un "Interceptor de carga" y no hay servidor,
   * Terminarás aquí en el manejador de errores.
   */
  // tslint:disable-next-line: typedef
  private handleError(file: File) {
    const userMessage = `${file.name} upload failed.`;

    return (error: HttpErrorResponse) => {
      // TODO: enviar el error a la infraestructura de registro remoto
      console.error(error);

      const message = (error.error instanceof Error) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      this.messenger.add(`${userMessage} ${message}`);

      // Dejar que la aplicación siga funcionando pero indica un fallo.
      return of(userMessage);
    };
  }

  // tslint:disable-next-line: typedef
  private showProgress(message: string) {
    this.messenger.add(message);
  }

}
