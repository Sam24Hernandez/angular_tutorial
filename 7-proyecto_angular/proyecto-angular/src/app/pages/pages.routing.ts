import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
/** Componentes */
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent,
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
