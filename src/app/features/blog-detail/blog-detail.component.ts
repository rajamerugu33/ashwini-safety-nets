import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { APP_CONFIG } from '../../core/config/app-config';
import { SeoService } from '../../core/services/seo.service';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, QuoteFormComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  post: any = null;
  relatedPosts: any[] = [];
  contact = APP_CONFIG.contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (slug) {
        this.loadPost(slug);
      }
    });
  }

  loadPost(slug: string): void {
    const found = APP_CONFIG.blogs.find(b => b.slug === slug);
    if (found) {
      this.post = found;
      this.relatedPosts = APP_CONFIG.blogs.filter(b => b.slug !== slug).slice(0, 3);
      
      this.seoService.setMetadata(
        `${this.post.title} | Ashwini Safety Nets Chennai`,
        this.post.excerpt,
        `/blog/${this.post.slug}`
      );
      this.seoService.insertArticleSchema(this.post);
    } else {
      this.router.navigate(['/blog']);
    }
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent(`Hi Ashwini Safety Nets, I read your article "${this.post?.title}" and would like to get a free estimate.`);
    return `https://wa.me/${APP_CONFIG.contact.whatsAppNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  }
}
