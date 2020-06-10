import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategorytabpagePage } from './categorytabpage';

@NgModule({
  declarations: [
    CategorytabpagePage,
  ],
  imports: [
    IonicPageModule.forChild(CategorytabpagePage),
  ],
  exports: [
    CategorytabpagePage
]
})
export class CategorytabpagePageModule {}
