import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {PatientComponent} from './patient/patient.component';
import {DoctorComponent} from './doctor/doctor.component';
import {SecretaireComponent} from './secretaire/secretaire.component';
import {GestionnaireComponent} from './gestionnaire/gestionnaire.component';
import {AdminComponent} from './admin/admin.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AddPatientFormComponent} from './doctor/add-patient-form/add-patient-form.component';
import {PatientsComponent} from "./doctor/patients/patients.component";
import {DossierComponent} from "./doctor/dossier/dossier.component";
import {ResumeComponent} from "./doctor/dossier/resume/resume.component";
import {HistoriqueComponent} from "./doctor/dossier/historique/historique.component";
import {InfoPersoComponent} from "./doctor/dossier/info-perso/info-perso.component";
import {PrescriptionComponent} from "./doctor/dossier/prescription/prescription.component";
import {ResultatsComponent} from "./doctor/dossier/resultats/resultats.component";
import {NotesObservationComponent} from "./doctor/dossier/notes-observation/notes-observation.component";

const routes: Routes = [
  {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
  {path: 'acceuil', component: AccueilComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'doctor', component: DoctorComponent,},
  {path: 'nouveau-patient', component: AddPatientFormComponent,},
  {path: 'secretaire', component: SecretaireComponent},
  {path: 'gestionnaire', component: GestionnaireComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'all-patients', component: PatientsComponent},
  {path: 'dossier-medical', component: DossierComponent},
  {path:'doctor/dossier-medical/resume', component:ResumeComponent},
  {path:'doctor/dossier-medical/historique', component:HistoriqueComponent},
  {path:'doctor/dossier-medical/info-perso', component:InfoPersoComponent},
  {path:'doctor/dossier-medical/prescription', component:PrescriptionComponent},
  {path:'doctor/dossier-medical/resultats', component:ResultatsComponent},
  {path:'doctor/dossier-medical/notes-observation', component:NotesObservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
