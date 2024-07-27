import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { SharedModule } from 'src/app/Modules/shared/shared.module';
import { notificationsRoutingModule } from './notifications-routing.module';



@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    notificationsRoutingModule,
    SharedModule
  ]
})
export class NotificationsModule { }
