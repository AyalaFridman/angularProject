import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {

  private _volunteer: Volunteer;
  volunteerForm: FormGroup = new FormGroup({});
  volunteerList: Volunteer[] = [];
  router: any;
  constructor(private vs: VolunteerService, private _acr: ActivatedRoute, private router1: Router) {
    this._volunteer = JSON.parse(this._acr.snapshot.paramMap.get('volunteer') ?? '');
    console.log(this._volunteer);
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

  }

  ngOnInit(): void {

  }
  public get volunteer(): Volunteer | undefined {
    return this._volunteer;
  }

  get days(): FormArray {
    return this.volunteerForm.get('days') as FormArray;
  }
  saveDetials = () => {
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
