import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRandomFoodComponent } from './choose-random-food.component';

describe('ChooseRandomFoodComponent', () => {
  let component: ChooseRandomFoodComponent;
  let fixture: ComponentFixture<ChooseRandomFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseRandomFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRandomFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
