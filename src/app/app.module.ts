import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ButtonComponent } from './button/button.component';
import { ChooseRandomFoodComponent } from './choose-random-food/choose-random-food.component';
import { SelectFoodByProductComponent } from './select-food-by-product/select-food-by-product.component';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { ViewFoodComponent } from './view-food/view-food.component';
import { HolderComponent } from './holder/holder.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ChooseRandomFoodComponent,
    SelectFoodByProductComponent,
    AddNewFoodComponent,
    ViewFoodComponent,
    HolderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    ClarityModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
