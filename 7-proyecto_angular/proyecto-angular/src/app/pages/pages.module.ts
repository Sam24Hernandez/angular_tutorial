import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Router */
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

/** Shared Module */
import { SharedModule } from '../shared/shared.module';

/** Componentes del Pages */
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { ArticlesComponent } from './articles/articles.component';
import { CrushDetailComponent } from './crush-detail/crush-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    BlogComponent,
    ContactoComponent,
    SearchComponent,
    AcercaComponent,
    MessagesComponent,
    CrushDetailComponent,
    ArticlesComponent,
    PagesComponent
  ],
  exports: [
    HomeComponent,
    BlogComponent,
    ContactoComponent,
    SearchComponent,
    AcercaComponent,
    MessagesComponent,
    CrushDetailComponent,
    ArticlesComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MomentModule,
    HttpClientModule
  ]
})
export class PagesModule { }
