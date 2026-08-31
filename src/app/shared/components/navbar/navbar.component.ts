import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONFIG } from '../../../core/config/app-config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  businessName = APP_CONFIG.businessName;
  services = APP_CONFIG.services;
  isMenuOpen = false;
  isScrolled = false;
  isServicesOpen = false; // Services dropdown/accordion open status

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.isServicesOpen = false;
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.isServicesOpen = false;
  }

  toggleServices(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isServicesOpen = !this.isServicesOpen;
  }

  contact = APP_CONFIG.contact;

  getWhatsAppLink(): string {
    const message = encodeURIComponent('Hi Ashwini Safety Nets, I would like to request a free quote for safety net installation in Chennai.');
    return `https://wa.me/${APP_CONFIG.contact.whatsAppNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollOffset > 50;
  }
}
