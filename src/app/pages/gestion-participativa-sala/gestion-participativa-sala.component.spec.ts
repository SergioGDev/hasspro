import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionParticipativaSalaComponent } from './gestion-participativa-sala.component';

describe('GestionParticipativaSalaComponent', () => {
  let component: GestionParticipativaSalaComponent;
  let fixture: ComponentFixture<GestionParticipativaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionParticipativaSalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionParticipativaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
