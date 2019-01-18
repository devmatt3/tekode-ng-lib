import { TestBed } from '@angular/core/testing';

import { TekInputService } from './tek-input.service';

describe('TekInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TekInputService = TestBed.get(TekInputService);
    expect(service).toBeTruthy();
  });
});
