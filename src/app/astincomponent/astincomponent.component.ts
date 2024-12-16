import { Component } from '@angular/core';
import {
  SecondscriptService
} from '../Services/secondscript.service';
import { DeliveryRequest, DeliveryResponse } from '../api-models';

@Component({
  selector: 'app-astincomponent',
  templateUrl: './astincomponent.component.html',
  styleUrls: ['./astincomponent.component.css'],
})
export class AstincomponentComponent {
  asin: string = ''; // ASIN input
  pincodes: string[] = []; // Pincode array
  pincodeInput: string = ''; // Temporary input for pincodes
  response: DeliveryResponse | null = null; // API response
  error: string | null = null; // Error messages
  deliday: number = 0;

  constructor(private deliveryService: SecondscriptService) {}

  // Add a new pincode
  addPincode() {
    const trimmedInput = this.pincodeInput.trim();
    if (trimmedInput && !this.pincodes.includes(trimmedInput)) {
      this.pincodes.push(trimmedInput);
      this.pincodeInput = ''; // Clear the input field

    }
  }

  // Remove a specific pincode
  removePincode(index: number) {
    this.pincodes.splice(index, 1);
  }

  // Check delivery days for the provided ASIN and pincodes
  checkDeliveryDays() {
    if (!this.asin.trim() || this.pincodes.length === 0) {
      this.error = 'ASIN and at least one pincode are required.';
      return;
    }
  
    const request: DeliveryRequest = {
      asin: this.asin.trim(),
      pincodes: this.pincodes,
    };
  
    console.log('Request Payload:', request); // Log the request for debugging
  
    this.deliveryService.getDeliveryDays(request).subscribe({
      next: (response) => {
        console.log('Raw Response:', response); // Debugging the entire response
        console.log('Results Array:', response.results);
        this.response = response;
        this.error = null;
      },
      error: (err) => {
        console.error('API error:', err);
        this.error = 'Failed to fetch delivery days. Please try again later.';
        this.response = null;
      },
    });
  }
  
}
