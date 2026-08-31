import { RenderMode, ServerRoute } from '@angular/ssr';
import { APP_CONFIG } from './core/config/app-config';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return APP_CONFIG.blogs.map(b => ({ slug: b.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
