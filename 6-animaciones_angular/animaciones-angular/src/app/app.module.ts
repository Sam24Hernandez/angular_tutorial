// Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Componentes principales
import { AppComponent } from './app.component';
import { OpenClosePageComponent } from './open-close-page/open-close-page.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { StatusSliderPageComponent } from './status-slider-page/status-slider-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { StatusSliderComponent } from './status-slider/status-slider.component';
import { ToggleAnimationsPageComponent } from './toggle-animations-page/toggle-animations-page.component';
import { OpenCloseToggleComponent } from './open-close-toggle/open-close-toggle.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto-page/hero-list-auto-page.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { HeroListGroupsComponent } from './hero-list-groups/hero-list-groups.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'open-close', component: OpenClosePageComponent },
      { path: 'status', component: StatusSliderPageComponent },
      { path: 'toggle', component: ToggleAnimationsPageComponent },
      { path: 'heroes', component: HeroListPageComponent, data: {animation: 'FilterPage'} },
      { path: 'hero-groups', component: HeroListGroupPageComponent },
      { path: 'auto', component: HeroListAutoCalcPageComponent },
      { path: 'insert-remove', component: InsertRemoveComponent},
      { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} }
    ])
  ],
  declarations: [
    AppComponent,
    OpenCloseComponent,
    OpenCloseToggleComponent,
    OpenClosePageComponent,
    StatusSliderPageComponent,
    StatusSliderComponent,  
    ToggleAnimationsPageComponent,
    HeroListPageComponent,
    HeroListGroupsComponent,
    HeroListGroupPageComponent,
    HeroListAutoCalcPageComponent,
    HeroListAutoComponent,
    HomeComponent,
    AboutComponent,
    InsertRemoveComponent    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
