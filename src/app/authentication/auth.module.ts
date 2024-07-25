import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [CommonModule, AuthRoutingModule,ReactiveFormsModule],
})
export class AuthModule {}
