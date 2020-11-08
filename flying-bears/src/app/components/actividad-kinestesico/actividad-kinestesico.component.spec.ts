import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadKinestesicoComponent } from './actividad-kinestesico.component';

describe('ActividadKinestesicoComponent', () => {
  let component: ActividadKinestesicoComponent;
  let fixture: ComponentFixture<ActividadKinestesicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadKinestesicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadKinestesicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
