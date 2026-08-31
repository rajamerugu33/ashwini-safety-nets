import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app-config';
import { SeoService } from '../../core/services/seo.service';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, QuoteFormComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit {
  reviews = APP_CONFIG.reviews;
  contact = APP_CONFIG.contact;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetadata(
      'Customer Reviews & Testimonials | Ashwini Safety Nets Chennai',
      'Read verified customer feedback and reviews for balcony safety nets, pigeon nets, and invisible grills installed in Chennai.',
      '/reviews'
    );
    this.seoService.insertLocalBusinessSchema();
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent('Hi Ashwini Safety Nets, I read your customer reviews and would like to request a free quote for my balcony.');
    return `https://wa.me/${APP_CONFIG.contact.whatsAppNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  }
}
