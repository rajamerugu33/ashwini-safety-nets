import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { APP_CONFIG, ServiceInfo } from '../../core/config/app-config';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, QuoteFormComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service!: ServiceInfo;
  relatedServices: ServiceInfo[] = [];
  businessName = APP_CONFIG.businessName;
  contact = APP_CONFIG.contact;
  specKeys: string[] = [];
  chooseUs = APP_CONFIG.serviceChooseUs;
  processSteps = APP_CONFIG.serviceProcess;

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      const serviceId = urlSegments[urlSegments.length - 1]?.path;
      const foundService = APP_CONFIG.services.find(s => s.id === serviceId);
      
      if (foundService) {
        this.service = foundService;
        this.specKeys = Object.keys(foundService.specifications);

        this.relatedServices = APP_CONFIG.services
          .filter(s => s.id !== this.service.id)
          .slice(0, 3);

        this.seoService.setMetadata(
          this.service.seoTitle,
          this.service.shortDesc,
          `/services/${this.service.id}`
        );

        this.seoService.insertServiceAndBreadcrumbSchema(this.service);

        // Reset scroll reveal observer triggers on route change
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => this.initScrollReveal(), 100);
        }
      }
    });
  }

  private initScrollReveal(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
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
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach(el => el.classList.add('reveal-active'));
    }
  }

  getWhatsAppLink(): string {
    if (!this.service) return '';
    const defaultMsg = `Hello Ashwini Safety Nets, I am checking your website and would like to request safety nets / invisible grills installation services for "${this.service.name}" in Chennai.`;
    return `https://wa.me/${this.contact.whatsAppNumber}?text=${encodeURIComponent(defaultMsg)}`;
  }
}
