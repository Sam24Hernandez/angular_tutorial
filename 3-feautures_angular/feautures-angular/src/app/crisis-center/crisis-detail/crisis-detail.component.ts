import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Crisis } from '../crisis';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.data
      .subscribe((data: {crisis: Crisis}) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });
  }

  // tslint:disable-next-line: typedef
    cancel() {
    this.gotoCrises();
  }

  // tslint:disable-next-line: typedef
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Permitir la navegación sincrónica (`verdadera`) si no hay crisis o la crisis no cambia
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // De lo contrario, pregunte al usuario con el servicio de diálogo y devuelva su
    // observable que se resuelve a verdadero o falso cuando el usuario decide
    return this.dialogService.confirm('¿Descartar cambios?');
  }

  // tslint:disable-next-line: typedef
  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pasa la identificación de la crisis si está disponible
    // para que el componente de la lista de crisis pueda seleccionar esa crisis.
    // Agrega un parámetro `foo` totalmente inútil para las patadas.
    // Navegación relativa a las crisis
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}
