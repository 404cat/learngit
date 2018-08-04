import { TestBed, inject } from '@angular/core/testing';

import { GetSearchInfoService } from './get-search-info.service';

describe('GetSearchInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSearchInfoService]
    });
  });

  it('should be created', inject([GetSearchInfoService], (service: GetSearchInfoService) => {
    expect(service).toBeTruthy();
  }));
});
