import {Dish} from "./Dish";

export interface Order {
  // _id: string;
  total: number;
  dishes: {dish: Dish, quantity: number}[];
  date: Date;

}
