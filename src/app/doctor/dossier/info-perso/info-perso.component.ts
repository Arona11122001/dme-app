import { Component } from '@angular/core';

@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.css']
})
export class InfoPersoComponent {
client:any = {
  nom:'Issakha',
  dateOfBirth:'07/05/2001',
  email:'diouf8987@gmail.com',
  adresse:'Rufisque',
  sexe:'masculin',
  telephone:'786078871',
}
}
