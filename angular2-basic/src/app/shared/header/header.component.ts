import { Component, OnInit } from '@angular/core';

import { HeaderEventsManager } from '../headerEventManager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showNavBar: boolean = true;

  constructor(private headerEventsManager: HeaderEventsManager) {

   }

  ngOnInit() {
    this.headerEventsManager.showNavBar.subscribe((mode) => {
      this.showNavBar = mode;
    });
  }

}
