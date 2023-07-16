import { Component } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  visites: any[] = [
    {
      date: '2022-01-15',
      motif: 'Suivi du diabète',
      observations: 'Niveau de glycémie stable. Ajustement de la posologie des médicaments.'
    },
    {
      date: '2022-03-10',
      motif: 'Bilan annuel',
      observations: 'Examens sanguins et tests de routine effectués. Tout est normal.'
    }
  ];
}
