import { TestBed } from '@angular/core/testing';

import { AddtitleService } from './addtitle.service';

describe('AddtitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtitleService = TestBed.get(AddtitleService);
    expect(service).toBeTruthy();
  });
});
