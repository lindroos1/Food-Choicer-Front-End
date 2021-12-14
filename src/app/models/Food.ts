import { LoadingListener } from "@clr/angular";
import { Ingredients } from "./Ingredients";



export class Food{
   public id!:number;
   public  ingredients:Ingredients[]  = [];
   public foodName:string = "";
}