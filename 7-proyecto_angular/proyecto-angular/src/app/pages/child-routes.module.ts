import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** Componentes */
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SearchComponent } from './search/search.component';
import { ArticlesComponent } from './articles/articles.component';
import { CrushDetailComponent } from './crush-detail/crush-detail.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Angular' } },
  { path: 'blog', component: BlogComponent, data: { title: 'Blog' } },
  { path: 'acerca', component: AcercaComponent, data: { title: 'Acerca de' } },
  { path: 'contacto', component: ContactoComponent, data: { title: 'Contacto' } },
  { path: 'buscador', component: SearchComponent, data: { title: 'Buscador' } },
  { path: 'articulo/:id', component: ArticlesComponent },
  { path: 'crush/:id', component: CrushDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule {}
