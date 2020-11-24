/** Módulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
/** Componentes principales */
import { AppComponent } from './app.component';
// TODO: Separar los componentes del shared en módulos divididos
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
// TODO: Separar los componentes del pages en módulos divididos
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CrearArticuloComponent } from './pages/crear-articulo/crear-articulo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ArticlesModule } from './articles/articles.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    BlogComponent,
    CrearArticuloComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
