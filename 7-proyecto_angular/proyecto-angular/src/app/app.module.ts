/** Módulos Raíz */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

/** Routing de Navegación & Módulos */
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

/** Componentes principales */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    /* 404 */
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PagesModule,
    MomentModule,
    HttpClientModule,
    // El módulo HttpClientInMemoryWebApiModule intercepta las peticiones HTTP
    // y devuelve respuestas simuladas del servidor.
    // Elimínalo cuando un servidor real esté listo para recibir solicitudes.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
