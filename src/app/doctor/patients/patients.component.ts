import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../services/doctor.service";
import {Patient} from "../patient";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
  patients!:Array<Patient>;
  keyword:string ="";



  constructor(private doctorService:DoctorService){}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients():void{
    this.doctorService.getPatients(1, 100).subscribe({
      next: data => {
        this.patients = data
      },
      error: err => console.log(err)
    })
  }

  searchPatients(){
    this.doctorService.searchPatient(this.keyword).subscribe({
      next: data => {
        this.patients = data;
      },
      error: err => console.log(err)
    })
  }

  deletePatient(patient:Patient){
    if (confirm(`Voulez vous supprimer ${patient.firstName}?`))
    this.doctorService.deletePatient(patient).subscribe({
      next: data => {
        this.getPatients();
      },
      error: err => console.log(err)
    })
  }
}
