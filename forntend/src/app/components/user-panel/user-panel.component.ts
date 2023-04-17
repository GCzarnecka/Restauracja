import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  username = '';
  constructor(public userService: UserService) {
  }


  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.username = user.username);
  }

}
