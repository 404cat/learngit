import { TestBed, inject } from '@angular/core/testing';

import { GetSingleDataService } from './get-single-data.service';

describe('GetSingleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSingleDataService]
    });
  });

  it('should be created', inject([GetSingleDataService], (service: GetSingleDataService) => {
    expect(service).toBeTruthy();
  }));
});
