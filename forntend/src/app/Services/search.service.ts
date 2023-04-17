import {Injectable} from '@angular/core';
import {CATEGORIES, CUISINES, Dish, TYPES} from "../Model/Dish";
import {Observable, Subject, switchMap, tap} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {DishService} from "./dish.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  // $cuisine!: Observable<string>
  // watchCuisine = new Subject<any>;


  cuisines: string[] = [];
  types: string[] = [];
  categories: string[] = [];
  priceRange: number[] = [];

  updateParams() {
    let params = new HttpParams();
    if (this.cuisines.length > 0) {
      this.cuisines.forEach(c => {
        params = params.append('cuisine', c);
      })
    }
    if (this.types.length > 0) {
      this.types.forEach(t => {
        params = params.append('type', t);
      })
    }
    if (this.categories.length > 0) {
      this.categories.forEach(c => {
        params = params.append('category', c);
      })
    }
    if (this.priceRange.length > 0) {
      params = params.append('minPrice', this.priceRange[0].toString());
      params = params.append('maxPrice', this.priceRange[1].toString());
    }
    this.dishService.updateParams(params);

  }

  // params = new HttpParams().set('cuisine', this.cuisines.join('&cuisine=')).
  // set('types', this.types.join(',')).set('categories', this.categories.join(','));
  //

  setCuisines(cuisine: string[]) {
    this.cuisines = cuisine;
    this.updateParams();
  }

  setTypes(type: string[]) {
    this.types = type;
    this.updateParams();
  }

  setCategories(category: string[]) {
    this.categories = category;
    this.updateParams();
  }

  setPriceRange($event: number[]) {
    this.priceRange = $event;
    this.updateParams();
  }

  constructor(private dishService: DishService) {
  }
}
