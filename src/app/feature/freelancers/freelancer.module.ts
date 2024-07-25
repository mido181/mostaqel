import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/Modules/shared/shared.module';

import { FreelancerRoutingModule } from './freelancer-routing.module';
import { FreelancersComponent } from './freelancers.component';

@NgModule({
  declarations: [FreelancersComponent],
  imports: [CommonModule,FreelancerRoutingModule,SharedModule],
})
export class FreelancerModule {
constructor(){}

}