import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../Model/User";


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(private userService: UserService)  {

  }
  users?: User[];
    ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  ban(user: User) {
    user.banned = true;
    this.userService.updateUser(user).subscribe(_ => this.getUsers());
  }
}
