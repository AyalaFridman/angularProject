import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { NgModel } from '@angular/forms';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent {

  constructor(private vs: VolunteerService) {
    vs.get().subscribe(data => {
      console.log("hhhhh");
      this.volunteerList = data;
      console.log(this.volunteerList);
    });
  }
  ngOnInit(): void {
  }
  
  selectVolunteer?: Volunteer;
  volunteerList: Volunteer[] = [];
  editVolunteer = (v: Volunteer) => {
    this.selectVolunteer = v;
  }
}
