import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ServiceDetailComponent } from './features/service-detail/service-detail.component';
import { AboutComponent } from './features/about/about.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { BlogComponent } from './features/blog/blog.component';
import { BlogDetailComponent } from './features/blog-detail/blog-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: BlogDetailComponent },
  { path: 'services/safety-nets', component: ServiceDetailComponent },
  { path: 'services/balcony-safety-nets', component: ServiceDetailComponent },
  { path: 'services/children-safety-nets', component: ServiceDetailComponent },
  { path: 'services/bird-protection-nets', component: ServiceDetailComponent },
  { path: 'services/pigeon-nets', component: ServiceDetailComponent },
  { path: 'services/invisible-grills', component: ServiceDetailComponent },
  { path: 'services/box-cricket-nets', component: ServiceDetailComponent },
  { path: 'services/sports-nets', component: ServiceDetailComponent },
  { path: 'services/industrial-safety-nets', component: ServiceDetailComponent },
  { path: '**', redirectTo: '' }
];
