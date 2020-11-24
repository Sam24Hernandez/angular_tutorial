import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** Componentes */
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

const articlesRoutes: Routes = [
  { path: 'articulos', redirectTo: '/home' },
  { path: 'articulos', component: ArticleListComponent },
  { path: 'articulo/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
