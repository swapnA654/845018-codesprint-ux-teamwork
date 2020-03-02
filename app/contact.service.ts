import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  saveContact(Contact: any): any {  
    return this.http.post("http://localhost:3000/fitnesstracker", Contact);  
  } 
}
