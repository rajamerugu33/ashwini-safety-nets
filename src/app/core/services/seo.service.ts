import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { APP_CONFIG } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Updates page metadata, including title, meta description, and social graph cards.
   */
  setMetadata(title: string, description: string, canonicalPath: string = ''): void {
    const fullTitle = `${title} | ${APP_CONFIG.businessName}`;
    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: `${APP_CONFIG.businessType}, Chennai, Safety Nets Chennai, Invisible Grills Chennai` });
    
    // Open Graph (Facebook / LinkedIn)
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter Card
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });

    // Handle canonical URL
    const baseUrl = APP_CONFIG.contact.websiteDomain.replace(/\/$/, ''); // Normalize base URL by removing trailing slash
    const canonicalUrl = `${baseUrl}${canonicalPath}`;
    this.updateCanonicalLink(canonicalUrl);
  }

  /**
   * Injects or updates a canonical link element in the HTML document.
   */
  private updateCanonicalLink(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }

  /**
   * Clears any existing dynamic JSON-LD scripts to avoid duplication or stale schemas on navigation.
   */
  private clearExistingSchemas(): void {
    const ids = ['ashwini-safetynets-jsonld', 'ashwini-service-jsonld', 'ashwini-breadcrumb-jsonld', 'ashwini-article-jsonld'];
    ids.forEach(id => {
      const script = this.document.getElementById(id);
      if (script) {
        script.remove();
      }
    });
  }

  /**
   * Injects JSON-LD structured data for LocalBusiness to boost technical SEO.
   */
  insertLocalBusinessSchema(): void {
    this.clearExistingSchemas();

    const schemaId = 'ashwini-safetynets-jsonld';
    let script = this.document.getElementById(schemaId) as HTMLScriptElement;
    
    if (!script) {
      script = this.document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': APP_CONFIG.businessName,
        'image': `${APP_CONFIG.contact.websiteDomain}assets/images/branding/logo.jpg`,
        'description': `${APP_CONFIG.businessType} professional installations and services in ${APP_CONFIG.location.city}, ${APP_CONFIG.location.state}.`,
        'telephone': APP_CONFIG.contact.phonePlaceholder,
        'email': APP_CONFIG.contact.emailPlaceholder,
        'priceRange': '$$',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': APP_CONFIG.location.city,
          'addressRegion': APP_CONFIG.location.state,
          'addressCountry': APP_CONFIG.location.country
        },
        'url': APP_CONFIG.contact.websiteDomain,
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          'opens': '08:00',
          'closes': '21:00'
        }
      };

      script.text = JSON.stringify(schemaData);
      this.document.head.appendChild(script);
    }
  }

  /**
   * Injects dynamic Service and BreadcrumbList JSON-LD schemas for a specific service page.
   */
  insertServiceAndBreadcrumbSchema(service: any): void {
    this.clearExistingSchemas();

    const baseUrl = APP_CONFIG.contact.websiteDomain;
    const serviceUrl = `${baseUrl}services/${service.id}`;

    // 1. Service Schema
    const serviceScript = this.document.createElement('script');
    serviceScript.id = 'ashwini-service-jsonld';
    serviceScript.type = 'application/ld+json';
    
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.name,
      'description': service.longDesc,
      'provider': {
        '@type': 'LocalBusiness',
        'name': APP_CONFIG.businessName,
        'image': `${baseUrl}assets/images/branding/logo.jpg`,
        'telephone': APP_CONFIG.contact.phonePlaceholder,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': APP_CONFIG.location.city,
          'addressRegion': APP_CONFIG.location.state,
          'addressCountry': APP_CONFIG.location.country
        }
      },
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': APP_CONFIG.location.city
      }
    };
    serviceScript.text = JSON.stringify(serviceSchema);
    this.document.head.appendChild(serviceScript);

    // 2. BreadcrumbList Schema
    const breadcrumbScript = this.document.createElement('script');
    breadcrumbScript.id = 'ashwini-breadcrumb-jsonld';
    breadcrumbScript.type = 'application/ld+json';
    
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': baseUrl
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': `${baseUrl}#services`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': service.name,
          'item': serviceUrl
        }
      ]
    };
    breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
    this.document.head.appendChild(breadcrumbScript);
  }

  /**
   * Injects dynamic Article / BlogPosting JSON-LD schema for blog detail pages.
   */
  insertArticleSchema(article: any): void {
    this.clearExistingSchemas();

    const baseUrl = APP_CONFIG.contact.websiteDomain;
    const articleUrl = `${baseUrl}blog/${article.slug}`;

    const articleScript = this.document.createElement('script');
    articleScript.id = 'ashwini-article-jsonld';
    articleScript.type = 'application/ld+json';

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': article.title,
      'description': article.excerpt,
      'image': `${baseUrl}${article.imageUrl}`,
      'url': articleUrl,
      'publisher': {
        '@type': 'Organization',
        'name': APP_CONFIG.businessName,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}assets/images/branding/logo.jpg`
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': articleUrl
      }
    };

    articleScript.text = JSON.stringify(articleSchema);
    this.document.head.appendChild(articleScript);
  }
}
