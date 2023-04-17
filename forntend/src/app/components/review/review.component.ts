import {Component, Input} from '@angular/core';
import {Review} from "../../Model/Dish";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
@Input() review!: Review;//{title: "title", rating: 5, review: "review", nickname: "nickname"};
}
