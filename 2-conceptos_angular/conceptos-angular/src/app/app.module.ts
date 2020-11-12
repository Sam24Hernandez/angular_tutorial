import { ItemSwitchComponents } from './item-switch.component';
// Módulos
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Enrutamiento
import { AppRoutingModule } from './app-routing.module';

// Componentes principales
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
// Otros componentes
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PipesComponent } from './pipes/pipes.component';
import { ElementosComponent } from './elementos/elementos.component';
import { HeroBirthdayComponent } from './hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2.component';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { HeroListComponent } from './hero-list.component';
import { BindingComponent } from './binding/binding.component';
import { CompWithHostBindingComponent } from './comp-with-host-binding.component';
import { TwoBindingComponent } from './two-binding/two-binding.component';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    PipesComponent,
    BindingComponent,
    ElementosComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    HeroListComponent,
    FetchJsonPipe,
    ExponentialStrengthPipe,
    CompWithHostBindingComponent,
    TwoBindingComponent,
    SizerComponent,
    DirectivaComponent,
    ItemDetailComponent,
    ItemSwitchComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
