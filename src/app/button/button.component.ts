import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddFoodService } from '../add-food.service';
import { FoodByIngredientsService } from '../food-by-ingredients.service';
import { RandomFoodService } from '../random-food.service';
import { TableComponent } from '../table/table.component';

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
  public clicked:boolean = false;
  public formGroup!: FormGroup;


  constructor(protected formBuilder: FormBuilder, protected router: Router,
     protected randomFoodService:RandomFoodService,
     protected foodbyIngrServ:FoodByIngredientsService,
     protected addFoodService:AddFoodService,
     ) { }


  ngOnInit(): void {
  }

  onClick(): void{
    this.clicked = true;
  }


  close(): void{
    this.clicked = false;
  }
}
