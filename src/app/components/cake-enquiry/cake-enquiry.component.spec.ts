import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeEnquiryComponent } from './cake-enquiry.component';

describe('CakeEnquiryComponent', () => {
  let component: CakeEnquiryComponent;
  let fixture: ComponentFixture<CakeEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeEnquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
