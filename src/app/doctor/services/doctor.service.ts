import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../patient";
import {catchError, Observable} from "rxjs";
import {Resume} from "../dossier/resume/resume";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url:string = 'http://localhost:9000';

  constructor(private http:HttpClient) { }

  getPatients(page:number, size:number):Observable<Array<Patient>>{
    return this.http.get<Array<Patient>>(`${this.url}/patients?page=${page}&_limit=${size}`);
  }

  searchPatient(keyword:string){
    return this.http.get<Array<Patient>>(`${this.url}/patients?firstName_like=${keyword}`);
  }


  //ajouter patient
  addPatient(newPatient:Patient){
    return this.http.post<Patient>(`${this.url}/patients`, newPatient);
  }

  //modifier patient
  handlePatient(patient:Patient){
    return this.http.put<Patient>(`${this.url}/patients/${patient.id}`,patient);
  }

  //supprimer patient
  deletePatient(patient:Patient){
    return this.http.delete<Patient>(`${this.url}/patients/${patient.id}`);
  }

  //resume medical
  getResume(){
    return this.http.get<Array<Resume>>(`${this.url}/resume`);
  }
  addResume(resume:Resume){
    return this.http.post<Resume>(`http://localhost:9000/resume`, resume);
  }
  handleResume(resume:Resume){
    return this.http.put<Resume>(`${this.url}/resume/${resume.id}`, resume);
  }
}
