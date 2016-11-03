import { Component, OnInit } from '@angular/core';

import { HeaderEventsManager } from '../headerEventManager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderEventsManager]
})
export class HeaderComponent implements OnInit {

  public showNavBar: boolean = false;

  constructor(private headerEventsManager: HeaderEventsManager) {

   }

  ngOnInit() {
    this.headerEventsManager.showNavBar.subscribe((mode) => {
      console.log(mode);
      this.showNavBar = mode;
    });
  }

}
