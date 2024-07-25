import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/Modules/shared/shared.module';

import { AddprojectRoutingModule } from './addproject-routing.module';
import { AddprojectComponent } from './addproject.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddprojectComponent],
  imports: [CommonModule, AddprojectRoutingModule, SharedModule],
})
export class AddprojectModule {}
