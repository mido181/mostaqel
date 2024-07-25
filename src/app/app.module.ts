import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './Modules/shared/shared.module';
import { TokenInterceptorsService } from './service/interceptor.service';
import { GetlengthDirective } from './diractives/getlength.directive';
import { StickyNavbarDirective } from './diractives/sticky-navbar.directive';
import { OverflowDirective } from './diractives/overflow.directive';
import { LastnameshorterPipe } from './pipe/lastnameshorter.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorsService,
      multi: true,
    },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
