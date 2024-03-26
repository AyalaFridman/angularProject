import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Volunteer } from '../volunteer.model';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {

  private _volunteer?: Volunteer;
  volunteerForm: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
  }
  public get volunteer():Volunteer|undefined{
    return this._volunteer;
  }
  @Input()
  public set volunteer(value: Volunteer | undefined) {
    this._volunteer = value;
    if (value) {
    console.log("hjkl;");
      this.volunteerForm = new FormGroup({
        "id": new FormControl(this._volunteer?.id),
        "firstName": new FormControl(this._volunteer?.firstName),
        "lastName": new FormControl(this._volunteer?.lastName),
        "phone": new FormControl(this._volunteer?.phone),
        "address": new FormControl(this._volunteer?.address),
        "days":new FormControl(this._volunteer?.days)
      })
    }
  }

}
