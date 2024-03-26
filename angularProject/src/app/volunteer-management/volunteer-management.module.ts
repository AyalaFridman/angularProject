import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerService } from './volunteer.service';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VolunteerListComponent,VolunteerDetailsComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  providers:[
    VolunteerService
  ],
  exports: [
    VolunteerListComponent
  ]
})
export class VolunteerManagementModule { }
