import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { APP_CONFIG } from './core/config/app-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ashwini-safetynets';
  contact = APP_CONFIG.contact;

  getWhatsAppLink(): string {
    const defaultMsg = `Hello Ashwini Safety Nets, I am checking your website and would like to request safety nets / invisible grills installation services in Chennai.`;
    return `https://wa.me/${this.contact.whatsAppNumber}?text=${encodeURIComponent(defaultMsg)}`;
  }
}
