import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Food } from '../models/Food';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

 @Input() public food:Food[] = [];
 @Input() public clicked:boolean = false;
 @Input() public clickedSelect:boolean = false;

  
  constructor(){}
  ngOnInit(): void {
  }

  public setFood(food:Food[]):void{
    this.food = food;
  }

  close(): void{
    this.clicked = false;
  }

}
