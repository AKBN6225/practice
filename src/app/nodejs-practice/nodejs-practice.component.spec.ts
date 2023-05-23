import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsPracticeComponent } from './nodejs-practice.component';

describe('NodejsPracticeComponent', () => {
  let component: NodejsPracticeComponent;
  let fixture: ComponentFixture<NodejsPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodejsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
