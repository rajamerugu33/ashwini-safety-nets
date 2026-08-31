import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG } from '../../../core/config/app-config';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrl: './quote-form.component.css'
})
export class QuoteFormComponent {
  contact = APP_CONFIG.contact;

  // Form model aligning exactly with the requested fields
  formData = {
    name: '',
    mobile: '',
    address: '',
    requirement: ''
  };

  onSubmit(): void {
    // Validate mandatory fields
    if (
      !this.formData.name.trim() || 
      !this.formData.mobile.trim() || 
      !this.formData.address.trim() || 
      !this.formData.requirement.trim()
    ) {
      alert('Please fill in all fields (Name, Mobile, Address, and Requirement).');
      return;
    }

    const textMessage = 
      `Hello ASHWINI SAFETY NETS,\n\n` +
      `I would like to request a quotation.\n\n` +
      `Name: ${this.formData.name.trim()}\n` +
      `Mobile: ${this.formData.mobile.trim()}\n` +
      `Address: ${this.formData.address.trim()}\n` +
      `Requirement: ${this.formData.requirement.trim()}`;

    const whatsappUrl = `https://wa.me/${this.contact.whatsAppNumber}?text=${encodeURIComponent(textMessage)}`;
    
    // Redirect customer to WhatsApp
    window.open(whatsappUrl, '_blank');
  }
}
