import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ValidatingFormComponent } from './validating-form/validating-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    ValidatingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
