/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonalService } from './personal.service';

describe('Service: Personalservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalService]
    });
  });

  it('should ...', inject([PersonalService], (service: PersonalService) => {
    expect(service).toBeTruthy();
  }));
});
