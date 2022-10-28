import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularServicesModelsComponent } from './angular-services-models.component';

describe('AngularServicesModelsComponent', () => {
  let component: AngularServicesModelsComponent;
  let fixture: ComponentFixture<AngularServicesModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularServicesModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularServicesModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
