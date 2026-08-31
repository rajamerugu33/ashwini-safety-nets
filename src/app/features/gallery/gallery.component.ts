import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app-config';
import { SeoService } from '../../core/services/seo.service';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, QuoteFormComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  projects = APP_CONFIG.projects;
  categories = ['All', 'Balcony Safety Nets', 'Invisible Grills', 'Bird Protection Nets', 'Children Safety Nets', 'Sports Nets', 'Industrial Safety Nets'];
  selectedCategory = 'All';

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetadata(
      'Recent Projects Gallery | Safety Nets & Invisible Grills Chennai',
      'Browse real project photographs of balcony safety nets, pigeon protection nets, and invisible grills installed by Ashwini Safety Nets across Chennai.',
      '/gallery'
    );
    this.seoService.insertLocalBusinessSchema();
  }

  filterCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory || p.serviceName === this.selectedCategory);
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent('Hi Ashwini Safety Nets, I saw your recent projects gallery and would like a free estimate for my home.');
    return `https://wa.me/${APP_CONFIG.contact.whatsAppNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  }
}
