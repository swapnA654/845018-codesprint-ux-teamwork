import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 

  constructor(private http:HttpClient) { }
  saveAppointment(Appointment: any): any {  
    return this.http.post("http://localhost:3000/fitnesstracker", Appointment);  
  } 
  getAllusers(Appointment:any):any {
    return this.http.get("http://localhost:3000/fitnesstracker"); 
  }
}
