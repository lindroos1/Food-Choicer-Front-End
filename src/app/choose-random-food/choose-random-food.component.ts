import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { RandomFoodService } from '../random-food.service';
import { Food } from '../models/Food';


@Component({
  selector: 'app-choose-random-food',
  templateUrl: './choose-random-food.component.html',
  styleUrls: ['./choose-random-food.component.css']
})
export class ChooseRandomFoodComponent extends ButtonComponent {

  food!: Food;
 


  //if we subscribe to the service here, we will get random food per refresh, not per click
  ngOnInit(): void {
  }


  //call spring to get random food
  onClick(){
    this.clicked = true;
    this.randomFoodService.get().subscribe( data =>{
      this.food = data;
      console.log(this.food.foodName);
    });
    // this.router.navigate(['viewFood']);
  }

 
}
