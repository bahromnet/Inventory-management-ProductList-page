import { TestBed } from '@angular/core/testing';

import { ProductTypeServiceService } from './product-type-service.service';

describe('ProductTypeServiceService', () => {
  let service: ProductTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
