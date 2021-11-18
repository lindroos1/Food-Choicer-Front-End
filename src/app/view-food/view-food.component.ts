import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-food',
  templateUrl: './view-food.component.html',
  styleUrls: ['./view-food.component.css']
})
export class ViewFoodComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  back():void{
      this.router.navigate(['buttons']);
  }

}
