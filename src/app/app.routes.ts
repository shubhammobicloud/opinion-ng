import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:"home",
    loadChildren: ()=>import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path: '**',
    component: LoginComponent,
  },
];
