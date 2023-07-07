import { TestBed } from '@angular/core/testing';

import { OfferpercentageService } from './offerpercentage.service';

describe('OfferpercentageService', () => {
  let service: OfferpercentageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferpercentageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
