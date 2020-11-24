import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** Componentes */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CrearArticuloComponent } from './pages/crear-articulo/crear-articulo.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: 'articulos',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'crear-articulo', component: CrearArticuloComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
