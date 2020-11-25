/** Módulos Raíz */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

/** Routing de Navegación */
import { AppRoutingModule } from './app-routing.module';
// import { PagesModule } from './pages/pages.module';

/** Componentes principales */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CrearArticuloComponent } from './pages/crear-articulo/crear-articulo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    /** Componentes del Shared */
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    /** Componentes del Pages */
    HomeComponent,
    BlogComponent,
    CrearArticuloComponent,
    ContactoComponent,
    /* 404 */
    PageNotFoundComponent,
    ArticlesComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // El módulo HttpClientInMemoryWebApiModule intercepta las peticiones HTTP
    // y devuelve respuestas simuladas del servidor.
    // Elimínalo cuando un servidor real esté listo para recibir solicitudes.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
