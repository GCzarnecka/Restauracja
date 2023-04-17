import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Order} from "../../Model/Order";
import {DishService} from "../../Services/dish.service";
import {Dish} from "../../Model/Dish";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = '';
  history?: Order[] = [];
  constructor(public userService: UserService, public dishService: DishService) {
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.username = user.username;
      this.history = user.orders;
    })
    }

  getDate(date: Date) {
    return new Date(date).toLocaleString();
  }
}
