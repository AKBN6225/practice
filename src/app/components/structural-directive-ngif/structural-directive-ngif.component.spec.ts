import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgifComponent } from './structural-directive-ngif.component';

describe('StructuralDirectiveNgifComponent', () => {
  let component: StructuralDirectiveNgifComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
