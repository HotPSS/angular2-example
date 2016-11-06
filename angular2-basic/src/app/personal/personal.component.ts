import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-2-data-table';

import { MockedPersonalModel } from './shared';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  itemResource = new DataTableResource(MockedPersonalModel);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    ngOnInit() {

    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }

}
