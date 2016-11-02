import { Component } from '@angular/core';

import { AuthGuard } from './auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hidenHeader: boolean = !this.authGuard.canActivate();

  constructor(private authGuard: AuthGuard) { }
}
