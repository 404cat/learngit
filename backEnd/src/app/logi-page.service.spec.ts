import { TestBed, inject } from '@angular/core/testing';

import { LogiPageService } from './logi-page.service';

describe('LogiPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogiPageService]
    });
  });

  it('should be created', inject([LogiPageService], (service: LogiPageService) => {
    expect(service).toBeTruthy();
  }));
});
