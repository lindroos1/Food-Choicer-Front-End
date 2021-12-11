import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './models/Food';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodService {

  url: string = 'http://localhost:8080/getRandomFood';
  
  constructor(private htpp: HttpClient){
  }

 
  public get():Observable<Food>{
      return this.htpp.get<Food>(this.url);
      }

}
