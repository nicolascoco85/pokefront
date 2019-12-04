import { TestBed } from '@angular/core/testing';

import { PokemonesService } from './pokemones.service';

describe('PokemonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonesService = TestBed.get(PokemonesService);
    expect(service).toBeTruthy();
  });
});
