import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VolunteerManagementModule } from './volunteer-management/volunteer-management.module';
import { HttpClientModule } from "@angular/common/http";
import { Route, RouterModule } from '@angular/router';
import { VolunteerListComponent } from './volunteer-management/volunteer-list/volunteer-list.component';
import { SchedulingCComponent } from './scheduling/scheduling-c/scheduling-c.component';
import { SchedulingModule } from './scheduling/scheduling.module';

const ROUTES: Route[]=[
  {path:"volunteer-management",component:VolunteerListComponent},
  {path:"scheduling",component:SchedulingCComponent}
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,VolunteerManagementModule,SchedulingModule, HttpClientModule,RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
