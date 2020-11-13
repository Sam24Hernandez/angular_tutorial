import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse,
  HttpEventType, HttpProgressEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Simular el servidor que responde a la solicitud de carga de archivos */
@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/upload/file') === -1) {
      return next.handle(req);
    }
    const delay = 300;
    return createUploadEvents(delay);
  }
}

/** Crear simulación de flujo de eventos de carga */
// tslint:disable-next-line: typedef
function createUploadEvents(delay: number) {
  // Simular el comportamiento XHR que proporcionaría esta información en un ProgressEvent
  const chunks = 5;
  const total = 12345678;
  const chunkSize = Math.ceil(total / chunks);

  return new Observable<HttpEvent<any>>(observer => {
    // notify the event stream that the request was sent.
    observer.next({type: HttpEventType.Sent});

    uploadLoop(0);

    // tslint:disable-next-line: typedef
    function uploadLoop(loaded: number) {
        // N.B.: No se puede usar setInterval o rxjs delay (que usa setInterval)
        // porque la prueba de e2e no se completará. ¿Una cosa de la zona?
        // Usa setTimeout y recursividad de la cola en su lugar.
        setTimeout(() => {
          loaded += chunkSize;

          if (loaded >= total) {
            const doneResponse = new HttpResponse({
              status: 201, // Está bien, pero no hay cuerpo;
            });
            observer.next(doneResponse);
            observer.complete();
            return;
          }

          const progressEvent: HttpProgressEvent = {
            type: HttpEventType.UploadProgress,
            loaded,
            total
          };
          observer.next(progressEvent);
          uploadLoop(loaded);
        }, delay);
    }
  });
}
