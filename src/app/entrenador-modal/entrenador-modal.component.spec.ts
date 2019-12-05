import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorModalComponent } from './entrenador-modal.component';

describe('EntrenadorModalComponent', () => {
  let component: EntrenadorModalComponent;
  let fixture: ComponentFixture<EntrenadorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenadorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
