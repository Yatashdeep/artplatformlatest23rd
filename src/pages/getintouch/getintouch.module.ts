import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetintouchPage } from './getintouch';

@NgModule({
  declarations: [
    GetintouchPage,
  ],
  imports: [
    IonicPageModule.forChild(GetintouchPage),
  ],
  exports:[
    GetintouchPage
  ]
})
export class GetintouchPageModule {}
