import { Component } from '@angular/core';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.css']
})
export class ResultatsComponent {
  examens: any[] = [
    { nom: 'Radiographie pulmonaire', date: '2022-01-01', resultat: 'Opacités observées dans les poumons' },
    { nom: 'IRM cérébrale', date: '2022-02-15', resultat: 'Présence d\'une tumeur cérébrale' },
    { nom: 'Échocardiographie', date: '2022-03-10', resultat: 'Fonction cardiaque normale' },
    { nom: 'Analyse sanguine complète', date: '2022-04-05', resultat: 'Niveaux d\'hémoglobine et de plaquettes normaux' },
    { nom: 'Endoscopie digestive', date: '2022-05-20', resultat: 'Présence d\'un ulcère gastrique' },
    { nom: 'Électrocardiogramme (ECG)', date: '2022-06-12', resultat: 'Rythme cardiaque régulier' },
    { nom: 'Test d\'effort', date: '2022-07-18', resultat: 'Capacité d\'effort normale' },
    { nom: 'Mammographie', date: '2022-08-25', resultat: 'Présence d\'une masse suspecte dans le sein gauche' },
    { nom: 'Scanner abdominal', date: '2022-09-30', resultat: 'Présence d\'une appendicite aiguë' },
    { nom: 'Échographie rénale', date: '2022-10-14', resultat: 'Calcul rénal détecté dans le rein droit' },
    { nom: 'Test de glycémie', date: '2022-11-05', resultat: 'Niveau de glucose dans la plage normale' },
    { nom: 'Biopsie cutanée', date: '2022-12-19', resultat: 'Cellules cancéreuses détectées dans l\'échantillon' }
  ];

}
