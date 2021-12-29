import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfCakeComponent } from './types-of-cake.component';

describe('TypesOfCakeComponent', () => {
  let component: TypesOfCakeComponent;
  let fixture: ComponentFixture<TypesOfCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesOfCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
