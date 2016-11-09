import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { EmployeeModel } from '.';

@Injectable()
export class EmployeeService {

  private webApiUrl = 'http://localhost:55419/api/employee';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private router: Router) { }

  public get(params): Promise<EmployeeModel[]> {
    let employees = this.http.get(this.webApiUrl)
                  .toPromise()
                  .then(response => response.json() as EmployeeModel[])
                  .catch(this.handleError);
    return employees;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
