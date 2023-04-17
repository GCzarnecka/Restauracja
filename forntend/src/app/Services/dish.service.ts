import {Injectable, OnInit} from '@angular/core';
import {Dish, Review} from "../Model/Dish";
import {DISHES} from "../wywal";
import {catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap, tap} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SearchService} from "./search.service";

@Injectable({
  providedIn: 'root'
})
export class DishService  {
  minPrice = 0;
  maxPrice = 100;
  avgRating! : Map<Dish, number>;

  constructor(private http: HttpClient) {
    this.dishes$ = this.watchDishes
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(_ => console.log("tap")),
        switchMap((term:HttpParams) => {
        console.log("switchMap");
        return this.http.get<Dish[]>(this.dishesUrl, {...this.httpOptions, params: term}).pipe(
          tap(dishes =>{
            this.avgRating = new Map<Dish, number>();
            for(let dish of dishes){
              if(!dish.reviews ){
                dish.reviews = []
              }
              const tmp = dish.reviews.length===0 ? 1: dish.reviews.length;
              this.avgRating.set(dish, dish.reviews.map(r => r.rating).reduce((a, b) => a + b, 0) / tmp);
              // this.getAvgRating(dish);
            }
            if(!(term?.get('minPrice') && term?.get('maxPrice'))){
              this.maxPrice = Math.max(...dishes.map(d => d.price));
              this.minPrice = Math.min(...dishes.map(d => d.price));
            }
            console.log("dishes", dishes)

          } ),
        )
      }));
    setTimeout(() => this.watchDishes.next(null), 0);
  }

  dishes$!: Observable<Dish[]>;
  watchDishes = new Subject<any>();

  updateParams(params: HttpParams | null) {

    console.log("updateParams", params);

    this.watchDishes.next(params);
  }

  ifDishCheapest(dish: Dish) {
    return dish.price === this.minPrice;
  }
  ifDishExpensive(dish: Dish) {
    return dish.price === this.maxPrice;
  }
  getMinPrice() {
    return this.minPrice;
  }
  getMaxPrice() {
    return this.maxPrice;
  }

  addDishesToDB() {
    DISHES.forEach(d => {
      this.addDish(d).subscribe();
    })
  }

  removeDish(dish: Dish){
    return this.http.delete(this.dishesUrl + "/" + dish._id).pipe(
      catchError((error: any) => {
        console.log(error);
        return of(error.json)
      }),
      tap(_ => this.watchDishes.next(null))
    );
  }

  addDish(dish: Dish) {
    console.log("addDish", dish);
    return this.http.post<Dish>(this.dishesUrl+'/', {...dish}).pipe(
      catchError((error: any) => {
        console.log(error);
        return of(error.json)
      }),
      tap(_ => this.watchDishes.next(null))
    );
  }
  private dishesUrl = "http://localhost:3000/dishes";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  getDishes(): Observable<Dish[]> {
    return this.dishes$;
  }

  getOneDish(id: string):Observable<Dish>{
    console.log("getOneDish", id);
    return this.http.get<Dish>(this.dishesUrl + "/" +id);
  }

  addReview(id: string, review: Review) {
    return this.http.put(this.dishesUrl + "/" + id, {review: review}, this.httpOptions).pipe(
      catchError((error: any) => {
        console.log(error);
        return of(error.json)
      }),
      tap(_ => this.watchDishes.next(null))
    );
  }

  getAvgRating(dish: Dish) {
     const tmp = this.avgRating.get(dish);
     console.log("tmp", tmp);
     if(tmp != undefined && !isNaN(tmp)){
        return tmp;
     }
     return 0;
      // return this.avgRating.get(dish) ?? 0;
  }

  editDish(dish: Dish) {
    return this.http.put<Dish>(this.dishesUrl+'/'+dish._id, {...dish}, this.httpOptions).pipe(
      catchError((error: any) => {
        console.log(error);
        return of(error.json)
      }),
      tap(_ => this.watchDishes.next(null))
    );
  }
}
