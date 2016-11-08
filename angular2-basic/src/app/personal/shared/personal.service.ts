import { Injectable } from '@angular/core';
import { HttpClient } from '../../http-client';
import { DataTableParams } from 'angular-2-data-table';

import 'rxjs/add/operator/toPromise';

import { PersonalModel } from '.';
import { DataTableQueryString } from '../../helper';

@Injectable()
export class PersonalService {

  private queryString: DataTableQueryString = new DataTableQueryString();

  constructor(private http: HttpClient) { }

  get(params: DataTableParams): Promise<PersonalModel[]> {
    console.log(this.queryString.paramsToQueryString(params));
    return this.http.get('/personal')
      .toPromise()
      .then(response => response.json() as PersonalModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
