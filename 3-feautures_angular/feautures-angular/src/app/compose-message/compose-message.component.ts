import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent {
  details: string;
  message: string;
  sending = false;

  constructor(private router: Router) { }

  // tslint:disable-next-line: typedef
  send() {
    this.sending = true;
    this.details = 'Enviando mensaje...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.closePopup();
  }

  // tslint:disable-next-line: typedef
  closePopup() {
    // Proporcionando un valor "nulo" a la salida nombrada
    // limpia el contenido de la salida nombrada
    this.router.navigate([{outlets: {popup: null}}]);
  }


}
