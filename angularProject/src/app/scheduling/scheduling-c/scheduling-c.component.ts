import { Component, OnInit } from '@angular/core';
import { Days } from '../days.model';
import { SchedulingrService } from '../scheduling.service';

@Component({
  selector: 'app-scheduling-c',
  templateUrl: './scheduling-c.component.html',
  styleUrls: ['./scheduling-c.component.css']
})
export class SchedulingCComponent implements OnInit {

  days: Days[] = [];
  weak: string[] = ["sunday", "monday", "tusdat", "worthdat", "tursday", "fday"];

  constructor(private ss: SchedulingrService) {
    this.ss.getDays().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.days[i] = new Days();
        this.days[i].id=data[i];
        this.ss.getVolunteer(i).subscribe(data => {
          this.days[i].volunteerList = data;
          console.log(this.days[i]);
        })
      }
    });
  }

  ngOnInit(): void {

  };

}
