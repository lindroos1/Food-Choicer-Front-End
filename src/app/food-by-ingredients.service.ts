import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodByIngredientsService {

  url: string = 'http://localhost:8080/getFoodByIngredients';
  // headers = new Headers();
  
  constructor(private htpp: HttpClient){
  }

 
  public put(ingr:any):Observable<Food[]>{
    console.log(ingr);
      return this.htpp.post<any>(this.url, ingr);
      }
}
