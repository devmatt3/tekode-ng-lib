import { TestBed } from '@angular/core/testing';

import { TekButtonRdService } from './tek-button-rd.service';

describe('TekButtonRdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TekButtonRdService = TestBed.get(TekButtonRdService);
    expect(service).toBeTruthy();
  });
});
