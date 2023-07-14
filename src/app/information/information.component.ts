import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  days: string[] = [];
  patient: any;
  consultationHistory!: any[];

  ngOnInit() {
    const startDate = moment('2023-07-01');
    const endDate = moment('2023-07-31');

    while (startDate.isSameOrBefore(endDate, 'day')) {
      this.days.push(startDate.format('DD'));
      startDate.add(1, 'day');
    }

    this.patient = {
      nom: 'DIENG',
      prenom: 'Modou',
      sexe: 'Masculin',
      photoProfil: 'assets/homme-afro-americain-t-shirt-blanc.jpg'
    };

    this.consultationHistory = [
      {
        date: new Date('2023-06-01'),
        motif: 'Consultation régulière',
        resultat: 'RAS'
      },
      {
        date: new Date('2023-05-15'),
        motif: 'Suivi post-opératoire',
        resultat: 'Rétablissement en cours'
      },
      {
        date: new Date('2023-04-20'),
        motif: 'Bilan de santé annuel',
        resultat: 'Bonne santé générale'
      }
    ];
  }

  isAppointmentDay(day: string): boolean {
    // Replace this logic with your actual appointment dates check
    const appointmentDates = ['05', '10', '15', '22'];
    return appointmentDates.includes(day);
  }
}
