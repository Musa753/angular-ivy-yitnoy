import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
 
import { PizzaListComponent} from './pizza-list/pizza-list.component';
import  {PizzaDetailsComponent} from './pizza-details/pizza-details.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PizzaListComponent,PizzaDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
