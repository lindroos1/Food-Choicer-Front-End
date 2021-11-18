import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

/*
button parent - has the behaviour for any button
*/
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
      console.log("clicked");
  }

}
