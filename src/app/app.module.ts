import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DoctorComponent} from './doctor/doctor.component';
import {PatientComponent} from './patient/patient.component';
import {SecretaireComponent} from './secretaire/secretaire.component';
import {GestionnaireComponent} from './gestionnaire/gestionnaire.component';
import {AdminComponent} from './admin/admin.component';
import {AccueilComponent} from './accueil/accueil.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './doctor/material/material.module';
import {NavbarComponent} from './doctor/navbar/navbar.component';
import {DaystatComponent} from './doctor/daystat/daystat.component';
import {CalendarComponent} from './doctor/calendar/calendar.component';
import {PatientListComponent} from './doctor/patient-list/patient-list.component';
import {AddPatientFormComponent} from './doctor/add-patient-form/add-patient-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { PatientsComponent } from './doctor/patients/patients.component';
import {DataService} from "./doctor/DataService";
import { DossierComponent } from './doctor/dossier/dossier.component';


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
        DossierComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
