import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './components/dish/dish.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DishDetailsComponent } from './components/dish-details/dish-details.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AddDishComponent } from './components/add-dish/add-dish.component';
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import {NpnSliderModule} from "npn-slider";
import { CheckboxlistComponent } from './components/checkboxlist/checkboxlist.component';
import { ReviewComponent } from './components/review/review.component';
import { EditDishComponent } from './components/edit-dish/edit-dish.component';
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import { SignInComponent } from './components/sign-in/sign-in.component';
import {AuthInterceptor, } from "./Services/auth.interceptor";
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    RestaurantComponent,
    DishesComponent,
    DishDetailsComponent,
    NavBarComponent,
    CartComponent,
    CartHeaderComponent,
    AddDishComponent,
    SearchComponent,
    CheckboxlistComponent,
    ReviewComponent,
    EditDishComponent,
    SignUpComponent,
    SignInComponent,
    SignInComponent,
    UserPanelComponent,
    ProfileComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NpnSliderModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
