import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/Modules/shared/shared.module';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [OfferComponent],
  imports: [OfferRoutingModule,SharedModule,CommonModule],
})
export class OfferModule {}
