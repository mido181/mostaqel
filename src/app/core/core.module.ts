import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../Modules/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent],

  imports: [BrowserModule, CommonModule, SharedModule, AppRoutingModule],
  exports: [HomeComponent, NavbarComponent, AppRoutingModule],
})
export class CoreModule {}
