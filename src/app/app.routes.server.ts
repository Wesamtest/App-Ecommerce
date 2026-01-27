import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'details/:slug/:id',
    renderMode: RenderMode.Server, // هنا المكان الصحيح للخاصية
  },
  {
    path: 'details/:id', // المسار الذي يسبب المشكلة
    renderMode: RenderMode.Server, // هذا هو التعديل المطلوب
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
