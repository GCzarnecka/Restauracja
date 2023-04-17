import {Component, Input, OnInit} from '@angular/core';
import {Dish, Review} from "../../Model/Dish";
import {DishService} from "../../Services/dish.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {CartService} from "../../Services/cart.service";
@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  constructor(private dishService: DishService, private route: ActivatedRoute,
              public userService: UserService, public cartService: CartService) {

  }

  dish!: Dish;
  review: Review = {title: "", rating: 1, review: "", nickname: ""};
  ifBought?: boolean = true;
  banned = false;
  canBuy:boolean = false;

  addToCart(dish: Dish) {
    this.cartService.addToCart(dish);
    this.dish.quantity--;
  }


  ngOnInit(): void {
    this.dishService.getOneDish(this.route.snapshot.params['id'].substring(1))
      .subscribe(dish => {
        this.dish = dish
        this.userService.hasBoughtDish(dish).subscribe(x => this.ifBought = x);
        this.userService.getUser().subscribe(user => this.banned = user.banned);
      });
    this.userService.getUser().subscribe(user => {
        // this.isLogged = user != null;
        this.canBuy = user != null && user.role === 'user';
      }
    );
  }

  addReview() {
    this.userService.getUser().subscribe(user => {
      this.review.nickname = user.username
      this.dishService.addReview(this.dish._id, this.review).subscribe(x => this.dish = x);
      this.review = {title: "", rating: 1, review: "", nickname: ""};
    });
  }

  removeFromCart(dish: Dish) {
    this.cartService.removeFromCart(dish);
    this.dish.quantity++;
  }
}
