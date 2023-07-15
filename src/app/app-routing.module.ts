import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PaymentComponent } from './payment/payment.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { InformationComponent } from './information/information.component';
import { AccueilPatientComponent } from './accueil-patient/accueil-patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  {path:'acceuil', component:AccueilComponent},
  {path:'patient', component:PatientComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'secretaire', component:SecretaireComponent},
  {path:'gestionnaire', component:GestionnaireComponent},
  {path:'admin', component:AdminComponent},
  { path: 'patient/payment', component: PaymentComponent },
  { path: 'patient/medical-record', component: MedicalRecordComponent },
  { path: 'patient/information', component: InformationComponent },
  { path: 'accueil-patient', component: AccueilPatientComponent }

  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
