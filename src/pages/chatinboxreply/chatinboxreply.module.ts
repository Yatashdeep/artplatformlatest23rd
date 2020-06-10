import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatinboxreplyPage } from './chatinboxreply';

@NgModule({
  declarations: [
    ChatinboxreplyPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatinboxreplyPage),
  ],
  exports:
  [
    ChatinboxreplyPage
  ]
})
export class ChatinboxreplyPageModule {}
