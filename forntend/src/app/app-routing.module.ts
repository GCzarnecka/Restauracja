import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from "path";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {DishDetailsComponent} from "./components/dish-details/dish-details.component";
import {CartComponent} from "./components/cart/cart.component";
import {AddDishComponent} from "./components/add-dish/add-dish.component";
import {EditDishComponent} from "./components/edit-dish/edit-dish.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";

const routes: Routes = [
  { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'dish/:id', component: DishDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path:'add-dish', component: AddDishComponent},
  {path:'edit-dish/:id', component: AddDishComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'profile', component: ProfileComponent},
  {path:'admin-panel', component: AdminPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
