import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditproartistpagPage } from './editproartistpag';

@NgModule({
  declarations: [
    EditproartistpagPage,
  ],
  imports: [
    IonicPageModule.forChild(EditproartistpagPage),
  ],
  exports:[
    EditproartistpagPage
  ]
})
export class EditproartistpagPageModule {}
