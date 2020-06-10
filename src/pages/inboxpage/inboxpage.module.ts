import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxpagePage } from './inboxpage';

@NgModule({
  declarations: [
    InboxpagePage,
  ],
  imports: [
    IonicPageModule.forChild(InboxpagePage),
  ],
  exports:[
    InboxpagePage
  ]
})
export class InboxpagePageModule {}
