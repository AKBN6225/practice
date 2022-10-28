import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRegistrationFormComponent } from './forms-registration-form.component';

describe('FormsRegistrationFormComponent', () => {
  let component: FormsRegistrationFormComponent;
  let fixture: ComponentFixture<FormsRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
