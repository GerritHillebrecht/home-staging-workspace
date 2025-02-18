import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/landing/landing.component'),
  },
  {
    path: 'store',
    loadComponent: () => import('./pages/shop/shop.component'),
  }
];
