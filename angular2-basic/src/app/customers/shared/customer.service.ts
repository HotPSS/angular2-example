import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from '../../http-client';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { CustomerModel } from '.';

@Injectable()
export class CustomerService {

  // private webApiUrl = 'http://localhost:55419/api/customer';
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

  getCustomers(): Promise<CustomerModel[]> {
    let customer = this.http.get('/customer')
               .toPromise()
               .then(response => response.json() as CustomerModel[])
               .catch(this.handleError);

    return customer;
  }

  getCustomer(id: number): Promise<CustomerModel> {
    return this.http.get('/customer/' + id)
    .toPromise()
    .then(response => response.json() as CustomerModel)
    .catch(this.handleError);
  }

  create(customerModel: CustomerModel): void {
    this.http.post('/customer', JSON.stringify(customerModel))
    // .map(res => res.json())
    .subscribe(
          (data) => {
            this.router.navigate(['customers']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
  }

  update(customerModel: CustomerModel): void {
    this.http.put('/customer/' + customerModel.Id, JSON.stringify(customerModel))
    .subscribe(
          (data) => {
            this.router.navigate(['customers']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
  }

  delete(id: number): void {
    this.http.delete('/customer/' + id)
    .subscribe(
          (data) => {
            this.router.navigate(['customers']);
          },
          (response: Response) => {
            this.handleError(response);
          }
        );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
