import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { NgModel } from '@angular/forms';
import { VolunteerService } from '../volunteer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent {

  constructor(private vs: VolunteerService,private router:Router) {
    vs.get().subscribe(data => {
      this.volunteerList = data;
      console.log(this.volunteerList);
    });
  }
  ngOnInit(): void {
  }
  
  selectVolunteer?: Volunteer;
  volunteerList: Volunteer[] = [];

  editVolunteer = (v: Volunteer) => {
    this.router.navigate(['/volunteerDetial',{volunteer:JSON.stringify(v)}]);
    // this.selectVolunteer = v;
  }
  saveVolunteer=(v: Volunteer)=>{
    this.vs.save(v).subscribe(data=>{
      this.volunteerList=data;
    });
  }
}
