import { Component } from '@angular/core';
import {User} from "../../Model/User";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user: User = {username: "", email: "", password: "", role: "", cart: [], orders: [], banned: false};
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  login() {
    this.userService.login(this.user.username, this.user.password).subscribe( (data) => {
      console.log(data);
  });
}
}
