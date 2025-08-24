import { Component } from '@angular/core';
import { UserService } from '../../Services/user.Service';
import { FormsModule } from '@angular/forms';
import { UserList } from "./user-list/user-list";
import { UserDetail } from "./user-detail/user-detail";

@Component({
  selector: 'app-admin',
  imports: [FormsModule, UserList, UserDetail],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {
  //   constructor(@Inject(USER_TOKEN) private userService: UserService){

  // }

  constructor(private userService:UserService) {

  }

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  CreateNewUser(){
    this.userService.CreateUser(this.name, this.gender, this.subType, this.status);
  }
}
