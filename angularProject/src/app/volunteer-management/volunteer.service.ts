import { Injectable } from "@angular/core";
import { Volunteer } from "./volunteer.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class VolunteerService
{
    constructor(private _http:HttpClient){
        
    }
    get=():Observable< Volunteer[]>=>{
    return this._http.get<Volunteer[]>("api/Server");
    }
}