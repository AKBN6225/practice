import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventsHandlingShopingCartComponent } from './data-binding-events-handling-shoping-cart.component';

describe('DataBindingEventsHandlingShopingCartComponent', () => {
  let component: DataBindingEventsHandlingShopingCartComponent;
  let fixture: ComponentFixture<DataBindingEventsHandlingShopingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingEventsHandlingShopingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingEventsHandlingShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
