import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubcattabpPage } from './subcattabp';

@NgModule({
  declarations: [
    SubcattabpPage,
  ],
  imports: [
    IonicPageModule.forChild(SubcattabpPage),
  ],
  exports:[
    SubcattabpPage
  ]
})
export class SubcattabpPageModule {}
