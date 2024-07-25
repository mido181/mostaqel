import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { IsAllowGuard } from './guards/is-admin.guard';
import { DashboardGuardService } from './service/dashboard-guard.service';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';
import { PageNotFoundComponent } from './feature/not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,
   canActivate: [HomeGuard]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./authentication/auth.module').then((m) => m.AuthModule),
    data:{role:["none"]},
       canActivate: [IsAllowGuard], 
      
  },
  {
    path: 'addproject',
    data:{role:["client" ,"none"]},
       canActivate: [IsAllowGuard], 
      
    loadChildren: () =>
      import('./feature/addproject/addproject.module').then(
        (m) => m.AddprojectModule
      ),
  },

  {
    path: 'freelancers',
    data:{role:["client",'none']},
    canActivate: [IsAllowGuard], 
    loadChildren: () =>
      import('./feature/freelancers/freelancer.module').then(
        (m) => m.FreelancerModule
      ),
  },
  {
    path: 'dashboard',
         data:{role:['freelancer','client']},
       canActivate: [IsAllowGuard], 
      //canActivate: [DashboardGuardService], //if login can acssess this module
    loadChildren: () =>
      import('./feature/portflio/portflio.module').then(
        (m) => m.PortflioModule
      ),
  },

  {
    path: 'projects',
    loadChildren:()=> import('./feature/projects/projects.module').then((m) => m.ProjectsModule)
  },
  {
    path: 'offer',
    data:{role:['freelancer']},
    canActivate: [IsAllowGuard], 
    loadChildren: () =>
      import('./feature/offer/offer.module').then((m) => m.OfferModule),
  },

  {
    path: 'profile',
    data:{role:['freelancer','client']},
    canActivate: [IsAllowGuard], 
    loadChildren: () =>
      import('./feature/portflio/portflio.module').then(
        (m) => m.PortflioModule
      ),
  },
  {
    path: 'messages',
    data:{role:['freelancer','client']},
    canActivate: [IsAllowGuard],  
    loadChildren: () =>
      import('./feature/messages/message.module').then((m) => m.MessageModule),
  },

  {
    path: '**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
