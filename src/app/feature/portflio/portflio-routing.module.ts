import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AddWorkComponent } from './add-work/add-work.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { PortflioPageComponent } from './portflio-page/portflio-page.component';
import { PortflioComponent } from './portflio/portflio.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  {
    path: '',
    component: PortflioComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'myinfo', component: MyinfoComponent },
       { path: 'moc', component: PersonalDetailsComponent },
      { path: 'editprofile', component: EditProfileComponent },
      { path: 'myprojects', component: PortflioPageComponent },
      { path: 'addproject', component: AddWorkComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortflioRoutingModule {}
