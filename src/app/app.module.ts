import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
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
import { NavbarComponent } from './doctor/navbar/navbar.component';
import { PatientListComponent } from './doctor/patient-list/patient-list.component';
import { CalendarComponent } from './doctor/calendar/calendar.component';
import { DaystatComponent } from './doctor/daystat/daystat.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {AddPatientFormComponent} from './doctor/add-patient-form/add-patient-form.component';
import {PatientsComponent} from "./doctor/patients/patients.component";
import {DossierComponent} from "./doctor/dossier/dossier.component";
import {DataService} from "./doctor/DataService";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IndexComponent } from './admin/post/index/index.component';
import { ViewComponent } from './admin/post/view/view.component';
import { CreateComponent } from './admin/post/create/create.component';
import { EditComponent } from './admin/post/edit/edit.component';
import { PostRoutingModule } from './admin/post/post-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './doctor/material/material.module';
import { DossierComponent } from './doctor/dossier/dossier.component';
import { InfoPersoComponent } from './doctor/dossier/info-perso/info-perso.component';
import { NotesObservationComponent } from './doctor/dossier/notes-observation/notes-observation.component';
import { PrescriptionComponent } from './doctor/dossier/prescription/prescription.component';
import { ResultatsComponent } from './doctor/dossier/resultats/resultats.component';
import { HistoriqueComponent } from './doctor/dossier/historique/historique.component';
import { ResumeComponent } from './doctor/dossier/resume/resume.component';
// import { InfoPersoComponent } from './app/doctor/dossier/info-perso/info-perso.component';
// import { ResumeComponent } from './app/doctor/dossier/resume/resume.component';
// import { HistoriqueComponent } from './app/doctor/dossier/historique/historique.component';
// import { ResultatsComponent } from './app/doctor/dossier/resultats/resultats.component';
// import { PrescriptionComponent } from './app/doctor/dossier/prescription/prescription.component';
// import { NotesObservationComponent } from './app/doctor/dossier/notes-observation/notes-observation.component';


@NgModule({
    declarations: [
        AppComponent,
        DoctorComponent,
        PatientComponent,
        SecretaireComponent,
        GestionnaireComponent,
        AdminComponent,
        AccueilComponent,
        NavbarComponent,
        DaystatComponent,
        CalendarComponent,
        PatientListComponent,
        AddPatientFormComponent,
        PatientsComponent,
        DossierComponent,
        InfoPersoComponent,
        NotesObservationComponent,
        PrescriptionComponent,
        ResultatsComponent,
        HistoriqueComponent,
        ResumeComponent,
        MedicalRecordComponent,
    PaymentComponent,
    InformationComponent,
    AccueilPatientComponent,
    NavbarComponent,
    PatientListComponent,
    CalendarComponent,
    DaystatComponent,
    AddPatientFormComponent,
    PatientsComponent,
    DossierComponent,
    IndexComponent, ViewComponent, CreateComponent, EditComponent

    ],
     imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    ReactiveFormsModule, PostRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],





})
export class AppModule {}
