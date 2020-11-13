import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TrimNameInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const body = req.body;
    if (!body || !body.name ) {
      return next.handle(req);
    }
    // copiar el cuerpo y recortar los espacios en blanco de la propiedad del nombre
    const newBody = { ...body, name: body.name.trim() };
    // solicitud de clon y establecer su cuerpo
    const newReq = req.clone({ body: newBody });
    // enviar la solicitud de clonación al siguiente controlador.
    return next.handle(newReq);
  }
}
