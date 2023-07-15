import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatAccordion} from "@angular/material/expansion";
import {map, Observable} from "rxjs";
import {Patient} from "../patient";
import {Router} from "@angular/router";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-add-patient-form',
    templateUrl: './add-patient-form.component.html',
    styleUrls: ['./add-patient-form.component.css']
})
export class AddPatientFormComponent implements OnInit {
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    newPatient!: FormGroup;
    patient$!: Observable<Patient>;
    mailRegx!:RegExp;

    constructor(private formBuilder: FormBuilder, private doctorService:DoctorService, private router:Router) {
    }

    ngOnInit(): void {
        this.mailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        this.newPatient = this.formBuilder.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            dateOfBirth: [null, Validators.required],
            sexe: [null],
            telephone: [null, Validators.required],
            mail: [null, [Validators.required, Validators.pattern(this.mailRegx)]],
            antecedentMedical: [null],
            allergies: [null],
            createdDate: new Date()
        }, {
            updateOn: 'blur' //la mise a jour n'est faite que si on change de champs
        });
        this.patient$ = this.newPatient.valueChanges.pipe(
            map(formValue => ({
                ...formValue,
                createdDate: "04/07/2023",
                id: 0
            }))
        );
    }

    addPatient(newPatient:Patient){
        this.doctorService.addPatient(newPatient).subscribe({
            next: patient => console.log(patient),
            error: err => console.log(err)
        })
    }


    onBack():void{
        this.router.navigateByUrl('doctor')
    }

    onSubmit(): void {
        this.addPatient(this.newPatient.value);
        //console.log(this.newPatient.value)
    }

}
