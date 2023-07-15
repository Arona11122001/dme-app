import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { PaymentComponent } from './payment/payment.component';
import { InformationComponent } from './information/information.component';
import { AccueilPatientComponent } from './accueil-patient/accueil-patient.component';



@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    SecretaireComponent,
    GestionnaireComponent,
    AdminComponent,
    AccueilComponent,
    MedicalRecordComponent,
    PaymentComponent,
    InformationComponent,
    AccueilPatientComponent,

    
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
