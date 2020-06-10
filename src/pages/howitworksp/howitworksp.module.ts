import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowitworkspPage } from './howitworksp';

@NgModule({
  declarations: [
    HowitworkspPage,
  ],
  imports: [
    IonicPageModule.forChild(HowitworkspPage),
  ],  exports: [
    HowitworkspPage,
    
]
})
export class HowitworkspPageModule {}
