import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCatecory } from './popular-catecory';

describe('PopularCatecory', () => {
  let component: PopularCatecory;
  let fixture: ComponentFixture<PopularCatecory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularCatecory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCatecory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
