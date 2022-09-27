import { Component } from '@angular/core';
 import { Pizza, pizzas } from '../pizza';

@Component({
  selector: 'app-pizza-details',
  template: 'pizza',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent {
  Pizzas = pizzas;
}