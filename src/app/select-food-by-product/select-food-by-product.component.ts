import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-select-food-by-product',
  templateUrl: './select-food-by-product.component.html',
  styleUrls: ['./select-food-by-product.component.css']
})
export class SelectFoodByProductComponent extends ButtonComponent {


  ngOnInit(): void {
  }

  //redirect to new componenet where popup will accept products and send them to spring 
  onClick(){
    console.log("select food by product clicked!");
  }
}
