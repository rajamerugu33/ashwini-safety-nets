import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { APP_CONFIG } from '../../core/config/app-config';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, QuoteFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  businessName = APP_CONFIG.businessName;
  businessType = APP_CONFIG.businessType;
  contact = APP_CONFIG.contact;
  location = APP_CONFIG.location;
  services = APP_CONFIG.services;
  projects = APP_CONFIG.projects;
  reviews = APP_CONFIG.reviews;
  faqs = APP_CONFIG.faqs;

  constructor(
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.seoService.setMetadata(
      'Chennai\'s Trusted Safety Nets & Invisible Grills Specialist',
      'Professional installation of Balcony Safety Nets, Invisible Grills, Pigeon Nets, and Sports Nets in Chennai. Premium quality materials, 5+ years warranty, free estimation.',
      '/'
    );
    this.seoService.insertLocalBusinessSchema();

    // Initialize viewport observer for clean reveal-on-scroll animations
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollReveal();
    }
  }

  private initScrollReveal(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            // Stop observing once animation has triggered once
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback: immediately activate all elements if observer is not supported
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach(el => el.classList.add('reveal-active'));
    }
  }

  getWhatsAppLink(): string {
    const defaultMsg = `Hello Ashwini Safety Nets, I would like to request a free quote/estimation for safety nets or invisible grills.`;
    return `https://wa.me/${this.contact.whatsAppNumber}?text=${encodeURIComponent(defaultMsg)}`;
  }
}
