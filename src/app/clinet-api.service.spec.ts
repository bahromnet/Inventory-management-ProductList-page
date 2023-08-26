import { TestBed } from '@angular/core/testing';

import { ClinetApiService } from './clinet-api.service';

describe('ClinetApiService', () => {
  let service: ClinetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
