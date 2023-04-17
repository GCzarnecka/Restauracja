import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../../Model/Dish";
import {DishService} from "../../Services/dish.service";
import {TYPES, CATEGORIES, CUISINES} from "../../Model/Dish";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  TYPES = TYPES;
  CATEGORIES = CATEGORIES;
  CUISINES = CUISINES;

  constructor(private dishService: DishService, private route: ActivatedRoute,
              private location: Location) {

  }

  dish! : Dish;
    ingredients: string = "";
  addDish() {
    this.dish.ingredients = this.ingredients.split(",");
    if(this.editDish) {
      this.dishService.editDish(this.dish).subscribe();
    }
    else{
      this.dishService.addDish(this.dish).subscribe();
    }
    this.location.back();
  }
  editDish: boolean = true;

  ngOnInit(): void {
    console.log("TYPES",this.TYPES);

    const id = this.route.snapshot.params['id'];

    if(id) {
      this.dishService.getOneDish(id.substring(1))
        .subscribe(dish => this.dish = dish);
    }else {
      if(!this.dish) {
        this.editDish = false;
        this.dish = {_id:"", quantity:0, name: "", price: 0, type: "", category: "", cuisine: "",
          ingredients: [], description: "", images: []};
      }
    }

  }
}
