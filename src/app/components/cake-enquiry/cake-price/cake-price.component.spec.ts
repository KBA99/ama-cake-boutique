import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakePriceComponent } from './cake-price.component';

describe('CakePriceComponent', () => {
  let component: CakePriceComponent;
  let fixture: ComponentFixture<CakePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
