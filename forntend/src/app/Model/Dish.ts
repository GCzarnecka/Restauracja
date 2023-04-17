

export enum DishType {
  Vegan = 'Vegan',
  Vegetarian = 'Vegetarian',
  Meat = 'Meat',
  Fish = 'Fish',
  Other = 'Other'
}

export enum DishCategory {
  Appetizer = 'Appetizer',
  Main = 'Main',
  Dessert = 'Dessert',
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Soup = 'Soup',
  Salad = 'Salad',
  Supper = 'Supper',
  Side = 'Side',
  Other = 'Other',
}

export enum DishCuisine {
  Indian = 'Indian',
  Italian = 'Italian',
  American = 'American',
  Japanese = 'Japanese',
  Mexican = 'Mexican',
  Other = 'Other',

}

export interface Dish {
  _id: string;
  name: string;
  images: string[];
  cuisine: string;
  category: string;
  type: string;
  price: number;
  description: string;
  quantity: number;
  reviews?: Review[];

  ingredients: string[];
}
export interface Review {
  // id: string;
  title: string;
  rating: number;
  review: string;
  nickname: string;
}

export const TYPES: string[] = ['soup', 'appetizer', 'salad', 'main course', 'dessert']
export const CATEGORIES: string[] = ["vegan", "vegetarian", "meat", "fish", "gluten-free", "lactose-free"];
export const CUISINES = ["American", "Chinese", "French", "Greek", "Indian", "Italian", "Japanese", "Mexican", "Thai", "Vietnamese"];

