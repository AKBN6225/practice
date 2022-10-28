import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWithServerHTTPConnectionComponent } from './angular-with-server-httpconnection.component';

describe('AngularWithServerHTTPConnectionComponent', () => {
  let component: AngularWithServerHTTPConnectionComponent;
  let fixture: ComponentFixture<AngularWithServerHTTPConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWithServerHTTPConnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularWithServerHTTPConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
