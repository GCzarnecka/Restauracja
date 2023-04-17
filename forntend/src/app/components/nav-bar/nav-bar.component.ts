import { Component } from '@angular/core';
import {CartService} from "../../Services/cart.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  ifAdmin: boolean = false;
  canModerate: boolean = false;
  constructor(public userService: UserService) {
    this.userService.getUser().subscribe(user => this.ifAdmin = user.role === 'admin');
    this.userService.canModerate().subscribe(canModerate => this.canModerate = canModerate);
  }

}
