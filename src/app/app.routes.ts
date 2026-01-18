
import { Routes } from '@angular/router';
// import { authGuard } from './core/guards/auth.guard';
// import { loggedGuard } from './core/guards/logged.guard';

import { AuthLayout } from '../component/layout/auth-layout/auth-layout/auth-layout';
import { BlankLayout } from '../component/layout/blank=layout/blank-layout/blank-layout';
import { authGuard } from '../component/core/guard/auth-guard';
import { loggedGuardGuard } from '../component/core/guard/logged-guard-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { 
    path: '', 
    component: AuthLayout,
    canActivate: [loggedGuardGuard],
    children: [
        {path:'login',loadComponent:()=>import('../component/pages/login/login').then(c=>c.Login)},
    //   { path: 'login', loadComponent: () => import('../component/pages/pages/login').then(m => m.Login), title: 'Login' },
      { path: 'register', loadComponent: () => import('../component/pages/register/register').then(c=> c.Register), title: 'Registers' },
      {path:'forget-password', loadComponent:()=>import('../component/layout/forget-password/forget-password').then(c=>c.ForgetPassword), title:'Forget Password'}
    ] 
  },

  { 
    path: '', 
    component:BlankLayout,
    canActivate:[authGuard],
    children: [
      { path: 'home', loadComponent: () => import('../component/pages/home/home').then(c => c.Home), title: 'Home', /*canActivate: [authGuard]*/ },
      { path: 'cart', loadComponent: () => import('../component/pages/cart/cart').then(m => m.Cart), title: 'Cart' },
      { path: 'brands', loadComponent: () => import('../component/pages/brands/brands').then(m => m.Brands), title: 'Brands' },
      { path: 'product', loadComponent:()=>import('../component/pages/product/products').then(c=>c.Products), title: 'product' },
      // { path: 'allorders', loadComponent: () => import('../component/pages/allorders/allorders').then(m => m.AllOrders), title: 'allorders' },
      { path: 'categorise', loadComponent: () => import('../component/pages/categories/categories').then(m => m.Categories), title: 'Categorise' },
      { path: 'details/:slug/:id', loadComponent: () => import('../component/pages/details/details').then(m => m.Details), title: 'Details' },
       { path: 'details/:id', loadComponent: () => import('../component/pages/details/details').then(m => m.Details), title: 'Details' },
      { path: 'checkout/:id', loadComponent: () => import('../component/pages/checkout/checkout').then(m => m.Checkout), title: 'Checkout' },
      { path: 'gallery', loadComponent: () => import('../component/pages/gallery/gallery').then(m => m.Gallery), title: 'Gallery' },
      { path: 'allorders', loadComponent: () => import('../component/pages/allorders/allorders').then(m => m.Allorders), title: 'allorders' },
      { path: '**', loadComponent: () => import('../component/pages/not-found/not-found').then(m => m.NotFound) }
    ] 


  }
];