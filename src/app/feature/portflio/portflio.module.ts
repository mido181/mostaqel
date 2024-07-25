import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddWorkComponent } from './add-work/add-work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import {
  PersonalDetailsComponent,
} from './personal-details/personal-details.component';
import { PortflioPageComponent } from './portflio-page/portflio-page.component';
import { PortflioRoutingModule } from './portflio-routing.module';
import { PortflioComponent } from './portflio/portflio.component';

@NgModule({
  declarations: [
    PortflioPageComponent,
    PersonalDetailsComponent,
    EditProfileComponent,
    MyinfoComponent,
    DashboardComponent,
    PortflioComponent,
    AddWorkComponent,
  ],
  imports: [CommonModule, PortflioRoutingModule],
})
export class PortflioModule {}
