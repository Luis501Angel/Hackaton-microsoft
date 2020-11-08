import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAuditivoComponent } from './actividad-auditivo.component';

describe('ActividadAuditivoComponent', () => {
  let component: ActividadAuditivoComponent;
  let fixture: ComponentFixture<ActividadAuditivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadAuditivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAuditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
