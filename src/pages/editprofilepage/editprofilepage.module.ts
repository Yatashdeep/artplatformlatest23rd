import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditprofilepagePage } from './editprofilepage';

@NgModule({
  declarations: [
    EditprofilepagePage,
  ],
  imports: [
    IonicPageModule.forChild(EditprofilepagePage),
  ],
  exports:[
    EditprofilepagePage
  ]
})
export class EditprofilepagePageModule {}
