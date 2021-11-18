import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

/*
button parent - has the behaviour for any button
*/
export class ButtonComponent implements OnInit {

  constructor(protected router: Router) { }


  ngOnInit(): void {
  }

  onClick(): void{
      console.log("clicked");
  }

}
