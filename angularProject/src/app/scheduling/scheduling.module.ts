import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingCComponent } from './scheduling-c/scheduling-c.component';
import { SchedulingrService } from './scheduling.service';



@NgModule({
  declarations: [
    SchedulingCComponent
  ],
  imports: [
    CommonModule,
  ],
  providers:[
    SchedulingrService
  ],
  // exports: [
  //   SchedulingCComponent
  // ]
})
export class SchedulingModule { }
