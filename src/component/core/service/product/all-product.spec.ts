import { TestBed } from '@angular/core/testing';

import { AllProduct } from './all-product';

describe('AllProduct', () => {
  let service: AllProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
