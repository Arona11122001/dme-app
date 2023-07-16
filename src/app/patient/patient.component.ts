import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {
    // Effectuez les vérifications d'authentification ici, par exemple en vérifiant les informations avec un service d'authentification

    // Exemple simple pour la démonstration - vérifiez si le nom d'utilisateur et le mot de passe sont vides
    if (this.username === 'madaga' && this.password === 'passer') {
      // Authentification réussie - redirigez l'utilisateur vers une autre page
      console.log('Authentification réussie !');

      // Remplacez 'redirect-url' par l'URL de la page de redirection souhaitée
      this.router.navigateByUrl('/accueil-patient');
    } else {
      // Authentification échouée - affichez un message d'erreur ou effectuez une autre action nécessaire
      console.log('Authentification échouée. Veuillez vérifier vos informations.');
    }
  }
}
