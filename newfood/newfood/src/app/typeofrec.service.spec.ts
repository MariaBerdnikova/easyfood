import { TestBed } from '@angular/core/testing';

import { TypeofrecService } from './typeofrec.service';

describe('TypeofrecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeofrecService = TestBed.get(TypeofrecService);
    expect(service).toBeTruthy();
  });
});
