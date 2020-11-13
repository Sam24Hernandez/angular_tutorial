import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  // tslint:disable-next-line: typedef
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthorizationToken();

    // Clonar la solicitud y establecer la nueva cabecera en un paso la nueva cabecera en un paso.
    const authReq = req.clone({ setHeaders: { Authorization: authToken } });

    // enviar la solicitud clonada con encabezamiento al siguiente controlador.
    return next.handle(authReq);
  }
}
