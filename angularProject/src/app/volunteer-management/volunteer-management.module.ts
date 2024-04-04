import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerService } from './volunteer.service';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

const V_ROUTES: Route[]=[
{path:"volunteer-management/volunteerDetial",component:VolunteerDetailsComponent},
{path:"volunteer-management/volunteerDetial/:id",component:VolunteerDetailsComponent}
]

@NgModule({
  declarations: [
    VolunteerListComponent,VolunteerDetailsComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule.forChild(V_ROUTES)
  ],
  providers:[
    VolunteerService
  ],
  exports: [
    VolunteerListComponent
  ]
})
export class VolunteerManagementModule { }
