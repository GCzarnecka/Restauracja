import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../Model/Dish";
import {CartService} from "../../Services/cart.service";
import {DishService} from "../../Services/dish.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  @Input() dish!: Dish;

  @Input() canModerate = false;
  isLogged: boolean = false;
  canBuy:boolean = false;

  constructor(public cartService: CartService, public dishService: DishService, public userService: UserService) {
    // userService.canModerate().subscribe(canModerate => this.canModerate = canModerate);

  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.isLogged = user != null;
      this.canBuy = user != null && user.role === 'user';
    }
    );
  }
  addToCart(dish: Dish) {
    this.cartService.addToCart(dish);
    dish.quantity--;
  }
  removeFromCart(dish: Dish) {
    this.cartService.removeFromCart(dish);
    dish.quantity++;
  }

  delete(dish: Dish) {
    this.dishService.removeDish(dish).subscribe();
  }

  edit(dish: Dish) {
  }
}
