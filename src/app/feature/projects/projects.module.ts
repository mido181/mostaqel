import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectpageComponent } from './projectpage.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { FilterByserviceComponent } from '../../Modules/shared/filter-byservice/filter-byservice.component';
import { ProjectsComponent } from './project/projects.component';
import { AddporposelComponent } from './addporposel/addporposel.component';


@NgModule({
  declarations: [
    ProjectpageComponent,
    ProjectsComponent,
    AddporposelComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
