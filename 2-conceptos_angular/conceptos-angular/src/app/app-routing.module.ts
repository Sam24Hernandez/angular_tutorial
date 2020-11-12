import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesComponent } from './pipes/pipes.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingComponent } from './binding/binding.component';
import { ElementosComponent } from './elementos/elementos.component';
import { TwoBindingComponent } from './two-binding/two-binding.component';
import { DirectivaComponent } from './directiva/directiva.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'interpolacion', component: InterpolacionComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'data-binding', component: BindingComponent },
  { path: 'elementos', component: ElementosComponent },
  { path: 'two-binding', component: TwoBindingComponent },
  { path: 'directivas', component: DirectivaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
