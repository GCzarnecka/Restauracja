import { Component } from '@angular/core';
import {User} from "../../Model/User";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = {cart: [], orders: [], username: "", email: "", password: "", role: "", banned: false};
  userService: UserService;
  error?: string;
 constructor(userService: UserService) {
    this.userService = userService;
  }

  register() {
   console.log(this.user);
    this.userService.register(this.user.username, this.user.email, this.user.password).subscribe(
      (data) => {
        console.log('test',data);
      },
      (error) => {
        console.log(error);
        this.error = error.message;
      }
    );
}

}
