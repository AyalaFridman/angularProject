import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import { Days } from "./days.model";
import { Volunteer } from "../volunteer-management/volunteer.model";
import { VolunteerService } from "../volunteer-management/volunteer.service";

@Injectable()
export class SchedulingrService {
    constructor(private _http:HttpClient) {

    }
    volunteerList: Volunteer[] = [];
    getDays = (): Observable<number[]> => {
        return this._http.get<number[]>("api/SchedulingControler");
    }
    save = (s: number[]): Observable<number[]> => {
        console.log("in services") ;
        console.log(s);
        return this._http.post<number[]>("api/SchedulingControler", s);
    }
    // getVolunteer = (day: number): string[]=> {
    //     this._http.get<Volunteer[]>("api/VolunteerControler").subscribe(data => {   
    //         data.forEach(d => {
    //             // console.log(d);
    //             if (d.days == null) {
    //                 return;
    //             }
    //             if (d.days[day] == true) {
    //                 this.volunteerList[this.volunteerList.length] = d.firstName;
    //                 console.log(day + " " + d.firstName);
    //                 // console.log( this.volunteerList[this.volunteerList.length]);
    //             }
    //         });
    //         // console.log(day + " " + this.volunteerList)
    //     })
    //     console.log("in ");
    //     return this.volunteerList;
    // }
    // getVolunteer = (day: number): Promise<string[]> => {
    //     return new Promise((res, rej) => {
    //         this._http.get<Volunteer[]>("api/VolunteerControler").subscribe(data => {
    //             data.forEach(d => {
    //                 if (d.days == null) {
    //                     return;
    //                 }
    //                 if (d.days[day] == true) {
    //                     this.volunteerList[this.volunteerList.length] = d.firstName;
    //                     console.log(day + " " + d.firstName);
    //                     // console.log( this.volunteerList[this.volunteerList.length]);
    //                 }
    //             });
    //             console.log(day + " " + this.volunteerList)
    //         })
    //         res(this.volunteerList);
    //     });
    // }
    //   getVolunteer = (day: number): string[]=> {
    //     this._http.get<Volunteer[]>("api/VolunteerControler").subscribe(data => {   
    //         data.forEach(d => {
    //             // console.log(d);
    //             if (d.days == null) {
    //                 return;
    //             }
    //             if (d.days[day] == true) {
    //                 this.volunteerList[this.volunteerList.length] = d.firstName;
    //                 console.log(day + " " + d.firstName);
    //                 // console.log( this.volunteerList[this.volunteerList.length]);
    //             }
    //         });
    //         // console.log(day + " " + this.volunteerList)
    //     })
    //     console.log("in ");
    //     return this.volunteerList;
    // }
    getVolunteer = (day: number): Observable<Volunteer[]>=> {
       return this._http.get<Volunteer[]>(`api/VolunteerControler/GetByDay/${day}`);
    }

}
