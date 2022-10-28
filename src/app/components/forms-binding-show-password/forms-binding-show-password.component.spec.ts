import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBindingShowPasswordComponent } from './forms-binding-show-password.component';

describe('FormsBindingShowPasswordComponent', () => {
  let component: FormsBindingShowPasswordComponent;
  let fixture: ComponentFixture<FormsBindingShowPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBindingShowPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsBindingShowPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
