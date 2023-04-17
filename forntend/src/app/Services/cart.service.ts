import { Injectable } from '@angular/core';
import {Dish} from "../Model/Dish";
import {debounceTime, distinctUntilChanged, of, switchMap, tap} from "rxjs";
import {UserService} from "./user.service";
import { User } from '../Model/User';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private userService: UserService) {
  }

  dishes = new Map<Dish, number>();

  addToCart(dish: Dish) {
    this.dishes.set(dish, this.getNumberOfDishes(dish) + 1);

    this.userService.getUser().subscribe((user: User) => {
      user.cart = [...this.dishes].map(([dish, quantity]) => ({ dish: dish, quantity: quantity }));
      //
      // user.role = 'aaa';

      console.log('hah',user);

      this.userService.updateUser(user).subscribe();
    })
  }

  removeFromCart(dish: Dish) {
    this.dishes.set(dish, this.getNumberOfDishes(dish) - 1);
  }

  getNumberOfDishes(dish: Dish) {
    return this.dishes.get(dish) ?? 0;
  }

  getNumberOfDishesInCart() {
    return this.dishes.size;
  }

  getTotalPrice() {
    let sum = 0;
    this.dishes.forEach((value, key) => sum += value * key.price);
    return sum;
  }

  getTotalPriceForDish(dish: Dish) {
    return this.getNumberOfDishes(dish) * dish.price;
  }

  getDishes() {
    return of(Array.from(this.dishes.keys()));
  }

  getTotalNumberOfDishes() {
    let sum = 0;
    this.dishes.forEach((value, key) => sum += value);
    return sum;
  }

  buy() {
    // this.dishes.set(dish, this.getNumberOfDishes(dish) + 1);

    this.userService.getUser().subscribe((user: User) => {
      // user.orders = [...this.dishes].map(([dish, quantity]) => ({ dish: dish,
      //   quantity: quantity,
      //   price: dish.price,
      //   date: new Date().toISOString().slice(0, 10) }));
      user.orders.push({dishes: user.cart , date: new Date(), total: this.getTotalPrice()});

      console.log('hah',user);

      // this.userService.updateUser(user).subscribe();
      this.userService
        .newOrder({dishes: user.cart , date: new Date(), total: this.getTotalPrice()}).subscribe();
      this.dishes.clear();

      this.userService.getUser().subscribe((user: User) => {
        user.cart = [];
        this.userService.updateUser(user).subscribe();
      })
    })
  }

}
