import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionspPage } from './competitionsp';

@NgModule({
  declarations: [
    CompetitionspPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionspPage),
  ],
  exports: [
    CompetitionspPage
]
})
export class CompetitionspPageModule {}
