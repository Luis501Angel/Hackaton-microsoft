import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadVisualComponent } from './actividad-visual.component';

describe('ActividadVisualComponent', () => {
  let component: ActividadVisualComponent;
  let fixture: ComponentFixture<ActividadVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
