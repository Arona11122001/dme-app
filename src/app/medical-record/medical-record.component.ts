import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
  medicalRecord: any; // Modifier le type en fonction de la structure du dossier médical
  errorMessage: string | undefined;

  ngOnInit() {
    // Récupérer le dossier médical du patient en utilisant un identifiant unique du patient
    const patientId = '123456'; // Remplacez par l'identifiant du patient réel

    // Appel à l'API pour récupérer le dossier médical
    // Remplacez cette partie avec votre propre logique pour récupérer les données du dossier médical
    // Exemple : appel à un service, utilisation de l'observateur, etc.
    this.getMedicalRecord(patientId);
  }

  getMedicalRecord(patientId: string) {
    // Simulation de récupération du dossier médical
    // Remplacez cette partie avec votre propre logique pour récupérer les données du dossier médical
    // Exemple : appel à un service, utilisation de l'observateur, etc.
    setTimeout(() => {
      // Exemple de données du dossier médical
      this.medicalRecord = {
        patient: {
          nom: 'Modou DIENG',
          age: 35,
          sexe: 'Masculin',
          dateNaissance: '1988-05-10',
          numeroDossierMedical: '45782340'
        },
        diagnostic: 'Hypertension artérielle, Diabète',
        prescriptions: [
          { maladie: 'Hypertension artérielle', medicaments: ['Amlodipine', 'Hydrochlorothiazide'] },
          { maladie: 'Diabète', medicaments: ['Metformine', 'Gliclazide'] }
        ]
      };
    }, 2000); // Temps d'attente simulé de 2 secondes
  }
}
