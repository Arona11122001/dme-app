import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedPaymentMethod: string | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;
phoneNumber: any;
secretCode: any;
cardNumber: any;
cardHolderName: any;
expirationDate: any;
cvv: any;
bank: any;
amount: any;

  submitPayment() {
    this.errorMessage = undefined;
    this.successMessage = undefined;

    if (this.selectedPaymentMethod !== undefined) {
      // Logique pour effectuer le paiement en fonction de la méthode choisie
      // Par exemple, vous pouvez appeler une API de paiement ici
      
      // Simulation d'un paiement réussi
      if (this.selectedPaymentMethod === 'wave') {
        this.successMessage = 'Paiement effectué avec succès via Wave.';
      }
      // Simulation d'un paiement réussi
      else if (this.selectedPaymentMethod === 'om') {
        this.successMessage = 'Paiement effectué avec succès via OM.';
      }
      // Simulation d'un paiement réussi
      else if (this.selectedPaymentMethod === 'carte') {
        this.successMessage = 'Paiement effectué avec succès par carte bancaire.';
      }
      // Simulation d'un échec de paiement
      else {
        this.errorMessage = 'Le mode de paiement sélectionné est invalide.';
      }
    }
  }
}
