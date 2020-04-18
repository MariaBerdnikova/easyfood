import { TestBed } from '@angular/core/testing';

import { AddingradientService } from './addingradient.service';

describe('AddingradientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddingradientService = TestBed.get(AddingradientService);
    expect(service).toBeTruthy();
  });
});
