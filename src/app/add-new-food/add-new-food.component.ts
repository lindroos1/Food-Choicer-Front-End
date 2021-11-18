import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent extends ButtonComponent {

  ngOnInit(): void {
  }

  onClick(){
    console.log("add new food clicked!");
  }
}
