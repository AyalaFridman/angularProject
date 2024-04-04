import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulingrService } from 'src/app/scheduling/scheduling.service';
// import { Days } from 'src/app/scheduling/days.model';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {

  private _volunteer: Volunteer | undefined;
  volunteerForm: FormGroup = new FormGroup({});
  volunteerList: Volunteer[] = [];
  day:number[]=[];
  constructor(private vs: VolunteerService, private _acr: ActivatedRoute, private router1: Router, private sl: SchedulingrService) {
    this.vs.getById(+(this._acr.snapshot.paramMap.get('id') ?? '')).subscribe(data=>{
      this._volunteer=data;
    if (this._volunteer) {
      this.volunteerForm = new FormGroup({
        "id": new FormControl(this._volunteer?.id),
        "firstName": new FormControl(this._volunteer?.firstName),
        "lastName": new FormControl(this._volunteer?.lastName),
        "phone": new FormControl(this._volunteer?.phone),
        "address": new FormControl(this._volunteer?.address),
        "days": new FormArray(this._volunteer?.days.map(day => new FormControl(day)))
      });
    }
    this.sl.getDays().subscribe(data => {
      this.day = data;
    }
    )
  });
  }

  ngOnInit(): void {

  }
  public get volunteer(): Volunteer | undefined {
    return this._volunteer;
  }

  get days(): FormArray {
    return this.volunteerForm.get('days') as FormArray;
  }
  saveDetials = (): void => {
    for (let i = 0; i < this.volunteerForm.value.days.length; i++) {
      if (this.volunteerForm.value.days[i] == false && this.volunteerForm.value.days[i] != this._volunteer?.days[i]) {
          if (this.day[i] == this.volunteerForm.value.id) {
            alert("eror");
            return;
          }
      }
    }
    console.log("change volunteer")
    this.vs.save(this.volunteerForm.value).subscribe(data => {
      this.volunteerList = data;
      this.router1.navigate(["volunteer-management"]);
    })
  }

  // @Input()
  // public set volunteer(value: Volunteer | undefined) {
  //   this._volunteer = value;
  //   if (value) {
  //     this.volunteerForm = new FormGroup({
  //       "id": new FormControl(this._volunteer?.id),
  //       "firstName": new FormControl(this._volunteer?.firstName),
  //       "lastName": new FormControl(this._volunteer?.lastName),
  //       "phone": new FormControl(this._volunteer?.phone),
  //       "address": new FormControl(this._volunteer?.address),
  //       "days": new FormControl(this._volunteer?.days)
  //     })
  //   }
  // }

  // @Output()
  // onSaveVolunteer: EventEmitter<Volunteer> = new EventEmitter();

  // saveDetials = () => {
  //   this._volunteer = this.volunteerForm.value;
  //   console.log(this._volunteer)
  //   this.onSaveVolunteer.emit(this.volunteer);
  // }

}
