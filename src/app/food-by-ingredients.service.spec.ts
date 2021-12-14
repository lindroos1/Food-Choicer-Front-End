import { TestBed } from '@angular/core/testing';

import { FoodByIngredientsService } from './food-by-ingredients.service';

describe('FoodByIngredientsService', () => {
  let service: FoodByIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodByIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
