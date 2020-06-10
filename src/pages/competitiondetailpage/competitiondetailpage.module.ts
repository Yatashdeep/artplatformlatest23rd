import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitiondetailpagePage } from './competitiondetailpage';

@NgModule({
  declarations: [
    CompetitiondetailpagePage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitiondetailpagePage),
  ],
  exports:[
    CompetitiondetailpagePage
  ]
})
export class CompetitiondetailpagePageModule {}
