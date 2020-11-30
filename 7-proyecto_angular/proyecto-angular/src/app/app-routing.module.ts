import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Módulos
// import { PagesRoutingModule } from './pages/pages.routing';

import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/** Articulo */
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { CrushDetailComponent } from './pages/crush-detail/crush-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'crush/:id', component: CrushDetailComponent },
  { path: 'articulo/:id', component: ArticleDetailComponent },
  {path: 'buscador', component: SearchComponent },
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
