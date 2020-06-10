import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CreateconversationpagePage } from "./createconversationpage";
import { RlTagInputModule } from "angular2-tag-input";
@NgModule({
  declarations: [CreateconversationpagePage],
  imports: [
    IonicPageModule.forChild(CreateconversationpagePage),
    RlTagInputModule,
  ],
  exports: [CreateconversationpagePage],
})
export class CreateconversationpagePageModule {}
