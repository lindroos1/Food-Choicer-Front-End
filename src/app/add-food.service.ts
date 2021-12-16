import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFoodService {

  url: string = 'http://localhost:8080/addFood';
  // headers = new Headers();
  
  constructor(private htpp: HttpClient){
  }


  putFood(food:any, ingr:any):Observable<any>{
    return this.htpp.post(this.url, 
      {
        foodName:food, 
        ingredients:ingr
      });
  }
}
