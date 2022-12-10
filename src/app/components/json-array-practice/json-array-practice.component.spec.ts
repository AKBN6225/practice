import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonArrayPracticeComponent } from './json-array-practice.component';

describe('JsonArrayPracticeComponent', () => {
  let component: JsonArrayPracticeComponent;
  let fixture: ComponentFixture<JsonArrayPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonArrayPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonArrayPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
