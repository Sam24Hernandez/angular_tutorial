import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `se ha traído al` : `no se encontró al`;
          this.log(`${outcome} heroe con id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap (_ => this.log(`encontró héroes que coinciden con el id "${id}"`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
       // si no es un término de búsqueda, devuelva la matriz de héroes vacía.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
          this.log(`encontró héroes que coinciden con "${term}"`) :
          this.log(`no hay héroes que coincidan con "${term}"`),
          catchError(this.handleError<Hero[]>('searchHeroes', []))
        )
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`añadido heroe con id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`heroe eliminado con id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`heroe actualizado con id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

      // TODO: enviar el error a la infraestructura de registro remoto
      console.error(error);

      // TODO: mejor trabajo de transformación de errores para el consumo del usuario
      this.log(`${operation} failed: ${error.message}`);

      // Deja que la aplicación siga funcionando devolviendo un resultado vacío.
      return of(result as T);
    };
  }

  // tslint:disable-next-line: typedef
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
