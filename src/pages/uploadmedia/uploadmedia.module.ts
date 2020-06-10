import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadmediaPage } from './uploadmedia';

@NgModule({
  declarations: [
    UploadmediaPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadmediaPage),
  ],
  exports: [
    UploadmediaPage
]
})
export class UploadmediaPageModule {}
