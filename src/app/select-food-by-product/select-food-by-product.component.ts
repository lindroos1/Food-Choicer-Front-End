import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-select-food-by-product',
  templateUrl: './select-food-by-product.component.html',
  styleUrls: ['./select-food-by-product.component.css']
})
export class SelectFoodByProductComponent extends ButtonComponent {

  public formGroup!: FormGroup;
   clicked:boolean = false;

  //ingredients = new FormArray([]);


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
    {
      ingredients: this.formBuilder.array([])
    }
    )
  }

  //redirect to new componenet where popup will accept products and send them to spring 
  onClick(){
    //this.router.navigate(['form']);
    this.clicked = true;
  }
  addIngredient(){
    this.ingredients.push(this.formBuilder.group({ingredients: ''}));
  }
  get ingredients(): FormArray{
    return this.formGroup.get("ingredients") as FormArray;
  }
  searchFood(){
    console.log(this.formGroup.value); 
    console.log(this.ingredients.at(0).value);
    this.foodbyIngrServ.put(this.ingredients.at(0).value).subscribe(

    );
  }

}
