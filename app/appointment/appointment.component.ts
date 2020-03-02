import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentservice:AppointmentService) { }
  appointment : Appointment=new Appointment();
  submitted = false; 
  inrcalcvalue:Number=0;
  ngOnInit() {
    this.submitted=false;
  }
  appointmentsaveform=new FormGroup({ 
    firstname:new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern("^[a-zA-Z]{5,10}$") ]) , 
    lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{5,10}$") ]), 
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60) ]) , 
    email:new FormControl('',[Validators.required,Validators.email]),  
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("[0-9]{10}")]),
    streetaddress:new FormControl('',[Validators.required]),  
    city:new FormControl('',[Validators.required]),  
    state:new FormControl('',[Validators.required]),  
    country:new FormControl('',[Validators.required]),  
inr:new FormControl(),
paisa:new FormControl()
});
saveAppointment(saveAppointment){  
  this.appointment=new Appointment();
  this.appointment.firstname=this.Firstname.value;
  this.appointment.lastname=this.Lastname.value;
  this.appointment.age=this.Age.value;
  this.appointment.email=this.Email.value;
  this.appointment.phone=this.Phone.value;
  this.appointment.streetaddress=this.Streetaddress.value;
  this.appointment.city=this.City.value;
  this.appointment.state=this.State.value;
  this.appointment.country=this.Country.value;
  this.appointment.inr=this.Inr.value;
  this.appointment.paisa=this.Paisa.value;     
  this.submitted = true;  
  this.save();  
} 

save() {
  this.appointmentservice.saveAppointment(this.appointment)  
    .subscribe(data => console.log(data), error => console.log(error));  
  this.appointment = new Appointment();
} 
get Firstname(){  
  return this.appointmentsaveform.get('firstname');  
}  
get Lastname(){  
  return this.appointmentsaveform.get('lastname');  
}  
get Age(){  
  return this.appointmentsaveform.get('age');  
}  
get Email(){  
  return this.appointmentsaveform.get('email');  
}  
get Phone(){  
  return this.appointmentsaveform.get('phone');  
}  
get Streetaddress(){  
  return this.appointmentsaveform.get('streetaddress');  
}  
get City(){  
  return this.appointmentsaveform.get('city');  
}  
get State(){  
  return this.appointmentsaveform.get('state');  
}  
get Country(){  
  return this.appointmentsaveform.get('country');  
} 
get Inr(){  
  return this.appointmentsaveform.get('inr');  
}
get Paisa(){  
  return this.appointmentsaveform.get('paisa');  
}

     cal() {
   
     
      
      this.inrcalcvalue=500;
   
    }
   
    calc() {
   
     
      
      this.inrcalcvalue=1600;
   
    }
    calcu() {
   
     
      
      this.inrcalcvalue=3600;
   
    }
    
    
saveAppointmentForm(){  
  this.submitted=false;  
  this.appointmentsaveform.reset();  
} 

}
