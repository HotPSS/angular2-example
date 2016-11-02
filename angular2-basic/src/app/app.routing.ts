import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth';

import { HomeComponent } from './home';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent } from './customers';
import { MapComponent } from './maps';
import { LoginComponent } from './login';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'customers', component: CustomerListComponent, canActivate: [AuthGuard] },
    { path: 'customer/create', component: CustomerCreateComponent, canActivate: [AuthGuard] },
    { path: 'customer/update/:id', component: CustomerUpdateComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
