import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingNavBarComponent } from './routing-nav-bar.component';

describe('RoutingNavBarComponent', () => {
  let component: RoutingNavBarComponent;
  let fixture: ComponentFixture<RoutingNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
