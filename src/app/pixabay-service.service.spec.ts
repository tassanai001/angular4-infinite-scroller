/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PixabayServiceService } from './pixabay-service.service';

describe('PixabayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixabayServiceService]
    });
  });

  it('should ...', inject([PixabayServiceService], (service: PixabayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
