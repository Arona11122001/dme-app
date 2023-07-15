import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../patient";
import {DoctorService} from "../services/doctor.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{
  @Input() public patientList: Array<Patient> | undefined;
  numberOfItems:number = 0;
  listePatient!:Array<Patient>;
  constructor(private doctorService:DoctorService) {
  }

  getPatients(){
   this.doctorService.getPatients(1, 6).subscribe({
      next: data => {
        this.listePatient = data
      },
     error: err => console.log(err)
    })
  }

  ngOnInit(): void {
    this.getPatients();
  }
}
