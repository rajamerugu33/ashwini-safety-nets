import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app-config';
import { SeoService } from '../../core/services/seo.service';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, QuoteFormComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs = APP_CONFIG.blogs;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setMetadata(
      'Safety Nets & Invisible Grills Blog | Chennai Safety Guide',
      'Read informative guides and expert tips on balcony safety nets, pigeon protection, child safety barriers, and SS316 invisible grills in Chennai.',
      '/blog'
    );
    this.seoService.insertLocalBusinessSchema();
  }
}
