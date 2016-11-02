import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderEventsManager {
    public showNavBar: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor() {

    }
}