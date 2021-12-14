import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodByIngredientsService } from '../food-by-ingredients.service';
import { RandomFoodService } from '../random-food.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

/*
button parent - has the behaviour for any button
*/
export class ButtonComponent implements OnInit {

 //protected clicked:boolean = false;


  constructor(protected formBuilder: FormBuilder, protected router: Router,
     protected randomFoodService:RandomFoodService,
     protected foodbyIngrServ:FoodByIngredientsService) { }


  ngOnInit(): void {
  }

  onClick(): void{
      console.log("clicked");
  }


}
