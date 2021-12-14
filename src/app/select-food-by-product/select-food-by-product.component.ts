import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Food } from '../models/Food';

@Component({
  selector: 'app-select-food-by-product',
  templateUrl: './select-food-by-product.component.html',
  styleUrls: ['./select-food-by-product.component.css']
})
export class SelectFoodByProductComponent extends ButtonComponent {

  public formGroup!: FormGroup;
  public food:Food[] = [];



  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
    {
      ingredients: this.formBuilder.array([
      ])
    }
    )
  }

  //redirect to new componenet where popup will accept products and send them to spring 
  onClick(){
    //this.router.navigate(['form']);
    this.clicked = true;
  }
  addIngredient(){
    this.ingredients.push(this.formBuilder.control(''));
  }
  get ingredients(): FormArray{
    return this.formGroup.get("ingredients") as FormArray;
  }
  searchFood(){
    console.log(this.ingredients.value);
    this.foodbyIngrServ.put(this.ingredients.value).subscribe(
      data=>{
        this.food = data;
       }
    );
  }

}
