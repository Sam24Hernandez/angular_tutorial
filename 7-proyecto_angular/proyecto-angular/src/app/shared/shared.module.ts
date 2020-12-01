import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

/** Componentes del Shared */
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MomentModule
  ]
})
export class SharedModule { }
