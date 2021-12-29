import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeTypesComponent } from './cake-types.component';

describe('CakeTypesComponent', () => {
  let component: CakeTypesComponent;
  let fixture: ComponentFixture<CakeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
