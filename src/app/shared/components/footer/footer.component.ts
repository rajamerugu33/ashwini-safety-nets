import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../../core/config/app-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  businessName = APP_CONFIG.businessName;
  businessType = APP_CONFIG.businessType;
  location = APP_CONFIG.location;
  contact = APP_CONFIG.contact;
  services = APP_CONFIG.services;
  year = new Date().getFullYear();

  getWhatsAppLink(): string {
    const defaultMsg = `Hello ASHWINI SAFETY NETS, I would like to request a quotation for safety nets / invisible grills.`;
    return `https://wa.me/${this.contact.whatsAppNumber}?text=${encodeURIComponent(defaultMsg)}`;
  }
}
