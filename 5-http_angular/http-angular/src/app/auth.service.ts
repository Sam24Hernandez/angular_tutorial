import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  // tslint:disable-next-line: typedef
  getAuthorizationToken() {
    return 'some-auth-token';
  }
}
