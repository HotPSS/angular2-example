import { Component, OnInit } from '@angular/core';

import { MapModel, MockedMapModel } from '../shared';

@Component({
  selector: 'app-map',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapComponent implements OnInit {

  public lat: number = 13.8372169;
  public lng: number = 100.6703436;
  public zoom: number = 10;
  public markers: MapModel[];

  constructor() { }

  ngOnInit() {
    this.getPoint();
  }

  public getPoint(): void {
    this.markers = MockedMapModel;
  }

  public markerDragEnd(m: MapModel, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  public clickedMarker(label: string, index: number): void {

  }
}
