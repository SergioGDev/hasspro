import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreHassproComponent } from './sobre-hasspro.component';

describe('SobreHassproComponent', () => {
  let component: SobreHassproComponent;
  let fixture: ComponentFixture<SobreHassproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreHassproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreHassproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
