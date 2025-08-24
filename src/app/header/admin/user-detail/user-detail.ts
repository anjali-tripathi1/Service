import { Component } from '@angular/core';
import { User } from '../../../Models/user';
import { UserService } from '../../../Services/user.Service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css'
})
export class UserDetail {
    selectedUser: User | undefined;
  // userService = inject(USER_TOKEN);


 constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
    })
  }
}
