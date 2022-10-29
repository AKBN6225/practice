import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCountryDetailsComponent } from './routing-country-details.component';

describe('RoutingCountryDetailsComponent', () => {
  let component: RoutingCountryDetailsComponent;
  let fixture: ComponentFixture<RoutingCountryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingCountryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingCountryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
