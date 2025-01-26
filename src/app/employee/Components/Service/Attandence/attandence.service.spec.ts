import { TestBed } from '@angular/core/testing';

import { AttandenceService } from './attandence.service';

describe('AttandenceService', () => {
  let service: AttandenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttandenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
