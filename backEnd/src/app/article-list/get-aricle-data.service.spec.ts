import { TestBed, inject } from '@angular/core/testing';

import { GetAricleDataService } from './get-aricle-data.service';

describe('GetAricleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAricleDataService]
    });
  });

  it('should be created', inject([GetAricleDataService], (service: GetAricleDataService) => {
    expect(service).toBeTruthy();
  }));
});
