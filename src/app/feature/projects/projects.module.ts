import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectpageComponent } from './projectpage.component';
import { ProjectsComponent } from './project/projects.component';
import { AddporposelComponent } from './addporposel/addporposel.component';
import { SharedModule } from '../../Modules/shared/shared.module';


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
