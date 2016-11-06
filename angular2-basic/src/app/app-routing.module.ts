import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth';

import { HomeComponent } from './home';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent } from './customers';
import { MapComponent } from './maps';
import { LoginComponent } from './login';
import { PersonalComponent } from './personal';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/create', component: CustomerCreateComponent, canActivate: [AuthGuard] },
    { path: 'customer/update/:id', component: CustomerUpdateComponent, canActivate: [AuthGuard] },
    { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
    { path: 'personal', component: PersonalComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
