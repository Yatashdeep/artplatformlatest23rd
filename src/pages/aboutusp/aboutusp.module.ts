import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutuspPage } from './aboutusp';

@NgModule({
  declarations: [
    AboutuspPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutuspPage),
  ],
  exports: [
    AboutuspPage,
    
]
})
export class AboutuspPageModule {}
