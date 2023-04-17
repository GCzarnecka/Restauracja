import {Component, OnInit} from '@angular/core';
import {CartService} from "../../Services/cart.service";
import {Dish} from "../../Model/Dish";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Dish[] = [];

  ngOnInit(): void {
    this.cartService.getDishes().subscribe(dishes => this.items = dishes);
  }

  constructor(public cartService: CartService) {
  }

  buy() {
    this.cartService.buy();
  }
}
