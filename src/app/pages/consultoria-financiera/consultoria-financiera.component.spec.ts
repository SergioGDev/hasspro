import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultoriaFinancieraComponent } from './consultoria-financiera.component';

describe('ConsultoriaFinancieraComponent', () => {
  let component: ConsultoriaFinancieraComponent;
  let fixture: ComponentFixture<ConsultoriaFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultoriaFinancieraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultoriaFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
