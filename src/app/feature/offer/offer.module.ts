import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/Modules/shared/shared.module';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';

@NgModule({
  declarations: [OfferComponent],
  imports: [OfferRoutingModule, SharedModule],
})
export class OfferModule {}
