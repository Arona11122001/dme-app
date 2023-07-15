import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil-patient',
  templateUrl: './accueil-patient.component.html',
  styleUrls: ['./accueil-patient.component.css']
})
export class AccueilPatientComponent {
  constructor(private router: Router) {}

  effectuerPaiement() {
    // Ajoutez ici la logique pour effectuer un paiement
    console.log('Effectuer un paiement');

    // Redirection vers la page de paiement
    this.router.navigate(['/patient/payment']);
  }

  consulterInformations() {
    // Ajoutez ici la logique pour consulter les informations
    console.log('Consulter les informations');

    // Redirection vers la page des informations
    this.router.navigate(['/patient/information']);
  }
  consulterDossierMedical() {
    // Ajoutez ici la logique pour consulter le dossier médical
    console.log('Consulter le dossier médical');

    // Redirection vers la page du dossier médical
    this.router.navigate(['/patient/medical-record']);
  }
}
