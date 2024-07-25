import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/Modules/shared/shared.module';

import { AddprojectRoutingModule } from './addproject-routing.module';
import { AddprojectComponent } from './addproject.component';
import { GetlengthDirective } from 'src/app/diractives/getlength.directive';
  
@NgModule({
  declarations: [AddprojectComponent,GetlengthDirective],
  imports: [CommonModule, AddprojectRoutingModule, SharedModule],
})
export class AddprojectModule {}
