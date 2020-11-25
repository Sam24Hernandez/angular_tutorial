import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Módulos
// import { PagesRoutingModule } from './pages/pages.routing';

import { HomeComponent } from './pages/home/home.component';
import { CrearArticuloComponent } from './pages/crear-articulo/crear-articulo.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/** Articulo */
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'crear-articulo', component: CrearArticuloComponent },
  { path: 'articulo/:id', component: ArticleDetailComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
