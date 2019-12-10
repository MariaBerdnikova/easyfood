import { TestBed } from '@angular/core/testing';

import { AddReceptService } from './add-recept.service';

describe('AddReceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddReceptService = TestBed.get(AddReceptService);
    expect(service).toBeTruthy();
  });
});
