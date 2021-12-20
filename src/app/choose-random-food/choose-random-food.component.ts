import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';
import { RandomFoodService } from '../random-food.service';
import { Food } from '../models/Food';
import gsap from 'gsap/all';
import { TableComponent } from '../table/table.component';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-choose-random-food',
  templateUrl: './choose-random-food.component.html',
  styleUrls: ['./choose-random-food.component.css']
})
export class ChooseRandomFoodComponent extends ButtonComponent {

  food: Food[] = [];
  //@Output() clicked = new EventEmitter<boolean>();


  //if we subscribe to the service here, we will get random food per refresh, not per click
  ngOnInit(): void {
    gsap.timeline(
      {
        defaults:{
          duration:5
        }
      }
    ).to(".button2", {
      x: -500,
      y: 180,
      scale: 2,
      ease: "back"
    })
  }


  //call spring to get random food
  onClick(){
    this.clicked = true;
    this.randomFoodService.get().subscribe( data =>{
      this.food[0] = data;
    });
    // this.router.navigate(['viewFood']);
  }

 
}
