import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddprojectComponent } from './addproject.component';

const routes: Routes = [{ path: '', component: AddprojectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddprojectRoutingModule {}
