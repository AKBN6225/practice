import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCountryListComponent } from './routing-country-list.component';

describe('RoutingCountryListComponent', () => {
  let component: RoutingCountryListComponent;
  let fixture: ComponentFixture<RoutingCountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingCountryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
