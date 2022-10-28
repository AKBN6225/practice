import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventsHandlingProductItemsComponent } from './data-binding-events-handling-product-items.component';

describe('DataBindingEventsHandlingProductItemsComponent', () => {
  let component: DataBindingEventsHandlingProductItemsComponent;
  let fixture: ComponentFixture<DataBindingEventsHandlingProductItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingEventsHandlingProductItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingEventsHandlingProductItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
