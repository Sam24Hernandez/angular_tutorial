import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Article } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private articlesUrl = 'api/articles';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ){ }

  /** GET articles from the server */
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl)
      .pipe(
        tap(_ => this.log('fetched articles')),
        catchError(this.handleError<Article[]>('getArticles', []))
      );
  }

  /** GET article by id. Will 404 if id not found */
  getArticleNo404<Data>(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/?id=${id}`;
    return this.http.get<Article[]>(url)
      .pipe(
        map(articles => articles[0]),
        // returns a {0|1} element array
        tap(a => {
          const outcome = a ? `se ha traído al` : `no se encontró al`;
          this.log(`${outcome} articulo con id=${id}`);
        }),
        catchError(this.handleError<Article>(`getArticle id=${id}`))
      );
  }

  /** GET article by id. Return `undefined` when id not found */
  getArticle(id: number): Observable<Article> {
    const url = `${this.articlesUrl}/${id}`;

    return this.http.get<Article>(url)
      .pipe(
        tap (_ => this.log(`se encontró articulos que coinciden con el id "${id}"`)),
        catchError(this.handleError<Article>(`getArticle id=${id}`))
      );
  }

  /* GET articles whose name contains search term */
  searchArticles(term: string): Observable<Article[]> {
    if (!term.trim()) {
       // si no es un término de búsqueda, devuelva la matriz de articulos vacía.
      return of([]);
    }
    return this.http.get<Article[]>(`${this.articlesUrl}/?title=${term}`).pipe(
      tap(x => x.length ?
          this.log(`encontró héroes que coinciden con "${term}"`) :
          this.log(`no hay héroes que coincidan con "${term}"`),
          catchError(this.handleError<Article[]>('searchArticles', []))
        )
    );
  }

  //////////////////// Save Methods ////////////////////
  /** POST: add a new article to the server */
  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.articlesUrl, article, this.httpOptions).pipe(
      tap((newArticle: Article) => this.log(`añadido nuevo articulo con id=${newArticle.id}`)),
      catchError(this.handleError<Article>('addArticle'))
    );
  }

  /** DELETE: delete the article to the server */
  deleteArticle(article: Article | number): Observable<Article> {
    const id = typeof article === 'number' ? article : article.id;
    const url = `${this.articlesUrl}/${id}`;

    return this.http.delete<Article>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`articulo eliminado con id=${id}`)),
        catchError(this.handleError<Article>('deleteArticle'))
      );
  }

  /** PUT: update the article on the server */
  updateArticle(article: Article): Observable<any> {
    return this.http.put(this.articlesUrl, article, this.httpOptions)
      .pipe(
        tap(_ => this.log(`articulo actualizado con id=${article.id}`)),
        catchError(this.handleError<any>('updateArticle'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      // TODO: enviar el error a la infraestructura del registro remoto
      console.log(error);

      // TODO: mejor trabajo de transformación de errores
      this.log(`${operation} failed: ${error.message}`);

      // Deja que la aplicación siga funcionando devolviendo un resultado vacio
      return of(result as T);
    };
  }

  /** Log a ArticleService message with the MessageService */
  // tslint:disable-next-line: typedef
  private log(message: string) {
    console.log(`ArticleService: ${message}`);
  }
}
