import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHeaders, HttpRequest, HttpResponse,
  HttpInterceptor, HttpHandler
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

import { RequestCache } from '../request-cache.service';
import { searchUrl } from '../package-search/package-search.service';
/**
 * Si la solicitud es almacenable en caché (por ejemplo, búsqueda de paquetes) y
 * la respuesta está en caché devolver la respuesta en caché como observable.
 * Si tiene el encabezado "x-refresh" eso es cierto,
 * luego también volver a ejecutar la búsqueda de paquetes, usando la respuesta de next(),
 * devolviendo un observable que emite primero la respuesta cacheada.
 *
 * Si no está en el caché o no se puede cachar,
 * pasar la solicitud a través de a siguiente()
 */
@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) {}

  // tslint:disable-next-line: typedef
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!isCacheable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    // cache-then-refresh
    if (req.headers.get('x-refresh')) {
      const results$ = sendRequest(req, next, this.cache);
      return cachedResponse ?
        results$.pipe( startWith(cachedResponse) ) :
        results$;
    }
    // cache-or-fetch
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}

/** Esta petición es cacheable? */
// tslint:disable-next-line: typedef
function isCacheable(req: HttpRequest<any>) {
  // Only GET requests are cacheable
  return req.method === 'GET' &&
    // Only npm package search is cacheable in this app
    -1 < req.url.indexOf(searchUrl);
}

/**
 * Obtener la respuesta del servidor observable enviando la solicitud a "next()`.
 * Añadirá la respuesta a la caché al salir.
 */
function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCache): Observable<HttpEvent<any>> {

  // No se permiten cabeceras en la solicitud de búsqueda de la NPM.
  const noHeaderReq = req.clone({ headers: new HttpHeaders() });

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // Puede haber otros eventos además de la respuesta.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Actualizar la cache.
      }
    })
  );
}
