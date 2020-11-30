/** Módulos Raíz */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

/** Routing de Navegación */
import { AppRoutingModule } from './app-routing.module';

/** Componentes principales */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { SliderComponent } from './shared/slider/slider.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { SearchComponent } from './pages/search/search.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { CrushDetailComponent } from './pages/crush-detail/crush-detail.component';

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
    ContactoComponent,
    /* 404 */
    PageNotFoundComponent,
    ArticlesComponent,
    ArticleDetailComponent,
    SearchComponent,
    AcercaComponent,
    MessagesComponent,
    CrushDetailComponent
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
    ),
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
