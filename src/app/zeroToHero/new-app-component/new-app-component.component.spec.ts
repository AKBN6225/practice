import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppComponentComponent } from './new-app-component.component';

describe('NewAppComponentComponent', () => {
  let component: NewAppComponentComponent;
  let fixture: ComponentFixture<NewAppComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAppComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
