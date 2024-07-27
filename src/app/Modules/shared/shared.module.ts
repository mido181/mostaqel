import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeadlineComponent } from './headline/headline.component';
import { FilterByserviceComponent } from './filter-byservice/filter-byservice.component';
import { LastnameshorterPipe } from 'src/app/pipe/lastnameshorter.pipe';
import { OffertemplateComponent } from './offertemplate/offertemplate.component';
import { RouterModule } from '@angular/router';
import { EmptyContainerComponent } from './empty-container/empty-container.component';

@NgModule({
  declarations: [HeadlineComponent,LastnameshorterPipe, OffertemplateComponent,FilterByserviceComponent, EmptyContainerComponent],
  imports: [CommonModule,MatIconModule,RouterModule],
  exports: [
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgbModule,
    HeadlineComponent,
    LastnameshorterPipe,
    OffertemplateComponent,
    FilterByserviceComponent,
    EmptyContainerComponent
  ],
})
export class SharedModule {}
