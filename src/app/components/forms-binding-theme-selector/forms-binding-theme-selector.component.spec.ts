import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBindingThemeSelectorComponent } from './forms-binding-theme-selector.component';

describe('FormsBindingThemeSelectorComponent', () => {
  let component: FormsBindingThemeSelectorComponent;
  let fixture: ComponentFixture<FormsBindingThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBindingThemeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsBindingThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
