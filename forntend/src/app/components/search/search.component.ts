import { Component } from '@angular/core';
import {TYPES, CUISINES, CATEGORIES} from "../../Model/Dish";
import {DishService} from "../../Services/dish.service";
import {SearchService} from "../../Services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  types = TYPES;
  cuisines = CUISINES;
  categories = CATEGORIES;
  cuisine: string = '';
  type: string = '';
  category: string = '';

  constructor(public dishService:DishService, private searchService: SearchService) { }


  onSliderChange($event: number[]) {
    console.log($event);
    this.searchService.setPriceRange($event);

  }

  // cliceked: boolean = false;
  // clicked() {
  //   this.cliceked = !this.cliceked;
  // }
}
