import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecuritypanelPage } from './securitypanel';

@NgModule({
  declarations: [
    SecuritypanelPage,
  ],
  imports: [
    IonicPageModule.forChild(SecuritypanelPage),
  ],
  exports: [
    SecuritypanelPage
]
})
export class SecuritypanelPageModule {}
