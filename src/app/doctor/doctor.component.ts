import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "./patient";
import {DataService} from "./DataService";
import {DoctorService} from "./services/doctor.service";


@Component({
    selector: 'app-doctor',
    templateUrl: './doctor.component.html',
    styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

    patients!: Array<Patient>;

    constructor(private doctorService:DoctorService, private dataService:DataService) {
    }

    ngOnInit(): void {
        this.getPatients();
    }

    getPatients():void{
        this.doctorService.getPatients(1,7).subscribe({
            next: data => {
                this.patients = data
            },
            error: err => console.log(err)
        })
    }

    addPatient(newPatient:Patient){
        this.doctorService.addPatient(newPatient).subscribe({
            next: patient => this.patients.push(patient),
            error: err => console.log(err)
        })
    }

    transmettreDonnees():void{
        this.dataService.transmettreDonnees(this.patients);
    }
}
