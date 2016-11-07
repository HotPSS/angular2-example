import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '../http-client';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    // public webApiUrl: string = 'http://192.168.10.3:7777/api/gettoken';
    // private headers = new Headers({'Content-Type': 'application/json'});
    // private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    public token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        // let body = `username=${username}&password=${password}`;
        return this.http.getToken('/gettoken',  JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().access_token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
