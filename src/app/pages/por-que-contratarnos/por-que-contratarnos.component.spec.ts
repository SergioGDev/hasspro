import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorQueContratarnosComponent } from './por-que-contratarnos.component';

describe('PorQueContratarnosComponent', () => {
  let component: PorQueContratarnosComponent;
  let fixture: ComponentFixture<PorQueContratarnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorQueContratarnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorQueContratarnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
