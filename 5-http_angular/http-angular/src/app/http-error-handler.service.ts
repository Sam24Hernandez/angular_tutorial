import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

// entidad de retorno después de PUT/actualización
export type HandleError =
  <T> (operation?: string, result?: T) =>
  (error: HttpErrorResponse) => Observable<T>;

/* Manejador HTTPCLIENT de errores */
@Injectable()
export class HttpErrorHandler {

  constructor(private messageService: MessageService) { }

  /** Crear el handleError de error que ya conoce el nombre del servicio */
  createHandleError = (serviceName = '') => {
    return <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);
  }

  /**
   * Devuelve una función que se encarga de los fallos de funcionamiento del Http.
   * Este manejador de errores permite que la aplicación continúe ejecutándose como si no hubiera ocurrido ningún error.
   * @param serviceName = nombre del servicio de datos que intentó la operación
   * @param operation - nombre de la operación que falló
   * @param result - valor opcional para regresar como resultado observable
   */
  // tslint:disable-next-line: typedef
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: enviar el error a la infraestructura de registro remoto
      console.error(error);

      const message = (error.error instanceof ErrorEvent) ? error.error.message : `el servidor devolvió un código ${error.status}
        con el cuerpo "${error.error}"`;

      // TODO: mejor trabajo de transformación de errores para el consumo del usuario
      this.messageService.add(`${serviceName}: ${operation} fallido: ${message}`);

      // Deja que la aplicación siga funcionando devolviendo un resultado seguro.
      return of (result);
    };
  }
}
