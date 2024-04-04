import { Component, OnInit } from '@angular/core';
// import { Days } from '../days.model';
import { SchedulingrService } from '../scheduling.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from 'src/app/volunteer-management/volunteer.model';
import { VolunteerService } from 'src/app/volunteer-management/volunteer.service';

@Component({
  selector: 'app-scheduling-c',
  templateUrl: './scheduling-c.component.html',
  styleUrls: ['./scheduling-c.component.css']
})
export class SchedulingCComponent {

  days:number[]=[];
  listVolunteer: Volunteer[] = [];
  weak: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  schedulingForm: FormGroup = new FormGroup({});
  constructor(private ss: SchedulingrService, private vs: VolunteerService) {
    console.log("in cons");
    this.ss.getDays().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        // this.days[i] = new Days();
        this.days = data;
        // this.ss.getVolunteer(i).subscribe(data => {
        //   console.log(data)
        // this.days[i].volunteerList = data;
        // })
        this.vs.get().subscribe(data => {
          this.listVolunteer = data;
        }
        )
      }
      console.log(this.days);
      this.schedulingForm = new FormGroup({
        volunteers: new FormArray([
         new FormControl(this.days[0]),
         new FormControl(this.days[1]),
         new FormControl(this.days[2]),
         new FormControl(this.days[3]),
         new FormControl(this.days[4]),
         new FormControl(this.days[5])
        ])
      })
    });

  }
  get volunteers(): FormArray {
    return this.schedulingForm.get('volunteers') as FormArray;
  }
  saveSheduling() {
    console.log(this.volunteers.value);
    this.ss.save(this.volunteers.value).subscribe(data=>{
      this.days=data;
    });
    alert("✅the scheduling is saved✅");
  }

  volunteersForDay(day: number) {
    return this.listVolunteer.filter(v => v.days[day] == true);
  }
  // allDayIsDan(days: number[]): boolean {
  //   for (let index = 0; index < days.length; index++) {
  //     if (days[index] == null) {
  //       return false
  //     }
  //   }
  //   return true;
  // }
}
