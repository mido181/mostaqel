import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [HeadlineComponent],
  imports: [CommonModule],
  exports: [
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgbModule,
    HeadlineComponent,
  ],
})
export class SharedModule {}
