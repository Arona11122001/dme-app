import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

//service pour passer les donnees du composant Doctor au composant Patients
@Injectable()
export class DataService{
    private patientsSubject = new BehaviorSubject<any>(null);
    patientsSubject$ = this.patientsSubject.asObservable();

    transmettreDonnees(donnees:any):void{
        this.patientsSubject.next(donnees);
    }

}