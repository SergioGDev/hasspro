import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquisicionEstablecimientosComponent } from './adquisicion-establecimientos.component';

describe('AdquisicionEstablecimientosComponent', () => {
  let component: AdquisicionEstablecimientosComponent;
  let fixture: ComponentFixture<AdquisicionEstablecimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdquisicionEstablecimientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdquisicionEstablecimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
