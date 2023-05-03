import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloEstablecimientosComponent } from './desarrollo-establecimientos.component';

describe('DesarrolloEstablecimientosComponent', () => {
  let component: DesarrolloEstablecimientosComponent;
  let fixture: ComponentFixture<DesarrolloEstablecimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloEstablecimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloEstablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
