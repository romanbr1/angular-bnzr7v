import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];

  dates=[
    new Date(2015,3,4),
    new Date(2014,4,2),
    new Date(2013,7,1),
    new Date(2011,9,11)
  ]
  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }

}