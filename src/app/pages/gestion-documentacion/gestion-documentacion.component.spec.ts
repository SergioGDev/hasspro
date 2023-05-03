import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDocumentacionComponent } from './gestion-documentacion.component';

describe('GestionDocumentacionComponent', () => {
  let component: GestionDocumentacionComponent;
  let fixture: ComponentFixture<GestionDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDocumentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
