import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtprofilePage } from './artprofile';
import { StarRatingModule } from 'ionic3-star-rating';
@NgModule({
  declarations: [
    ArtprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(ArtprofilePage),
    StarRatingModule
  ],
  exports: [
    ArtprofilePage
]
})
export class ArtprofilePageModule {}
