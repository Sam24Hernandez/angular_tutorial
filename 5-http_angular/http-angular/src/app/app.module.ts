// Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';

// Módulos secundarios y servicios
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

// Componentes principales y servicios globales
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { UploaderComponent } from './uploader/uploader.component';
import { MessagesComponent } from './messages/messages.component';
import { PackageSearchComponent } from './package-search/package-search.component';

import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // importar HttpClientModule después de BrowserModule
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Mi-Xsrf-Cookie',
      headerName: 'Mi-Xsrf-Header',
    }),

    // El módulo HttpClientInMemoryWebApiModule intercepta las peticiones HTTP
    // y devuelve respuestas simuladas del servidor.
    // Elimínalo cuando un servidor real esté listo para recibir solicitudes.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // entidad de retorno después de PUT/actualización
      }
    )
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    HeroesComponent,
    DownloaderComponent,
    UploaderComponent,
    MessagesComponent,
    PackageSearchComponent
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    {
      provide: RequestCache,
      useClass: RequestCacheWithMap
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
