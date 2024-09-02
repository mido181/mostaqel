import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LastnameshorterPipe} from '../../pipe/lastnameshorter.pipe';
import { HeadlineComponent } from './headline/headline.component';
import { FilterByserviceComponent } from './filter-byservice/filter-byservice.component';
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
    OffertemplateComponent,
    FilterByserviceComponent,
    LastnameshorterPipe,
    EmptyContainerComponent

  ],
})
export class SharedModule {}
