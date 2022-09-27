import { Component } from '@angular/core';
import { Pizza, pizzas } from '../pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent {
  Pizzas = pizzas;
}
