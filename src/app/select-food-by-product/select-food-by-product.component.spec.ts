import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFoodByProductComponent } from './select-food-by-product.component';

describe('SelectFoodByProductComponent', () => {
  let component: SelectFoodByProductComponent;
  let fixture: ComponentFixture<SelectFoodByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFoodByProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFoodByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
