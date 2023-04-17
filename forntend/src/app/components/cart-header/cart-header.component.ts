import { Component } from '@angular/core';
import {CartService} from "../../Services/cart.service";

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent {

  constructor(public cartService: CartService) {

  }

}
