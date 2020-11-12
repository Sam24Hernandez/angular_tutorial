import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Servicio de diálogo modal Async
 * El DialogService hace que esta aplicación sea más fácil de probar al fingir este servicio.
 * TODO: mejor implementación modal que no usa window.confirm
 */

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  /**
   * Pídele al usuario que confirme una acción. El "mensaje" explica la acción y las opciones.
   * Devuelve lo observable resolviendo a `verdadero`=confirmar o `falso`=cancelar
   */
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || '¿Está bien así?');

    return of(confirmation);
  }
}
