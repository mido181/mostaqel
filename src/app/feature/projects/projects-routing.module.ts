import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectpageComponent } from './projectpage.component';
import { AddporposelComponent } from 'src/app/feature/projects/addporposel/addporposel.component';

const routes: Routes = [
  {path:"",component:ProjectpageComponent},
  {path:"porposel", component:AddporposelComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
