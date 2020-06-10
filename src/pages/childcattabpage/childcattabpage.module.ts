import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildcattabpagePage } from './childcattabpage';

@NgModule({
  declarations: [
    ChildcattabpagePage,
  ],
  imports: [
    IonicPageModule.forChild(ChildcattabpagePage),
  ],
  exports:[
    ChildcattabpagePage
  ]
})
export class ChildcattabpagePageModule {}
