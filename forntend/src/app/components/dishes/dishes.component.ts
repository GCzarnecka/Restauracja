import {Component, OnInit} from '@angular/core';
import {Dish} from "../../Model/Dish";
import {DishService} from "../../Services/dish.service";
import {Observable} from "rxjs";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  constructor(private dishService: DishService,private userService: UserService) {

  }

  dishes!: Dish[];
 canModerate = false;


  ngOnInit(): void {
    this.userService.canModerate().subscribe(canModerate => this.canModerate = canModerate);
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

}
