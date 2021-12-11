import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { RandomFoodService } from '../random-food.service';


@Component({
  selector: 'app-choose-random-food',
  templateUrl: './choose-random-food.component.html',
  styleUrls: ['./choose-random-food.component.css']
})
export class ChooseRandomFoodComponent extends ButtonComponent {

  ngOnInit(): void {
  }

  //call spring to get random food, send the json to  view food and reddirect its html
  onClick(){
     this.router.navigate(['viewFood']);
  }
}
