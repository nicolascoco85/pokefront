import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefilterComponent } from './pokefilter.component';

describe('PokefilterComponent', () => {
  let component: PokefilterComponent;
  let fixture: ComponentFixture<PokefilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokefilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
