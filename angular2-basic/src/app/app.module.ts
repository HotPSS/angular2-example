import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DataTableModule } from 'angular-2-data-table';
import { HttpClient } from './http-client';

import { HeaderEventsManager } from './shared/headerEventManager';

// import { Routing } from './app.routing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent } from './customers';
import { MapComponent } from './maps';
import { LoginComponent } from './login';
import { AuthGuard, AuthenticationService } from './auth';
import { PersonalComponent } from './personal';

/*import {
  AppComponent,
  HomeComponent,
  HeaderComponent
} from './'*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    MapComponent,
    LoginComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DataTableModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmjXBxqN3NNXnEr4lhyDH27mfAyPZoZOM'
    })
  ],
  providers: [AuthGuard, AuthenticationService, HeaderEventsManager, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
