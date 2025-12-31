import { TestBed } from '@angular/core/testing';

import { Categoriy } from './categoriy';

describe('Categoriy', () => {
  let service: Categoriy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categoriy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
