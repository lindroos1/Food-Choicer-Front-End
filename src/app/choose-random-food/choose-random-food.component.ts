import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-choose-random-food',
  templateUrl: './choose-random-food.component.html',
  styleUrls: ['./choose-random-food.component.css']
})
export class ChooseRandomFoodComponent extends ButtonComponent {


  ngOnInit(): void {
  }

  //call spring to get random food
  onClick(){
    console.log("overwritten!");
  }
}
