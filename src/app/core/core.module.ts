import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../Modules/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StickyNavbarDirective } from '../diractives/sticky-navbar.directive';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [NavbarComponent, HomeComponent,StickyNavbarDirective, FooterComponent],

  imports: [BrowserModule, CommonModule, SharedModule, AppRoutingModule],
  exports: [HomeComponent, NavbarComponent, AppRoutingModule,FooterComponent],
})
export class CoreModule {}
