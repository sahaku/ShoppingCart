import { Routes } from '@angular/router';
import { authGuard } from './authguard/authguard';
export const routes: Routes = [
    {
        path:'', loadComponent:()=>import('./components/home/home.component').then(m=>m.HomeComponent)
    },
  {
    path: 'app-product', loadComponent: () => import('./components/product/product.component').then(m => m.ProductComponent), canActivate: [authGuard]
    }
];
