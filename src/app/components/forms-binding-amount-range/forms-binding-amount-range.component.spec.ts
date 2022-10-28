import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBindingAmountRangeComponent } from './forms-binding-amount-range.component';

describe('FormsBindingAmountRangeComponent', () => {
  let component: FormsBindingAmountRangeComponent;
  let fixture: ComponentFixture<FormsBindingAmountRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBindingAmountRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsBindingAmountRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
