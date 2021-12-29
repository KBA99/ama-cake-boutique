import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillmentDetailsComponent } from './fulfillment-details.component';

describe('FulfillmentDetailsComponent', () => {
  let component: FulfillmentDetailsComponent;
  let fixture: ComponentFixture<FulfillmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulfillmentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
