import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  constructor(private router:Router,private appointmentservice:AppointmentService) { }



 AppointmentList: Observable<any []>;





  ngOnInit() {



   this.appointmentservice.getAllusers("").subscribe(data =>{

   this.AppointmentList =data;



   });

  }

}