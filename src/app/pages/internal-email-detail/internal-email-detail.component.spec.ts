import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEmailDetailComponent } from './internal-email-detail.component';

describe('InternalEmailDetailComponent', () => {
  let component: InternalEmailDetailComponent;
  let fixture: ComponentFixture<InternalEmailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEmailDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalEmailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
