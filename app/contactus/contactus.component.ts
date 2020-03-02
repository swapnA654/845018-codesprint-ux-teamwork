import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private contactservice:ContactService) { }
  contact : Contact=new Contact();
  submitted = false; 

  ngOnInit() {
    this.submitted=false;
  }
  contactsaveform=new FormGroup({ 
    firstname:new FormControl('',[Validators.required , Validators.minLength(5),Validators.pattern("^[a-zA-Z]{5,10}$") ]) , 
    age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60) ]) , 
    email:new FormControl('',[Validators.required,Validators.email])
  })
  saveContact(saveContact){  
    this.contact=new Contact();
    this.contact.firstname=this.Firstname.value;
    this.contact.age=this.Age.value;
    this.contact.email=this.Email.value;
    this.save();
  }
  save() {
    this.contactservice.saveContact(this.contact)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.contact = new Contact();
  } 
  get Firstname(){  
    return this.contactsaveform.get('firstname');  
  }  
    
  get Age(){  
    return this.contactsaveform.get('age');  
  }  
  get Email(){  
    return this.contactsaveform.get('email');  
  }    
}
