import {Component, OnInit} from '@angular/core';
import {Resume} from "./resume";
import {DoctorService} from "../../services/doctor.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit{
  afficherFormulaireModification:boolean = false;
  newResume!:FormGroup;
  resume!:Resume | undefined ;
  idPatient:number = 100;
  resumeTableLength!:number;

  modifiedResume!:Resume;

  constructor(private doctorService:DoctorService, private formBuilder:FormBuilder) {
  }
  ngOnInit() {
    this.getResume();
    this.buildForm();


  }

  buildForm(){
    this.newResume = this.formBuilder.group({
      id:this.resumeTableLength,
      idPatient:this.idPatient,
      conditionsMedicales:[null, Validators.required],
      allergies:[null, Validators.required],
      medicaments:[null, Validators.required]
    })
  }

  getResume(){
  this.doctorService.getResume().subscribe({
      next: data => {
        console.log(data);
        this.resume = data.find(res => res.idPatient == this.idPatient  );
        this.resumeTableLength = data.length;
      },
      error: err => console.log(err)
    })
  }

  handleResume(resume:Resume){
    if(confirm("Etes vous sur de vouloir apporter ces modifications?")) {
      this.doctorService.handleResume(resume).subscribe({
        next: data => {
          console.log(`${data} est le nouveau modifie`)
        }
      });
      this.afficherFormulaireModification = false;
    }

  }
  addResume(resume:Resume){
    this.doctorService.addResume(resume).subscribe({
      next: data => {
        console.log(data)
      }, error: err => console.log(err)
    })
  }

  onSubmit(){
    this.addResume(this.newResume.value);
    this.getResume();
  }
}
