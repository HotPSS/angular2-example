import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth';
import { LoginModel } from '.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: LoginModel = new LoginModel();
  public loading: boolean = false;
  public error: string = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login(): void {
    this.loading = true;
    this.authenticationService.login(this.model.Username, this.model.Password)
        .subscribe(result => {
          if (result === true) {
            // login successful
            this.router.navigate(['/']);
          } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        });
  }

}
