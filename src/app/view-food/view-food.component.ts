import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../models/Food';
import { RandomFoodService } from '../random-food.service';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements OnInit {

  constructor(private router:Router, private randomFoodService:RandomFoodService) { }

  food!: Food;


  ngOnInit(): void {
      this.randomFoodService.get().subscribe( data =>{
        this.food = data;
        console.log(this.food.foodName);
      });
  }

  back():void{
      this.router.navigate(['buttons']);
  }

}
