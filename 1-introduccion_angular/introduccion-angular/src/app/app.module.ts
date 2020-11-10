// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// Enrutamiento
import { AppRoutingModule } from './app-routing.module';
// Componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

// Clase del Módulo Raíz
@NgModule({
  /**
   * Propiedades más importantes de @NgModule()
   */
  // Los componentes, directivas y tuberías(pipes) que pertencen a este NgModule
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    MessagesComponent
  ],
  // Otros módulos cuyas clases exportadas son necesarias por las platillas de componentes declaradas en este NgModule
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
  // Creadores de servicios que este NgModule contribuye a la colección global de servicios
  providers: [],
  // La vista principal de la aplicación, llamada Componente Raíz
  bootstrap: [AppComponent]
})
export class AppModule { }
