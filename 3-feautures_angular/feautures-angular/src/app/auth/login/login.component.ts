import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  // tslint:disable-next-line: typedef
  setMessage() {
    this.message = 'Estado ' + (this.authService.isLoggedIn ? 'conectado' : 'desconectado');
  }

  // tslint:disable-next-line: typedef
  login() {
    this.message = 'Tratando de conectarlo en el sistema...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Por lo general, se usaría la URL de redireccionamiento del servicio de autorización.
        // Sin embargo para mantener el ejemplo simple, siempre redirigiremos a "ADMIN".
        const redirectUrl = '/admin';

        // Poner nuestro objeto de navegación extra
        // que transmite nuestros parámetros de consulta global y fragmento
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // redirect al usuario
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
