import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ThankComponent } from './thank/thank.component';


const routes: Routes = [
  {path:'appointment',component:AppointmentComponent},
  {path:'viewappointment',component:ViewappointmentComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'thank',component:ThankComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
