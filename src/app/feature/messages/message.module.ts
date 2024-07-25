import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageRoutingModule } from './message-routing.module';
import { MessagesComponent } from './messages.component';
import { SharedModule } from "../../Modules/shared/shared.module";

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessageRoutingModule, SharedModule],
})
export class MessageModule {}
