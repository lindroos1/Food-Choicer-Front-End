import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Food } from '../models/Food';
import gsap from "gsap";

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent extends ButtonComponent {


  food: Food = new Food;
  requestSent:boolean = false;
  alertText:string = "success"
 

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        foodName:this.formBuilder.control(''),
        ingredients: this.formBuilder.array([
        ])
      }
      );
      gsap.timeline({
       
        defaults: {
          duration: 5
        }
      })
      .to(".button", {
        x: -500,
        y: 200,
        scale: 2,
        ease: "back"
      })
      
      }

 get getIngredients():FormArray{
    return this.formGroup.get("ingredients") as FormArray;
  }

  get FoodName():string{
    return this.formGroup.get("foodName")?.value;
  }

  addIngredient(){
    this.getIngredients.push(//this.formBuilder.control('')
    this.formBuilder.group({ingredients:''}))
  }

  addFood(){
    //get the name from the model and assing in to the food.foodName
    this.food.foodName = this.FoodName;
    for(let ite of this.getIngredients.controls){
      this.food.ingredients.push(ite.value);
      console.log("values from ingr: ", this.food.ingredients[0])
    }
    //get all ingredients from the array and put them in food.ingredients
    this.addFoodService.putFood(this.FoodName, this.getIngredients.value).subscribe(
    ((value:any)=>{  this.requestSent=true}),
    ((error:Error)=>
    {
      this.alertText = "error"
    }))

  
  }
 
}
