import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAboutComponent } from './routing-about.component';

describe('RoutingAboutComponent', () => {
  let component: RoutingAboutComponent;
  let fixture: ComponentFixture<RoutingAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
