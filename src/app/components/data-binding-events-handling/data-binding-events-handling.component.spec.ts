import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventsHandlingComponent } from './data-binding-events-handling.component';

describe('DataBindingEventsHandlingComponent', () => {
  let component: DataBindingEventsHandlingComponent;
  let fixture: ComponentFixture<DataBindingEventsHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingEventsHandlingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingEventsHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
