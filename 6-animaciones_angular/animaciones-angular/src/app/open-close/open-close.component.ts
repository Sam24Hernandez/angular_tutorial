import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent {
  @Input() logging = false;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  onAnimationEvent( event: AnimationEvent ) {
    if (!this.logging) {
      return;
    }
    // openClose es el nombre del disparador en este ejemplo
    console.warn(`Disparador de la animación: ${event.triggerName}`);

    // phaseName se inicia o se ejecuta
    console.warn(`Fase: ${event.phaseName}`);

    // En el ejemplo, el tiempo total es de 1000 o 1 segundo.
    console.warn(`Tiempo total: ${event.totalTime}`);

    // En el ejemplo, fromState está abierto o cerrado...
    console.warn(`De: ${event.fromState}`);

    // en nuestro ejemplo, toState está abierto o cerrado
    console.warn(`Para: ${event.toState}`);

    // el propio elemento HTML, el botón en este caso
    console.warn(`Elemento: ${event.element}`);
  }

}
