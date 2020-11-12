import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  @ViewChild('bindingInput') bindingInput: ElementRef;

  isUnchanged = true;

  getHTMLAttributeValue(): any {
    console.warn('Valor del atributo HTML: ' + this.bindingInput.nativeElement.getAttribute('value'));
  }

  getDOMPropertyValue(): any {
    console.warn('Valor de la propiedad del DOM: ' + this.bindingInput.nativeElement.value);
  }

  working(): any {
    console.warn('¡El Botón de Prueba funciona!');
  }

  toggleDisabled(): any {
    const testButton = document.getElementById('testButton') as HTMLInputElement;

    testButton.disabled = !testButton.disabled;
    console.warn(testButton.disabled);
  }

}
