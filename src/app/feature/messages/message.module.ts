import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageRoutingModule } from './message-routing.module';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [MessagesComponent],
  imports: [CommonModule, MessageRoutingModule],
})
export class MessageModule {}
