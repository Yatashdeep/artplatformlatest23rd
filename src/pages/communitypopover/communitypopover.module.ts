import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunitypopoverPage } from './communitypopover';

@NgModule({
  declarations: [
    CommunitypopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunitypopoverPage),
  ],
  exports:[
    CommunitypopoverPage
  ]
})
export class CommunitypopoverPageModule {}
