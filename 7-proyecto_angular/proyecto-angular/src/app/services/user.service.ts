import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/user.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched users')),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUserNo404<Data>(id: number): Observable<User> {
    const url = `${this.usersUrl}/?id=${id}`;
    return this.http.get<User[]>(url)
      .pipe(
        map(users => users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `se ha traído al` : `no se encontró al`;
          this.log(`${outcome} usuario con id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get<User>(url).pipe(
      tap (_ => this.log(`encontró usuarios que coinciden con el id "${id}"`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`añadido usuario con id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  deleteUser(user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`crush eliminada con id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`crush actualizada con id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  // tslint:disable-next-line: typedef
  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {

      // TODO: enviar el error a la infraestructura de registro remoto
      console.error(error);

      // TODO: mejor trabajo de transformación de errores para el consumo del usuario
      this.log(`${operation} fallido: ${error.message}`);

      // Deja que la aplicación siga funcionando devolviendo un resultado vacío.
      return of(result as T);
    };
  }

  // tslint:disable-next-line: typedef
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

}
