import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService) {}

  // tslint:disable-next-line: typedef
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // ampliar la respuesta del servidor observable con el registro
    return next.handle(req)
      .pipe(
        tap(
          // Tiene éxito cuando hay una respuesta; ignora otros eventos
          event => ok = event instanceof HttpResponse ? 'Sucedido' : '',
          // Operación fallida; el error es una HttpErrorResponse
          error => ok = 'fallido'
        ),
        // Registrar cuando se observe una respuesta completa o errores
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} en ${elapsed} ms.`;
          this.messenger.add(msg);
        })
      );
  }
}
