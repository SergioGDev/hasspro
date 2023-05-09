import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEmailListComponent } from './internal-email-list.component';

describe('InternalEmailListComponent', () => {
  let component: InternalEmailListComponent;
  let fixture: ComponentFixture<InternalEmailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalEmailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalEmailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
