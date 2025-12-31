import { TestBed } from '@angular/core/testing';

import { Detais } from './detais';

describe('Detais', () => {
  let service: Detais;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Detais);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
