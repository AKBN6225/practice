import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBindingSmsAppComponent } from './forms-binding-sms-app.component';

describe('FormsBindingSmsAppComponent', () => {
  let component: FormsBindingSmsAppComponent;
  let fixture: ComponentFixture<FormsBindingSmsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBindingSmsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsBindingSmsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
