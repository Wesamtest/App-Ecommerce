import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'details/:slug/:id',
    renderMode: RenderMode.Server, // هنا المكان الصحيح للخاصية
  },
  {
    path: 'checkout/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
