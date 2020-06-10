import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { StarRatingModule } from 'ionic3-star-rating';
import{LoaderdataComponent}from'../../components/loaderdata/loaderdata'
@NgModule({
  declarations: [
    DashboardPage,
    
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    StarRatingModule,
   
  ],
  exports: [
    DashboardPage,
    
]
})
export class DashboardPageModule {}
