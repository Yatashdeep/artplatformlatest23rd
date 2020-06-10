import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoaderdataComponent } from './loaderdata';
 
@NgModule({
declarations: [
    LoaderdataComponent,
],
imports: [
    IonicPageModule.forChild(LoaderdataComponent),
],
exports: [
    LoaderdataComponent
]
})
export class LoaderdataComponentModule {}