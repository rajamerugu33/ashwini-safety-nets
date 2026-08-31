import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app-config';
import { SeoService } from '../../core/services/seo.service';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, QuoteFormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  businessName = APP_CONFIG.businessName;
  contact = APP_CONFIG.contact;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetadata(
      'About Us | Professional Safety Nets & Invisible Grills Specialist in Chennai',
      'Learn about Ashwini Safety Nets, Chennai leading specialist in balcony safety nets, pigeon protection, and SS316 invisible grills.',
      '/about'
    );
    this.seoService.insertLocalBusinessSchema();
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent('Hi Ashwini Safety Nets, I am reaching out from your About page and would like to request a free quote.');
    return `https://wa.me/${APP_CONFIG.contact.whatsAppNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  }
}
