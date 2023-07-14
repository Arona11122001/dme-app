import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "../patient";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getPatients(page:number, size:number):Observable<Array<Patient>>{
    return this.http.get<Array<Patient>>(`http://localhost:9000/patients?page=${page}&_limit=${size}`);
  }

  searchPatient(keyword:string){
    return this.http.get<Array<Patient>>(`http://localhost:9000/patients?firstName_like=${keyword}`);
  }

  //ajouter patient
  addPatient(newPatient:Patient){
    return this.http.post<Patient>('http://localhost:9000/patients', newPatient);
  }

  //modifier patient
  handlePatient(patient:Patient){
    return this.http.put<Patient>(`http://localhost:9000/patients/${patient.id}`,patient);
  }

  //supprimer patient
  deletePatient(patient:Patient){
    return this.http.delete<Patient>(`http://localhost:9000/patients/${patient.id}`);
  }

}
