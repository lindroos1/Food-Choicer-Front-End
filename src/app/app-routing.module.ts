import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolderComponent } from './holder/holder.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { ViewFoodComponent } from './view-food/view-food.component';

const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
 { path: 'viewFood', component:ViewFoodComponent},
 { path: 'buttons', component:HolderComponent},
 {path: 'form', component:IngredientFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
