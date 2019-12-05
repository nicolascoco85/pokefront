import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorestableComponent } from './entrenadorestable.component';

describe('EntrenadorestableComponent', () => {
  let component: EntrenadorestableComponent;
  let fixture: ComponentFixture<EntrenadorestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenadorestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
