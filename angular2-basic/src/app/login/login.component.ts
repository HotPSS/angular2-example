import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth';
import { HeaderEventsManager } from '../shared/headerEventManager';
import { LoginModel } from '.';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [HeaderEventsManager]
})
export class LoginComponent implements OnInit {

  public model: LoginModel = new LoginModel();
  public loading: boolean = false;
  public error: string = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private headerEventsManager: HeaderEventsManager) { }

  ngOnInit() {
    this.headerEventsManager.showNavBar.emit(false);
    this.authenticationService.logout();
  }

  login(): void {
    this.loading = true;
    this.authenticationService.login(this.model.Username, this.model.Password)
        .subscribe(result => {
          if (result === true) {
            // login successful
            this.headerEventsManager.showNavBar.emit(true);
            this.router.navigate(['/']);
          } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        });
  }

}
