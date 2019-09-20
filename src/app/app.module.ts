import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { HelloComponent } from './hello.component';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,   CarsComponent,
    CarComponent,
    AddCarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
