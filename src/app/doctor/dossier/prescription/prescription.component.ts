import { Component } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  prescription: any[] = [
    { medicament: 'Paracétamol', posologie: '1 comprimé toutes les 6 heures', duree: '7 jours' },
    { medicament: 'Amoxicilline', posologie: '500 mg toutes les 8 heures', duree: '10 jours' },
    { medicament: 'Lisinopril', posologie: '10 mg une fois par jour', duree: '30 jours' },
    { medicament: 'Atorvastatine', posologie: '20 mg une fois par jour', duree: '90 jours' },
    { medicament: 'Ibuprofène', posologie: '400 mg toutes les 4 heures', duree: '5 jours' },
    { medicament: 'Métronidazole', posologie: '500 mg trois fois par jour', duree: '7 jours' },
    { medicament: 'Salbutamol', posologie: '2 inhalations toutes les 6 heures', duree: '14 jours' },
    { medicament: 'Warfarine', posologie: '2.5 mg une fois par jour', duree: 'Indéfinie' },
    { medicament: 'Omeprazole', posologie: '20 mg une fois par jour', duree: '30 jours' },
    { medicament: 'Levothyroxine', posologie: '100 mcg une fois par jour', duree: 'Indéfinie' },
    { medicament: 'Fluoxetine', posologie: '20 mg une fois par jour', duree: '90 jours' },
    { medicament: 'Metformine', posologie: '1000 mg deux fois par jour', duree: '30 jours' },
    { medicament: 'Ranitidine', posologie: '150 mg deux fois par jour', duree: '14 jours' },
    { medicament: 'Prednisone', posologie: '10 mg une fois par jour', duree: '7 jours' },
    { medicament: 'Diazepam', posologie: '5 mg au coucher', duree: 'Indéfinie' }
  ];

}
