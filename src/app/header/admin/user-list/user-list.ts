import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.Service';
import { User } from '../../../Models/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-list',
  imports: [CommonModule,],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})


export class UserList{

  //   constructor(@Inject(USER_TOKEN) private userService: UserService){

  // }

   userList:any
   constructor(private userService:UserService){}

  ngOnInit(){
      this.userList = this.userService.GetAllUsers();
  }


  ShowUserDetails(user: User){
    this.userService.OnShowUserDetails(user);
  }
}
