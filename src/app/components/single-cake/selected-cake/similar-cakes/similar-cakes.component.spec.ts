import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCakesComponent } from './similar-cakes.component';

describe('SimilarCakesComponent', () => {
  let component: SimilarCakesComponent;
  let fixture: ComponentFixture<SimilarCakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarCakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
