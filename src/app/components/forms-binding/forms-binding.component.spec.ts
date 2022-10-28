import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBindingComponent } from './forms-binding.component';

describe('FormsBindingComponent', () => {
  let component: FormsBindingComponent;
  let fixture: ComponentFixture<FormsBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
